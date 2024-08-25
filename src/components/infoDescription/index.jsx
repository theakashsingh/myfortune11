/* eslint-disable react/prop-types */

const InfoDescription = ({ description }) => {
  return (
    <div className="py-20 ">
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-lg mx-auto px-3 min-h-dvh">{description}</div>
    </div>
  );
};

export default InfoDescription;
