import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { SlideShowImage } from "../../Model/ImageModel";

export interface SlideShowProps {
  data: SlideShowImage[];
}

const SlideShow = (props: SlideShowProps) => {
  const slideRef = useRef<Slider | null>();

  useEffect(() => {
    if (slideRef.current) {
      const dotNotActive = document.querySelector<HTMLElement>("#slick-dot-0")!;
      dotNotActive.style.backgroundColor = "white";
    }
  }, []);

  const settings = {
    className: "center",
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    dotClass: "slick-dots",
    touchMove: false,
    pauseOnHover: false,
    customPaging: (index: number) => {
      return (
        <div
          style={{
            width: "30px",
          }}
        >
          <div
            id={`slick-dot-${index}`}
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "gray",
              borderRadius: "50%",
              margin: "auto",
            }}
          />
        </div>
      );
    },
    beforeChange: (index: number) => {
      let activeIndex = index + 1;
      if (index === 11) {
        activeIndex = 0;
      }
      const dotActive = document.querySelector<HTMLElement>(
        `#slick-dot-${activeIndex}`
      )!;
      dotActive.style.backgroundColor = "white";
      const dotNotActive = document.querySelector<HTMLElement>(
        `#slick-dot-${index}`
      )!;
      dotNotActive.style.backgroundColor = "gray";
    },
  };

  return (
    <div style={{ padding: "20px", marginTop: "50px" }}>
      <Slider
        {...settings}
        ref={(slider) => {
          slideRef.current = slider;
        }}
      >
        {props.data.map((item, index) => (
          <div style={{ width: "100%", height: "100%" }}>
            <img
              id={`slide-img-${index}`}
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: "95%",
                height: "95%",
                borderRadius: "5%",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideShow;
