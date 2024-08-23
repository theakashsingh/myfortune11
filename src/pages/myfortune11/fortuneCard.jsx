/* eslint-disable react/prop-types */

const FortuneCard = ({ image, title }) => {
  const phoneNumber = "916390010019";
  const message = "Hello! I would like to connect with you.";

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink);
  };
  return (
    <div className="overflow-hidden flex flex-col h-full">
      <figure className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full aspect-[3/1.8] object-contain px-5 py-0 transition-transform transform hover:scale-110"
        />
      </figure>
      <div className="p-4 text-center flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default FortuneCard;
