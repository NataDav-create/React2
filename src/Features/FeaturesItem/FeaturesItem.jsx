import s from "./FeaturesItem.module.css";

const FeaturesItem = ({ urlBg, text }) => {
  const layoutStyles = {
    backgroundImage: { urlBg } ? `url(${urlBg})` : null,
  };
  return (
    <div className={s.featuresSliderItem}>
      <div style={layoutStyles} className={s.featuresImg}>
        {" "}
      </div>
      <div className={s.featuresFeature}>{text}</div>{" "}
    </div>
  );
};

export default FeaturesItem;
