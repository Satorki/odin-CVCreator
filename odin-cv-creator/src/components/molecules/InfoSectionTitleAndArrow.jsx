import InfoSectionTitle from "../atoms/InfoSectionTitle";
import InfoSectionTitleArrow from "../atoms/InfoSectionTitleArrow";

const InfoSectionTitleAndArrow = ({ title }) => {
  return (
    <div className="flex justify-between ">
      <InfoSectionTitle title={title} />
      <InfoSectionTitleArrow />
    </div>
  );
};

export default InfoSectionTitleAndArrow;
