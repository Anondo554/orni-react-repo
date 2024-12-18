 
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "../../assets/Logo.png";
import Menu from "../Menu";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  let [drop, setDrop] = useState(false)
  let [drops, setDrops] = useState(false);
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Link to={'/'}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <Menu className={"text-sm text-menuColor"}>
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
            <div className=""></div>
          </Flex>
        </Container>
      </div>
      <div className="bg-categoryBg py-6">
        <Container>
          <Flex className={"justify-between items-center"}>
            {/* ============== */}
            <div className="w-[30%] relative z-10">
              <Flex className={"gap-x-3 items-center"}>

                <div onClick={() => setDrop(!drop)} className="flex ">
                  <HiBars3BottomLeft />

                  <Heading
                    as={"p"}
                    text={"Shop by Category"}
                    className={"text-sm text-menuHcolor"}
                  />
                </div>
                {drop &&
                  <div className="bg-menuHcolor w-[260px] p-4 absolute top-8 left-0 text-white">
                    <ul>
                    <Link to={"/"}>
                  <li className=" hover:text-white hover:font-bold duration-300">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className=" hover:text-white hover:font-bold duration-300">
                    Shop
                  </li>
                </Link>
                <li className=" hover:text-white hover:font-bold duration-300">
                  About
                </li>
                <li className=" hover:text-white hover:font-bold duration-300">
                  Contacts
                </li>
                <li className=" hover:text-white hover:font-bold duration-300">
                  Journal
                </li>
                    </ul>
                  </div>
                }
              </Flex>
            </div>
            {/* =============== */}
            <div className="w-[40%] relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-white rounded-md p-4 border-none outline-none"
              />
              <FaSearch
                className={"absolute right-3 top-1/2 -translate-y-1/2"}
              />
            </div>
            <div className="w-[20%] relative">
              <Flex className={"gap-8 justify-end"}>
                <div className="flex gap-2" onClick={()=>setDrops(!drops)} >
                  <FaUser />
                  <FaCaretDown />
                </div>
                {drops &&
                <div className="absolute top-5 left-12">
                  <Heading text={"My Account"} as={'h3'} className={"mx-18 p-8 mb-2 text-center py-1 hover:font-bold bg-white hover:bg-black hover:text-white"}/>
                  <Heading text={"Log Out"} as={'h3'} className={"mx-18 p-8 mb-2 text-center py-1 hover:font-bold bg-white hover:bg-black hover:text-white"}/>
                </div>
                }
                <FaShoppingCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;

