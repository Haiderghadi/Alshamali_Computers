import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/reusables/Footer";
import Home from "./pages/Home";

import Services from "./pages/Services";
import Partners from "./pages/Partners";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-neutral-200">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shop" element={<Shop />}> */}
          {/* <Route path="category/:category" element={<CategoryPage />} /> */}
          {/* <Route path="product/:productId" element={<ProductDetail />} /> */}
          {/* </Route> */}
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
