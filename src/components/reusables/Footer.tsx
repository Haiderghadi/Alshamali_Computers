import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at 0.2px 0.2px , #f3f4f6 0.2px , transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
      className=" bg-neutral-300 w-full text-heading px-5 pt-24 lg:px-0"
    >
      <div className="flex flex-col gap-5 sm:flex-wrap sm:flex-row lg:px-10 sm:justify-between px-5">
        <div className="flex flex-col gap-4">
          <img
            src="./shamali_logo.png"
            width={200}
            height={200}
            className=""
            alt="logo"
          ></img>
          <div className="text-lightDescription flex flex-col gap-2">
            <p>
              Delivering top-notch customer service is our priority. With
              <br />
              comprehensive services, and round-the-clock support, we strive to
              <br />
              make your experience exceptional.
              <br />
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Important Links</h1>
          <div className="flex flex-col gap-2 text-lightDescription">
            <a href="/shop">Shop</a>
            <a href="/services">Services</a>
            <a href="/partners">Partners</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Al Shamali Computers</h1>
          <div className="text-lightDescription flex flex-col gap-2">
            <p>
              Head Office - Wara Building, Jaber Al Mubarak
              <br /> Street, Sharq, Kuwait
            </p>
            <p>
              Branch Office - 221, B-Tower, Lulua Ibn Khaldun Complex, <br />{" "}
              Ibn Khaldun Street, Hawally, Kuwait
            </p>
          </div>
          <div className="flex gap-5 text-xl cursor-pointer">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 px-5 lg:px-10 pt-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-center font-bold">
            Subscribe to our emails
          </h1>
          <div className="sm:border p-2 px-3 rounded-full border-gray-400 flex flex-col sm:flex-row justify-between items-center">
            <input
              type="text"
              placeholder="Your Email Address"
              className="border lg:w-[600px] px-4 text-left py-2 rounded-full sm:rounded-none sm:border-0 sm:py-0 sm:px-0"
            />
            <button className="bg-gray-800 text-white px-7 py-2 mt-4 sm:mt-0 rounded-full">
              SignUp
            </button>
          </div>
        </div>
      </div>
      <div className="text-lightDescription text-sm border-t border-gray-300 px-5 mt-10 flex flex-col gap-2 py-5 justify-center items-center sm:flex-row sm:justify-between">
        <p>© 2025, Al Shamali Computers</p>
        <p>
          Privacy policy |Terms of service | Contact information | Refund policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
