import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaApple } from "react-icons/fa6";


const Footer = ({ wWidth ,title},) => {

    let year = new Date()
  let navigate = useNavigate()
  
    
  const [footerCon, setFooterCon] = useState([
    {
      id: 1,
      head: "Shop and Learn",
      data: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
      direction: false,
    },
    {
      id: 2,
      head: "Apple Wallet",
      data: ["Wallet"],
      direction: false,
    },
    {
      id: 3,
      head: "Account",
      data: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
      direction: false,
    },
    {
      id: 4,
      head: "Entertainment",
      data: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Products",
        "Apple Books",
        "App Store",
      ],
      direction: false,
    },
    {
      id: 5,
      head: "Apple Store",
      data: [
        "Find a Store",
        "Genius bar",
        "Today at Apple",
        "Group Reservation",
        "Apple Camp",
        "Apple Trade In",
        "Ways to Buy",
        "Recycling Programme",
        "order Status",
        "Shopping Help",
      ],
      direction: false,
    },
    {
      id: 6,
      head: "For Bussiness",
      data: ["Apple and bussiness", "Shop for Bussiness"],
      direction: false,
    },
    {
      id: 7,
      head: "For Education",
      data: [
        "Apple and Education",
        "Shop for Education",
        "Shop for University",
      ],
      direction: false,
    },
    {
      id: 8,
      head: "For healthcare",
      data: ["Apple and Healthcare"],
      direction: false,
    },
    {
      id: 9,
      head: "For Goverment",
      data: ["Apple and Goverment"],
      direction: false,
    },
    {
      id: 10,
      head: "Apple Values",
      data: [
        "Accessibility",
        "Education",
        "Environment",
        "Privacy",
        "Supply Chain Innovation",
      ],
      direction: false,
    },
    {
      id: 11,
      head: "About Apple",
      data: [
        "Newsroom",
        "Apple Leadership",
        "Carrer Opportunities",
        "investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
      direction: false,
    },
  ]);
  const changeDirection = (id) => {
    let changedData = footerCon.map((val, ind) => {
      return id === val.id ? { ...val, direction: !val.direction } : val;
    });
    setFooterCon(changedData);
  };


  return (
    <div className="bg-[#f5f5f7] p-5 ">
      <div className="w-[100%] mx-auto pb-2 flex flex-col gap-1 lg:w-[85%] border-b-1 border-[#cececf]">
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          *Apple Education Pricing is available to current and newly accepted
          college students and their parents, as well as teachers and staff at
          all levels. For more information,
          <Link to="/store" className="text-black underline">
            {" "}
            visit apple.com/in-edu/store.
          </Link>
        </p>
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          Qualified Purchasers can receive Promotion Savings when they purchase
          an eligible Mac or iPad with their choice of a Promotion Product at a
          Qualifying Location. Customers will be charged for all items in their
          cart, including the Promotion Product. Only one Promotion Product can
          be obtained per eligible Mac or iPad per Qualified Purchaser. The
          offer is subject to availability, while supplies last. View full terms
          and conditions of offer{" "}
          <Link className="text-black underline" to="/mac">
            {" "}
            here.
          </Link>
        </p>
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired
          with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise
          reduction was tested in accordance with IEC 60268-24. Comparison made
          against the best-selling wireless in-ear headphones commercially
          available at the time of testing. Performance depends on device
          settings, environment and many other factors.
        </p>
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          Apple Intelligence is available in beta. Some features may not be
          available in all regions or languages. For feature and language
          availability and system requirements, see{" "}
          <Link to="/ipad" className="text-black underline">
            support.apple.com/121115.
          </Link>
        </p>
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          A subscription is required for Apple TV+.
        </p>
        <p className="text-[10px] text-gray-500 lg:text:[15px] ">
          Features are subject to change. Some features, applications and
          services may not be available in all regions or all languages.
        </p>
      </div>
      <div className="w-full">
      {
        title &&   <div className="md:w-[85%] mx-auto mt-2 text-gray-600 text-[12px] flex gap-0.5 items-center">
            <FaApple onClick={()=>{navigate('/')}} className="cursor-pointer hover:text-black"/>
                <div className="flex gap-0.5">
                <span>{`>`}</span>
                <span>{title}</span>

                </div>
                
                
  </div>
      }
        {wWidth < 860 ? (
          <div>
            {footerCon.map((val, index) => (
              <div
                className="border-b border-[#cececf] pb-2.5 mt-2"
                key={index}
              >
                <header className="flex justify-between  font-sans cursor-pointer ">
                  <span  onClick={() => changeDirection(val.id)} className="text-[11px]">{val.head}</span>
                  <div
                    className="text-[13px]"
                    onClick={() => changeDirection(val.id)}
                  >
                    <MdKeyboardArrowDown
                      style={{
                        transform: `rotate(${val.direction ? 180 : 0}deg)`,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                </header>
                <ul
                  className="animation-pulse ml-2 flex-col gap-1.5 my-2"
                  style={{ display: `${val.direction ? "flex" : "none"}` }}
                >
                  {val.data.map((val1, index) => (
                    <li
                      className="text-[11px] ml-1.5 cursor-pointer hover:underline"
                      key={index}
                    >
                      {val1}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-[85%] py-4 flex flex-col h-[350px] flex-wrap gap-x-5 gap-y-3 mx-auto">
            {footerCon.map((val,ind) => (
              <div key={ind} className="flex flex-col gap-1.5  text-[11px]">
                <header className="font-bold text-gray-600 cursor-pointer">{val.head}</header>
                <div className="flex flex-col gap-1 text-gray-500">
                  {val.data.map((val1,ind) => (
                    <div className="cursor-pointer hover:underline" key={ind}>{val1}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-[10px] text-gray-500 mt-3 md:mt-5 md:pb-3 md:border-b w-[85%] md:mx-auto">
          More ways to shop: <Link to='/store' className="text-blue-500 underline cursor-pointer">Find an Apple Store</Link> or <Link className="text-blue-500 underline cursor-pointer">other retailer</Link> near you. Or
          call <Link className="text-blue-500 underline cursor-pointer">000800 040 1966</Link>.
        </p>
        <div className="flex flex-col gap-2 text-[10px] mt-2 text-gray-600 md:flex-row md:justify-between md:w-[85%] md:mx-auto md:mt-4">
            <span className="md:order-2">India</span>
            <div className="flex flex-col gap-1 md:flex-row md:gap-3">
            <span className="text-gray-500">Copyright &copy; {year.getFullYear()} Apple Inc. All rights reserved.</span>
            <span>Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
// style={{transform:`rotate(${direction?180:0}deg)`,transition:"transform 0.3s ease"  }}
