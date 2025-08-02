import Header from "./components/Header/Header";
import Footer from "./components/reusables/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <div className="bg-neutral-200">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
