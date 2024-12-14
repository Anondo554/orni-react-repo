import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Bilai from '../assets/bilai.png'
import Heading from './Heading'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";




const Product = ({ imgSrc, badgeName, price,titleP }) => {

    return (


        <div className='relative group pr-2'>
            <Image imgSrc={imgSrc} className={'w-full'} />
            <Badge badgeText={badgeName} className={"absolute top-5 left-5"} />
            <div className="py-[20px] bg-teal-100 flex justify-between">
                <Heading text={titleP} as={"h3"} />
                <Heading text={price} as={"p"} />
            </div>
            <div className='bg-slate-300 p-[28px] absolute bottom-[64px] left-0 w-full opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out'>
                <div className='flex justify-end items-center gap-x-2'>
                    <span>Add to Wish List </span><FaHeart />
                </div>
                <div className='flex justify-end items-center gap-x-2'>
                    <span>Compare </span><FaCodeCompare />
                </div>
                <div className='flex justify-end items-center gap-x-2'>
                    <span>Add to Cart </span><FaShoppingCart />
                </div>
            </div>
        </div>


    )
}

export default Product


// ami useeffect er maddhome api niye kaj korbo
// api er data ke ami get mathod er maddhome axios diye niye aste pari
// kintu jodi ami axios diye data ani tahole se ese choile jay
// ei somossar somadhan er jonno amra await function ke call carte pari 