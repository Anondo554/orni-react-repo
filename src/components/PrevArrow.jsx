import { FaArrowCircleLeft } from "react-icons/fa";
const PrevArrow = (props) => {
    const { onClick } = props;
  return (
    <div
    className={"inline-block text-[40px] absolute top-1/2 left-3 z-10 -translate-y-1/2"}
   
    onClick={onClick}
  ><FaArrowCircleLeft /></div>
  )
}
export default PrevArrow