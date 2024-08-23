/* eslint-disable react/prop-types */

const Connect = ({ icon,connectLink }) => {
    const handleClick = () => {
        window.open(connectLink, "_self");
      };
  return (
    <div className="w-12 h-12 text-[#4611A7] text-[1.25rem] leading-3 rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-[#FFE800]" onClick={handleClick}>
      {icon}
    </div>
  );
}

export default Connect;
