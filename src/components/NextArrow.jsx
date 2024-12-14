
import { FaArrowCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
    className={"inline-block text-[40px] absolute top-1/2 right-3 -translate-y-1/2"}
   
    onClick={onClick}
  ><FaArrowCircleRight />
</div>
  )
}
export default NextArrow


