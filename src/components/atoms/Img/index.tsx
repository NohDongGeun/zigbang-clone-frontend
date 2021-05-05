import React, { useEffect, useRef, useState } from "react";
import { ITailwind } from "../../../interfaces/Tailwind";
import placeholderImg from "../../../assets/img/placeholder.jpg";

interface IImgProps extends ITailwind {
  /**
   * 이미지 소스
   */
  src: string;

  /**
   * 이미지 alt
   */
  alt: string;
}

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

function onIntersection(
  entries: IntersectionObserverEntry[],
  io: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}

const Img: React.FC<IImgProps> = ({ src, alt, className }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      setIsLoad(true);
    };

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        // 확인을 위해 이미지 절반이 나타날 때 로딩한다.
        threshold: 0.5,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      src={isLoad ? src : placeholderImg}
      alt={alt}
      className={className}
    />
  );
};

export default Img;
