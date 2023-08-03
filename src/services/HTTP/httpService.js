import axios from "axios";
import { config as configApp } from "../../../config";

// This is a common HTTP Service
// Unlike hooks to fetch data, this one could be called
// inside a function in body of .jsx file
// Hooks only work to fetch initial data
const HTTPService = {
  get: async (path, param, responseType = "json") => {
    const config = {
      headers: {},
      method: "GET",
      response: true,
      responseType: responseType,
    };

    try {
      const response = await axios.get(
        configApp.bookURL +
          `/${path}` +
          `?api-key=${configApp.apiKey}` +
          `&${param}`,
        config
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.log("error", error);
      throw new Error("error");
    }
  },
};

export default HTTPService;
