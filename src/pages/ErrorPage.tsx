import useTitlePage from "@/hooks/useTitlePage";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useTitlePage("Not Found :(");
  return (
    <>
      <main>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          className="absolute inset-0 object-cover -z-10 size-full"
        />
        <div className="px-6 py-32 mx-auto text-center max-w-7xl sm:py-40 lg:px-8">
          <p className="font-semibold text-white text-base/8">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white text-balance sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex justify-center mt-10">
            <Link to="/" className="font-semibold text-white text-sm/7">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
