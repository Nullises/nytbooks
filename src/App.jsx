import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NotFoundPage from "./components/pages/NotFoundPage";
import HomePage from "./components/pages/HomePage";
import BestSellersPage from "./components/pages/BestSellersPage";
import ReviewsPage from "./components/pages/ReviewsPage";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/best-sellers" Component={BestSellersPage} />
          <Route exact path="/reviews" Component={ReviewsPage} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
