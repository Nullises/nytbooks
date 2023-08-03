import useAxios from "../hooks/useAxios";

export default function HTTPAdapter(path, param, responseType) {
  // Adapter pattern
  /**
   * Adapter is a structural design pattern that allows objects with
   * incompatible interfaces to collaborate.
   * (https://refactoring.guru/design-patterns/adapter)
   *
  /**
   * You can use useAxios or useFetch hooks
   */
  const getInitialData = useAxios(path, param, responseType);

  return { getInitialData };
}
