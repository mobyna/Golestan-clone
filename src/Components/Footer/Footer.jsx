import FooterCard from "./FooterCard";
import backGround from "/Images/back.png";
import { Product } from "./FooterData";
import { FaTelegram, FaFacebook, FaInstagram  ,FaLinkedin   } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
const Footer = () => {
    return ( 
        <div>
                <div className="flex gap-4 justify-center items-center bg-[#eeefef] h-[95px]">
                <a href="#" className="text-gray-400 hover:text-blue-500"><FaTelegram size={30} className="w-[42px] h-[49px]" /></a>
                <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram   size={30} className="w-[42px] h-[49px]" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700"><FaLinkedin   size={30} className="w-[42px] h-[49px]" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600"><FaFacebook size={30} className="w-[42px] h-[49px]" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600"><SiAparat size={30} className="w-[42px] h-[49px]" /></a>
            </div>
            <div className="bg-[#ed1c25] h-[25px]"></div>

            <div className="h-[490px] w-[full] flex justify-center items-center gap-3" style={{backgroundImage:`url(${backGround})`}}>
                {Product.map((item)=>(
                    <FooterCard
                    key={item.id}
                    photo={item.photo}
                    title={item.title}
                    products={item.products}                   />
                ))}
            </div>
        </div>
     );
}
 
export default Footer;