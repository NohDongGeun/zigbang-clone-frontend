import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";
import { Img } from "../../..";


interface IDetailImg {
  images: string[];
}

const DetailImg: React.FC<IDetailImg> = ({ images }) => {
  const [size, setSize] = useState<number>(0);

  //화면 size 가지고오기
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={` w-full flex relative`}>
      <Carousel
        centerMode={540 < size && 640 > size ? true : false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerSlidePercentage={60}
      >
        {images.map((e, i) => {
          return (
            <div className={"h-60 sm:h-full"}>
              <Img src={e} alt={"방 이미지"} key={i} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default DetailImg;
