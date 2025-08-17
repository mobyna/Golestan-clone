const PhotoCard = ({bgImag , title , subTitle }) => {
    return ( 
        
        <div>
            <div className="w-full h-[500px] bg-center bg-no-repeat bg-cover flex flex-col-reverse relative" style={{backgroundImage:`url(${bgImag})`}}>
                <div className="bg-[#E9D69F] h-[20px]"></div>
                <div className="w-[290px] h-[97px] bg-[#ff0000] absolute right-80 px-11 py-2 flex flex-col justify-between">
                    <h1 className="text-white text-3xl">{title}</h1>
                    <span className="text-white">{subTitle}</span>
                </div>
             </div>
        </div>
     );
}
 
export default PhotoCard;