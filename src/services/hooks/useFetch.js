/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { config as configApp } from "../../../config";
export default function useFetchData(path, param, responseType = "json") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const config = {
    headers: {},
    method: "GET",
    response: true,
    responseType: responseType,
  };

  useEffect(() => {
    fetch(
      configApp.bookURL +
        `/${path}` +
        `?api-key=${configApp.apiKey}` +
        `&${param}`,
      config
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
