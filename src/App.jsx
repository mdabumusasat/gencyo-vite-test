import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Helper/Loader";
// Lazy load all route components for better performance
const Home1 = lazy(() => import("./pages/index"));
const Home2 = lazy(() => import("./pages/index-2"));
const Home3 = lazy(() => import("./pages/index-3"));
const Home4 = lazy(() => import("./pages/index-4"));
const NewsDetails = lazy(() => import("./pages/news-details"));
const NewsGrid = lazy(() => import("./pages/page-blog"));
const PageError = lazy(() => import("./pages/page-404"));
const PageAbout = lazy(() => import("./pages/page-about"));
const PageContact = lazy(() => import("./pages/page-contact"));
const PageFaq = lazy(() => import("./pages/page-faq"));
const PagePricing = lazy(() => import("./pages/page-pricing"));
const PageServiceDetails = lazy(() => import("./pages/page-service-details"));
const PageServices = lazy(() => import("./pages/page-services"));
const PageProject = lazy(() => import("./pages/page-project"));
const PageProjectDetails = lazy(() => import("./pages/page-project-details"));
const PageTeamDetails = lazy(() => import("./pages/page-team-details"));
const PageTeam = lazy(() => import("./pages/page-team"));
const PageTestimonial = lazy(() => import("./pages/page-testimonial"));
const ShopCart = lazy(() => import("./pages/shop-cart"));
const ShopCheckout = lazy(() => import("./pages/shop-checkout"));
const ShopProductDetails = lazy(() => import("./pages/shop-product-details"));
const ShopSidebar = lazy(() => import("./pages/shop-products-sidebar"));
const ShopProducts = lazy(() => import("./pages/shop-products"));

function App() {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home1 />} />
              <Route path="/index-2" element={<Home2 />} />
              <Route path="/index-3" element={<Home3 />} />
              <Route path="/index-4" element={<Home4 />} />
              <Route path="/news-details" element={<NewsDetails />} />
              <Route path="/page-blog" element={<NewsGrid />} />
              <Route path="*" element={<PageError />} />
              <Route path="/page-about" element={<PageAbout />} />
              <Route path="/page-contact" element={<PageContact />} />
              <Route path="/page-faq" element={<PageFaq />} />
              <Route path="/page-pricing" element={<PagePricing />} />
              <Route path="/page-service-details" element={<PageServiceDetails />} />
              <Route path="/page-services" element={<PageServices />} />
              <Route path="/page-project" element={<PageProject />} />
              <Route path="/page-project-details" element={<PageProjectDetails />} />
              <Route path="/page-team-details" element={<PageTeamDetails />} />
              <Route path="/page-team" element={<PageTeam />} />
              <Route path="/page-testimonial" element={<PageTestimonial />} />
              <Route path="/shop-cart" element={<ShopCart />} /> 
              <Route path="/shop-checkout" element={<ShopCheckout />} />
              <Route path="/shop-product-details" element={<ShopProductDetails />} />
              <Route path="/shop-products-sidebar" element={<ShopSidebar />} />
              <Route path="/shop-products" element={<ShopProducts />} />
            </Routes>
          </Suspense>
        </Router>
      </DarkModeProvider>
    </ErrorBoundary>
  );
}

export default App;
