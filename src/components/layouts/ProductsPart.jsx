import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Bilai from "../../assets/bilai.png";
import Kalai from "../../assets/kalai.png";

const ProductsPart = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      // console.log(data);

      setAllData(data.data.products);
    }
    alldatas();
  }, []);

  // ===================
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container>
        {allData.map((item) => (
          <Slider {...settings}>
            <div>
              <Product
                imgSrc={item.images}
                badgeName={"New"}
                titleP={item.title}
                price={"$" + item.price}
              />
            </div>
            <div>
              <Product
                imgSrc={item.images}
                badgeName={"Sell"}
                titleP={item.title}
                price={"$" + item.price}
              />
            </div>
            <div>
              <Product
                imgSrc={item.images}
                badgeName={"New"}
                titleP={item.title}
                price={"$" + item.price}
              />
            </div>
            <div>
              <Product
                imgSrc={item.images}
                badgeName={"Sell"}
                titleP={item.title}
                price={item.price}
              />
            </div>
          </Slider>
        ))}
      </Container>

      <div className="py-6">
        <Container>
          <Flex className={"justify-between flex-wrap gap-y-3"}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ProductsPart;
