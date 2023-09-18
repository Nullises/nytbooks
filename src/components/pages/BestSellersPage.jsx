import { useState } from "react";
import {
  getBestSellersListsNames,
  getCurrentBestSellersListsData,
} from "../../services/bestSellersListsService";
import TableBooks from "../common/TableBestSellers";
import bestSellImg from "/best_sellers.png";
function BestSellersPage() {
  // controlling local states
  const [listToSearch, setListToSearch] = useState("");
  const [books, setBooks] = useState({});
  const [loadingBooks, setLoadingBooks] = useState(false);

  // getBestSellerListsNames acts as a hook
  // We're using array destructuring
  const [{ names }, { loadingNames }] = getBestSellersListsNames();
  const listNames = names?.data?.results;

  // getBestSellersListsData acts an async function
  async function getBestSellerlists(e) {
    e.preventDefault();
    setLoadingBooks(true);

    const bestSellerListFiltered = listNames.filter(
      (el) => el.list_name === listToSearch
    );

    console.log("bestSellerList filtered", bestSellerListFiltered);
    let listSearched = bestSellerListFiltered[0]?.list_name_encoded;

    if (bestSellerListFiltered.length === 0) {
      setLoadingBooks(false);
    } else {
      const books = await getCurrentBestSellersListsData(
        `${listSearched}.json`
      );
      setBooks(books);
      setLoadingBooks(false);
    }
  }

  function onSelectList(e) {
    const selected = e.target.value;
    setListToSearch(selected);
  }

  return (
    <>
      {listNames && !loadingNames && (
        <>
          <h1 className="text-center text-5xl mt-10 mb-10">
            Lists with Best-Sellers
          </h1>
          <div className="flex justify-center">
            <img
              src={bestSellImg}
              className="h-2/12 w-2/12"
              alt="A woman with so much money, thanks it's book sells"
            />
          </div>
          <p className="text-center mt-10">
            Please select a list name to search books
          </p>
          <div className="flex justify-center">
            <div className="overflow-x-auto">
              <div className="flex justify-center mt-5 mb-5">
                <select
                  id="list-name"
                  className="select select-ghost w-full max-w-xs"
                  onChange={(e) => onSelectList(e)}
                >
                  <option disabled selected>
                    List Name
                  </option>
                  {listNames.map((item, key) => {
                    return (
                      <option key={key} value={item.listName}>
                        {item.list_name}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn btn-accent ml-5"
                  onClick={(e) => getBestSellerlists(e)}
                  disabled={listToSearch === ""}
                >
                  {loadingBooks ? (
                    <>
                      <span className="loading loading-spinner loading-xs bg-white"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Search{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-20 mr-20">
            {books.books && (
              <TableBooks books={books.books} title={books.list_name} />
            )}
          </div>
        </>
      )}

      {loadingNames && (
        <div className="flex justify-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default BestSellersPage;
