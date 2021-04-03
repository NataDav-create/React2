import s from "./FeaturesSlider.module.css";
import FeaturesItems from "../FeaturesItems";

const FeaturesSlider = () => {
  return (
    <div>
      <div className={s.featuresSlider}>
        <FeaturesItems />
        <button className={s.featuresSliderArrow + " " + s.featuresSliderPrev}>
          <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
              {" "}
            </path>{" "}
          </svg>{" "}
        </button>{" "}
        <button className={s.featuresSliderArrow + " " + s.featuresSliderNext}>
          <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
              {" "}
            </path>{" "}
          </svg>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default FeaturesSlider;
