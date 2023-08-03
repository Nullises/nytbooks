/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { config as configApp } from "../../../config";

export default function useAxios(path, param, responseType = "json") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const request = axios.CancelToken.source();
  const config = {
    headers: {},
    method: "GET",
    response: true,
    responseType: responseType,
    cancelToken: request.token,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          configApp.bookURL +
            `/${path}` +
            `?api-key=${configApp.apiKey}` +
            `&${param}`,
          config
        );
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData(), 1000;
    });

    if (data) {
      return () => request.cancel(); // (*)
    }
  }, []);

  return { data, loading, error };
}
