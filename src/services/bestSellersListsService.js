import HTTPService from "./HTTP/httpService";
import HTTPAdapter from "./adapter/HTTPAdapter";
const listsURL = "lists";

const getBestSellersListsNames = function () {
  const listsNames = HTTPAdapter(`${listsURL}/names.json`, "").getInitialData;
  return [
    { names: listsNames.data },
    { loadingNames: listsNames.loading },
    { errorNames: listsNames.error },
  ];
};

const getBestSellersListsData = async function (date, name) {
  const listsData = await HTTPService.get(`${listsURL}/${date}/${name}`, "");
  return listsData?.data?.results;
};

const getCurrentBestSellersListsData = async function (name) {
  const currentListsData = await HTTPService.get(
    `${listsURL}/current/${name}`,
    ""
  );
  return currentListsData?.data?.results;
};

export {
  getBestSellersListsData,
  getBestSellersListsNames,
  getCurrentBestSellersListsData,
};
