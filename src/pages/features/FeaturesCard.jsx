/* eslint-disable react/prop-types */

const FeaturesCard = ({image,title}) => {
  return (
    <div className="rounded-[1.25rem] bg-white py-[10px] px-5 shadow-md flex flex-col justify-center items-center">
        <figure className="mb-4">
            <img src={image} alt={title} className="aspect-[3 / 1.8] object-contain max-w-16 m-auto mb-[10px]"/>
        </figure>
        <h3 className="text-[#032071] font-bold text-xl mb-2 leading-tight ">{title}</h3>
    </div>
  )
}

export default FeaturesCard