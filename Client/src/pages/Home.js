import React from "react";
import Announcement from "../components/Announcment";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slide from "../components/Slider";

function Home() {
  return (
    <div>
      <div className="container">
        <Announcement />
        <Navbar />
        <Slide />
        {/* <Categories />
        <Products /> */}
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
