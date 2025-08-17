import HospitalPhoto from "/Images/hospital.png"
const Hospital = () => {
    return ( 
        <div className="relative">
            <div className=" h-[600px] w-[full] bg-[#0f5153] flex-col font-GoleastanLight content-center">
            <h2 className=" text-[#d5eadf] justify-self-center text-lg font-thin ">مسئوليت‌های اجتماعی شركت گلستان</h2>
            <div className="w-[full] h-[1px] my-[15px] bg-[#009da2]"></div>
            <span className=" block justify-self-center">
                <span className="text-[#009da2] text-4xl font-normal">Golestan</span><span className=" text-[#00d8df] text-xl font-normal"> Social Responsibility</span>
            </span>
            <h3 className="text-[#b5bec0] justify-self-center text-lg font-thin">Mahdi Hospital</h3>
            </div>
            <img src={HospitalPhoto} alt="" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="h-[540px]">
            <div className="bg-[#e9d69f] w-[full] h-[20px]"></div>
            <div className="w-[full] h-[2px] my-[15px] bg-[#dfe1e3]"></div>
            </div>
        </div>

     );
}
 
export default Hospital;