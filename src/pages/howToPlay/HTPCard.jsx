/* eslint-disable react/prop-types */

const HTPCard = ({ image,number, title, description }) => {
  return (
    <div className="bg-white py-[10px] px-[17px] max-w-full w-auto h-full text-center">
      <div className="flex justify-center mb-4">
        <img src={image} alt="match icon" className="w-16 h-16 object-contain" />
      </div>
      <div className="flex items-center justify-center mb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#032071] text-white rounded-full mr-2 text-lg font-bold" style={{
    boxShadow:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
  }}>
          {number}
        </div>
        <h2 className="text-xl font-bold text-[#f00001]">{title}</h2>
      </div>
      <p className="text-black mt-2">{description}</p>
    </div>
  );
};

export default HTPCard;
