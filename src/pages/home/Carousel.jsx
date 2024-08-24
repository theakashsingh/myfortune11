/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

import { useCallback, useEffect, useRef, useState } from "react";

const Slide = ({ imageSrc }) => (
  <div className="relative w-full h-full">
    <img src={imageSrc} alt="" className="w-full h-full object-cover" />
  </div>
);

const CarouselButton = ({
  useTriangle,
  disabled,
  clickHandler,
  icon,
  isLeftIcon,
}) => (
  <div
    className={`absolute top-1/2 ${
      isLeftIcon ? "left-0" : "right-0"
    } transform -translate-y-1/2 z-10`}
  >
    {useTriangle && (
      <div
        className={`w-0 h-0 ${
          isLeftIcon
            ? "border-r-8 border-r-transparent border-l-8 border-l-${color}"
            : "border-l-8 border-l-transparent border-r-8 border-r-${color}"
        }`}
      />
    )}
    <button
      className={`absolute ${
        isLeftIcon ? "left-3" : "right-3"
      } bg-transparent border-none outline-none p-2 cursor-pointer`}
      disabled={disabled}
      onClick={clickHandler}
    >
      {icon}
    </button>
  </div>
);

const CarouselIndicators = ({
  position,
  nextActiveIndex,
  clickHandler,
  slides,
}) => (
  <ol
    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex ${position} space-x-2 z-20`}
  >
    {slides.map((_, i) => (
      <li
        key={i}
        className={`w-8 h-1 bg-black ${
          i === nextActiveIndex ? "opacity-100" : "opacity-50"
        } cursor-pointer`}
        onClick={() => {
          slides.length !== 1 && i !== nextActiveIndex ? clickHandler(i) : null;
        }}
      />
    ))}
  </ol>
);

const Carousel = ({
  autoPlay = true,
  activeSlideDuration = 3000,
  interactionMode = "swipe",
  indicatorsColor = "white",
  alignIndicators = "center",
  useRightLeftTriangles = false,
  leftTriangleColor = "white",
  leftIcon,
  rightTriangleColor = "white",
  rightIcon,
  slides = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextActiveIndex, setNextActiveIndex] = useState(0);
  const [activeIndexClasses, setActiveIndexClasses] = useState(
    "transition-transform duration-500 ease"
  );
  const [nextActiveIndexClasses, setNextActiveIndexClasses] = useState("");
  const [disablePrevNext, setDisablePrevNext] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(null);
  const [indicatorPosition, setIndicatorPosition] = useState("items-center");
  const animationDuration = 500;
  const autoSlide = useRef(null);
  const direction = useRef("to-right");

  useEffect(() => {
    setIndicatorPosition(
      alignIndicators === "right"
        ? "items-end"
        : alignIndicators === "left"
        ? "items-start"
        : "items-center"
    );
  }, [alignIndicators]);

  const animateSliding = useCallback(() => {
    setActiveIndexClasses(
      direction.current === "to-left"
        ? "transition-transform duration-600 ease-in-out transform -translate-x-full"
        : "transition-transform duration-600 ease-in-out transform translate-x-full"
    );
    setNextActiveIndexClasses(
      direction.current === "to-left"
        ? "transition-transform duration-600 ease-in-out transform translate-x-full"
        : "transition-transform duration-600 ease-in-out transform -translate-x-full"
    );
  }, []);

  const setActiveSlide = nextActiveI => {
    setActiveIndex(nextActiveI);
    setActiveIndexClasses("transition-transform duration-600 ease-in-out");
    setNextActiveIndexClasses("");
    setDisablePrevNext(false);
  };

  const restartAutoSliding = useCallback(
    nextAcIn => {
      setNextActiveIndex(nextAcIn);
      setDisablePrevNext(true);
      animateSliding();
      setTimeout(() => {
        setActiveSlide(nextAcIn);
      }, animationDuration);

      autoSlide.current = autoPlay
        ? setInterval(() => {
            stopAutoSliding();
            direction.current = "to-left";
            let nextActiveI = (activeIndex + 1) % slides.length;
            restartAutoSliding(nextActiveI);
          }, activeSlideDuration)
        : null;
    },
    [animateSliding, activeSlideDuration, activeIndex, autoPlay, slides.length]
  );

  const nextSlide = useCallback(() => {
    stopAutoSliding();
    direction.current = "to-left";
    let nextActiveI = (activeIndex + 1) % slides.length;
    restartAutoSliding(nextActiveI);
  }, [activeIndex, slides.length, restartAutoSliding]);

  const startAutoSliding = useCallback(() => {
    autoSlide.current = autoPlay
      ? setInterval(nextSlide, activeSlideDuration)
      : null;
  }, [autoPlay, activeSlideDuration, nextSlide]);

  const stopAutoSliding = () => {
    clearInterval(autoSlide.current);
  };

  useEffect(() => {
    startAutoSliding();
    return () => stopAutoSliding();
  }, [startAutoSliding]);

  const unify = e => (e.changedTouches ? e.changedTouches[0] : e);
  const getSetXCoordinate = e => setXCoordinate(unify(e).clientX);
  const moveSlide = e => {
    if (xCoordinate || xCoordinate === 0) {
      const dx = unify(e).clientX - xCoordinate;
      const s = Math.sign(dx);
      if (s < 0) nextSlide();
      else if (s > 0) prevSlide();
    }
  };

  const prevSlide = () => {
    stopAutoSliding();
    direction.current = "to-right";
    let nextActiveI = (activeIndex - 1 + slides.length) % slides.length;
    restartAutoSliding(nextActiveI);
  };

  const onCarouselIndicator = index => {
    stopAutoSliding();
    direction.current = index < activeIndex ? "to-right" : "to-left";
    restartAutoSliding(index);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ cursor: interactionMode === "swipe" ? "pointer" : "auto" }}
      onMouseDown={e => interactionMode === "swipe" && getSetXCoordinate(e)}
      onTouchStart={e => interactionMode === "swipe" && getSetXCoordinate(e)}
      onMouseUp={e =>
        !disablePrevNext && interactionMode === "swipe" && moveSlide(e)
      }
      onTouchEnd={e =>
        !disablePrevNext && interactionMode === "swipe" && moveSlide(e)
      }
      onMouseMove={e => interactionMode === "swipe" && e.preventDefault()}
      onTouchMove={e => interactionMode === "swipe" && e.preventDefault()}
      onMouseEnter={() => stopAutoSliding()}  // Stop sliding on hover
      onMouseLeave={() => startAutoSliding()} // Resume sliding when mouse leaves
    >
      {slides.map((el, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-600 ease-in-out ${
            i === activeIndex
              ? activeIndexClasses
              : i === nextActiveIndex
              ? nextActiveIndexClasses
              : "hidden"
          }`}
        >
          <Slide imageSrc={el.image} />
        </div>
      ))}
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={leftTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => slides.length !== 1 && prevSlide()}
        icon={
          leftIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          )
        }
        isLeftIcon
      />
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={rightTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => slides.length !== 1 && nextSlide()}
        icon={
          rightIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          )
        }
      />
      <CarouselIndicators
        position={indicatorPosition}
        nextActiveIndex={nextActiveIndex}
        indicatorsColor={indicatorsColor}
        clickHandler={onCarouselIndicator}
        slides={slides}
      />
    </div>
  );
};

export default Carousel;
