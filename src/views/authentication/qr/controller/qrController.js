import React, { useEffect, useState } from 'react';
import { QrView } from '../view/QrView';
import axios from 'axios';
import { backendAuthApi } from '../../../../axios/instance/BackendAxiosInstance';
import { BACKEND_API } from '../../../../axios/constant/BackendApi';
import responseUtil from 'utils/responseUtil';

const QrController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [qrImageDataUrl, setQrImageDataUrl] = useState(null);

  let sourceToken = axios.CancelToken.source();

  const fetchQr = async () => {
    await backendAuthApi({
      url: BACKEND_API.GENERATE_QR,
      method: 'GET',
      cancelToken: sourceToken.token
    })
      .then((res) => {
        if (responseUtil.responseIsSuccess(res.data.resCode)) {
          setQrImageDataUrl(res.data.resData);
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchQr();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <QrView isLoading={isLoading} qrImageDataUrl={qrImageDataUrl} />;
};

export default QrController;
