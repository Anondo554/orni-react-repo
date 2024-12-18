import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Image from "../Image";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaFacebookF,FaLinkedinIn, FaInstagram  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-categoryBg2 py-7">
      <Container>
        <Flex>
          <div className="w-[15%]">
            <Heading
              className={"text-base font-bold text-menuHcolor pb-3"}
              text="Menu"
              as={"h3"}
            />
            <Menu className={"text-sm text-menuColor flex-col"}>
              <Link to={"/"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Home
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Shop
                </li>
              </Link>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                About
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Contacts
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Journal
              </li>
            </Menu>
          </div>
          <div className="w-[10%]">
            <Heading
              className={"text-base font-bold text-menuHcolor pb-3"}
              text="SHOP"
              as={"h3"}
            />
            <Menu className={"text-sm text-menuColor flex-col"}>
              <Link to={"/"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Category 1
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Category 2
                </li>
              </Link>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Category 3
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Category 4
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Category 5
              </li>
            </Menu>
          </div>
          <div className="w-[25%] pl-28">
            <Heading
              className={"text-base font-bold text-menuHcolor pb-3"}
              text="HELP"
              as={"h3"}
            />
            <Menu className={"text-sm text-menuColor flex-col "}>
              <Link to={"/"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Privacy Policy
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                  Terms & Conditions
                </li>
              </Link>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Special E-shop
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Shipping
              </li>
              <li className=" hover:text-menuHcolor hover:font-bold duration-300">
                Secure Payments
              </li>
            </Menu>
          </div>
          <div className="w-[30%] pl-14">
            <Heading
              className={"text-base font-bold text-menuHcolor pb-3"}
              text="(052) 611-5711"
              as={"h3"}
            />
            <Heading
              className={"text-base font-bold text-menuHcolor pb-3"}
              text="company@domain.com"
              as={"h3"}
            />
            <Heading
              className={"text-base  text-menuHcolor pb-3"}
              text="575 Crescent Ave. Quakertown, PA 18951"
              as={"h3"}
            />
          </div>
          <div className="w-[30%] pl-64">
            <Image imgSrc={Logo} imgAlt={Logo} className={"w-[200px]"} />
          </div>
        </Flex>
        <Flex className={"mt-14"}>
          <div className="w-1/2 flex  gap-x-5">
            <Link to={"/"}>
              <FaFacebookF />
            </Link>
            <Link to={"/"}>
              <FaLinkedinIn />
            </Link>
            <Link to={"/"}>
              <FaInstagram />
            </Link>
          </div>
          <div className="w-1/2 text-right">
            <Heading
              text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
              as={"p"}
            />
          </div>
        </Flex>
      </Container>
    </div>
    // <Link to= {"/shop"}>
    //     <h1>Ami Footer</h1>
    // </Link>
  );
};

export default Footer;
