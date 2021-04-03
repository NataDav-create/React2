import s from "./FeaturesItems.module.css";
import FeaturesItem from "../FeaturesItem";
import iconOne from "../../images/1.svg";
import iconTwo from "../../images/2.svg";
import iconThree from "../../images/3.svg";
import iconFour from "../../images/4.svg";

const FeaturesItems = () => {
  return (
    <div>
      <div className={s.featuresSliderItems}>
        <FeaturesItem urlBg={iconOne} text="Первое целевое преимущество" />
        <FeaturesItem urlBg={iconTwo} text="Второе целевое преимущество" />
        <FeaturesItem urlBg={iconThree} text="Третье целевое преимущество" />
        <FeaturesItem urlBg={iconFour} text="Четвертое целевое преимущество" />
      </div>{" "}
    </div>
  );
};

export default FeaturesItems;
