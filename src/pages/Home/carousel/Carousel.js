import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Card from "./Card";
import { useSelector } from "react-redux";

const Carousel = (props) => {
  const listFilmTrending = useSelector((state) => state.FilmTrendingReducer.listFilmTrending) || null;
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;

  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const imgStyle = {
    width: "232px",
    height: "343px",
  };
  return (
    <div>
      <Slider
        className="banner-cover"
        arrows={false}
        asNavFor={nav2}
        ref={(slider) => (slider1.current = slider)}
        fade={true}
      >
        {listFilmTrending.map((item, index) => {
          if(item.title)
            return (
              <div className="banner">
                <div
                  className="cover-bg"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.backdrop_path})`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "black",
                      height: "100%",
                      width: "100%",
                      opacity: "0.8",
                    }}
                  ></div>
                </div>
              </div>
            );
        })}
      </Slider>

      <div className="container cover">
        <h1 className="title-slider">
          NEW ITEMS <span>OF THIS SEASON</span>
        </h1>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2.current = slider)}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings}
        >
          {listFilmTrending.map((item, index) => {
            if(item.title)
              return <Card infor={item} imgStyle={imgStyle} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
