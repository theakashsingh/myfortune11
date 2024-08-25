/* eslint-disable react/prop-types */
import Footer from "../footer"
import InfoHeader from "../header/InfoHeader"
import InfoDescription from "../infoDescription"
import InfoHead from "../infoHead"

const InfoPage = ({title, description}) => {
  return (
    <div>
        <InfoHeader/>
        <InfoHead title={title}/>
        <InfoDescription description={description}/>
        <Footer/>
    </div>
  )
}

export default InfoPage