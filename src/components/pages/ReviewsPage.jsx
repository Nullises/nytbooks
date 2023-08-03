import { useState } from "react";
import { getReviews } from "../../services/reviewsService";
import ErrorMessage from "../common/ErrorMessage";
import reviewsImg from "../../assets/reviews.png";
import TableReviews from "../common/TableReviews";
function ReviewsPage() {
  // controlling local states
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);

  async function getReviewsData() {
    setLoadingReviews(true);

    try {
      const reviewsData = await getReviews(author, title, isbn);
      if (reviewsData.length === 0) {
        setReviewsError(true);
      }
      setReviews(reviewsData);
      setLoadingReviews(false);
    } catch (error) {
      setReviewsError(true);
    }
  }

  function onChangeInput(id) {
    let val = document.getElementById(`${id}`).value;
    if (id === "author") {
      setAuthor(val);
    }
    if (id === "title") {
      setTitle(val);
    }
    if (id === "isbn") {
      setISBN(val);
    }
  }

  return (
    <>
      {reviewsError && (
        <div className="flex justify-center mt-5 mb-5 mr-5 ml-5">
          <ErrorMessage
            message="Please enter a valid search criteria (author, title, isbn)"
            onClick={() => setReviewsError(false)}
          />
        </div>
      )}
      {
        <>
          <h1 className="text-center text-5xl mt-10 mb-10">Reviews</h1>
          <div className="flex justify-center">
            <img
              src={reviewsImg}
              className="h-2/12 w-2/12"
              alt="An old Typewritter"
            />
          </div>
          <p className="text-center mt-10">
            Please enter a valid search criteria
          </p>
          <div className="flex justify-center">
            <div className="overflow-x-auto">
              <div className="flex justify-center mt-5 mb-5">
                <input
                  type="text"
                  placeholder="Author"
                  id="author"
                  onChange={() => onChangeInput("author")}
                  className="input input-bordered w-full max-w-xs mr-5"
                />
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={() => onChangeInput("title")}
                  className="input input-bordered w-full max-w-xs mr-5"
                />
                <input
                  type="text"
                  placeholder="ISBN"
                  id="isbn"
                  onChange={() => onChangeInput("isbn")}
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  className="btn btn-accent ml-5"
                  onClick={(e) => getReviewsData(e)}
                  disabled={author === "" && title === "" && isbn === ""}
                >
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
                </button>
              </div>
              {reviews.length > 0 && (
                <div className="mr-10 ml-10">
                  <TableReviews reviews={reviews} />
                </div>
              )}
            </div>
          </div>

          {loadingReviews && (
            <div className="flex justify-center">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          )}
        </>
      }
    </>
  );
}

export default ReviewsPage;
