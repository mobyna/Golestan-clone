const MagazinCard = ({ id,photo, title, aboute}) => {
  return (
    <div className="bg-white w-[318px] h-[590px]">
    
     <div key={id} >
          <div style={{ backgroundImage: `url(${photo})` }} className=" bg-center bg-no-repeat bg-cover w-full h-[318px]"></div>
          <div className="w-full h-full px-4 pt-7 justify-center">
            <h3 className="text-[#ff0000] text-xl pb-5">{title}</h3>
          <p className="text-[#999a9a] text-sm text-justify pb-12">{aboute}</p>
          <button className="w-[106px] h-[41px] border border-[#999a9a] text-[#999a9a] text-sm text-center justify-center rounded-lg ">
            ادامه مطلب
          </button>
          </div>
        </div>
    
    </div>
  );
};

export default MagazinCard;
