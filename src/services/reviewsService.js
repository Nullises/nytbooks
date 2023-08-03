import HTTPService from "./HTTP/httpService";
const reviewsJSON = "reviews.json";

const getReviews = async function (author, title, isbn) {
  const reviews = await HTTPService.get(
    reviewsJSON,
    `author=${author}&title=${title}&isbn=${isbn}`
  );
  return reviews?.data?.results;
};

export { getReviews };
