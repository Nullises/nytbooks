import notFoundImage from "../../assets/404.png";

const NotFoundPage = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl mb-10 font-semibold">404</p>
          <div className="flex justify-center">
            <img
              className="h-3/6 w-3/6"
              src={notFoundImage}
              alt="A woman dissapointed since that page was not found..."
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
