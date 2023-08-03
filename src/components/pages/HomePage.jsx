import bookGirl from "../../assets/book_girl.png";

const HomePage = () => {
  return (
    <>
      <div className="hero min-h-min bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={bookGirl}
            className="h-3/6 w-3/6"
            alt="Girl reading a book"
          />
          <div className="divider lg:divider-horizontal"></div>
          <div>
            <h1 className="text-5xl font-bold">NYT Books App</h1>
            <p className="py-6">
              A beautiful App based on New York Times API (BOOKS)
            </p>
            <p className="py-5">
              More information:{" "}
              <a
                className="italic underline underline-offset-8"
                href="https://developer.nytimes.com/"
              >
                Developer NYTimes
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
