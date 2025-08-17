const MagazinVCard = ({ id,video, title,aboute, butt}) => {
    return ( 
        <div className="bg-white w-[318px] h-[450px] shadow-xl">
    
     <div key={id} >
          <div className="w-full h-[180px]">
            <iframe className="w-full aspect-video" src={video}  allow="autoplay; encrypted-media" allowFullScreen title={title}>
            </iframe>
          </div>

          <div className="w-full h-full px-4 py-3 justify-center">
            <h3 className="text-[#ff0000] text-xl pb-5">{title}</h3>
          <p className="text-[#999a9a] text-sm text-justify pb-4 leading-7">{aboute}</p>
          <button className="px-[24px] h-[41px] border border-[#999a9a] pb-4 text-[#999a9a] text-base font-normal leading-[41px]  rounded-lg ">
            {butt}
          </button>
          </div>
        </div>
    
    </div>
     );
}
 
export default MagazinVCard ;