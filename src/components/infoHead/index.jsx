/* eslint-disable react/prop-types */

const InfoHead = ({ title }) => {
  const words = title.split(" ");
  return (
    <div className="bg-future11 text-center">
      <div className="px-3 mx-auto">
        <h1 className="pt-6 pb-4 text-h1-heading font-black">
          <span className="text-[#032071]">{words[0]}</span>
          {words.length > 1 && (
            <span className="text-[#d61216]">
              {` ${words.slice(1).join(" ")}`}
            </span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default InfoHead;
