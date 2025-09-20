import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Product from "./Product";
import Slider from "./Slider";
import Footer from "./Footer";


const Home = ({windowWIdth}) => {

  
 

  return (
    <>
      <div className=" bg-[#1d1d1f] flex justify-center items-center p-5 py-2">
        <p className="text-white text-[12px] font-sans text-center ">
          Get up to 6 months of No Cost EMI plus up to ₹10000 instant cashback
          on selected products with eligible cards.{" "}
          <Link className="text-blue-600" to="/store">
            {"Shop >"}
          </Link>
        </p>
      </div>
      <div className="pt-[30px] h-full bg-black text-white flex flex-col items-center gap-3 mb-2">
        <h1 className="font-bold text-3xl font-sans md:text-4xl">
          iPhone 17 Pro
        </h1>
        <p className="text-sm font-sans font-bold md:text-xl">ALL out Pro.</p>
        
        <Button val={["Learn more", "Pre-Order"]} />
        {windowWIdth > 600 ? (
          <img className="w-[50%] mt-5" src="/camera.png" alt="" loading="lazy"/>
        ) : (
          <img src="/small-phone.png" alt="" loading = 'lazy' />
        )}
      </div>
      <div className="w-full bg-[#fafafa] pt-[30px] flex flex-col gap-2 items-center relative mb-2">
        <h1 className="font-medium text-3xl md:text-5xl">iPhone Air</h1>
        <div className="leading-tight">
          <p className="text-center md:text-2xl">The thinnest iphone ever.</p>
          <p className="text-center md:text-2xl">With the power of pro inside.</p>
        </div>
       
        <Button val={["Learn more", "Pre-Order"] } />
        {windowWIdth > 600 ? (
          <img
            className="w-[90%] h-[230px] self-end "
             src="/side-phone-hand.avif"
            
            alt=""
            loading="lazy"
          />
        ) : (
          <div className="w-[65%] h-[200px] overflow-hidden ">
            <img className="w-[100%] h-[100%] scale-[1.5] mt-2" src="/side-phone.webp" alt="" loading="lazy" />
          </div>
        )}
      </div >
      <div className="w-full bg-[#fafafa] pt-[30px] flex flex-col gap-2 items-center relative mb-2">
        <h1 className="font-medium text-3xl md:text-5xl">iPhone 17</h1>
        
          <p className="text-center md:text-2xl">Magichromatic.</p>
        
       
        <Button val={["Learn more", "Pre-Order"] } />
        {windowWIdth > 600 ? (
          <img
            className="w-[60%] h-[230px] "
            src="/more-phore.jpg"
            alt=""
            loading="lazy"
          />
        ) : (
          
            <img className="w-[40%] h-[220px]  mt-2" src="/more-phone1.png" alt="" loading="lazy"/>
       
        )}


      </div>
      <Product/>
      <Slider/>
      <Footer wWidth ={windowWIdth}/>
    </>
  );
};

export default Home;
//       <Footer wWidth ={windowWIdth} title = {'Home'} />