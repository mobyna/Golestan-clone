const FooterCard = ({id,photo,title,products}) => {
    return ( 
        <div key={id} className="w-[150px] h-[320px] flex flex-col justify-center items-center gap-2 font-GoleastanLight">
            
                <img src={photo} alt={title} />
            
            <div className="w-full flex flex-col items-center">
                <div className="h-[1px]  w-full bg-[#828991] mb-2"></div>
                <h1 className=" text-white text-base font-thin">{title}</h1>
                <div className="h-[1px] mt-2 w-full bg-[#828991]"></div>
            </div>
            <ul className="flex flex-col text-[#BCBEC0] text-sm pt-5 gap-2">
                
                    {products.map((item)=>(
                        <li>{item}</li>
                    ))}
                
            </ul>
        </div>
     );
}
 
export default FooterCard;