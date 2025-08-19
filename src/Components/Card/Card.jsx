const Card = ({title ,discription , firstBot ,secBot ,secondDiscription}) => {
    return ( 
        <div className="p-16 flex justify-center font-GoleastanLight">
            <div className="w-[660px]">
                <h2 className="text-[#ff0000] mb-5 font-Golestan font-bold text-xl">{title}</h2>
            <p className="text-[#7A7A7A] mb-9 font-Golestan text-base leading-9">{discription}</p>
            <p className="text-[#7A7A7A] mb-9 font-Golestan text-base leading-9">{secondDiscription}</p>
            <div className="buttons flex gap-5 ">
                <button className="border border-[#999a9a] px-6 py-2 rounded-lg text-[#7A7A7A]">{firstBot}</button>
                { secBot && <button className="border border-[#999a9a] px-6 py-2 rounded-lg text-[#7A7A7A]">{secBot}</button>}
            </div>
            </div>
        </div>
     );
}
 
export default Card;
