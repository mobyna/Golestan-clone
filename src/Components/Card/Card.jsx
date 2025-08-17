const Card = ({title ,discription , firstBot ,secBot ,secondDiscription}) => {
    return ( 
        <div className="p-16 flex justify-center">
            <div className="w-[660px]">
                <h2 className="text-[#ff0000] mb-5 font-Golestan">{title}</h2>
            <p className="text-[#999a9a] mb-9 font-Golestan">{discription}</p>
            <p className="text-[#999a9a] mb-9 font-Golestan">{secondDiscription}</p>
            <div className="buttons flex gap-5 ">
                <button className="border border-[#999a9a] px-6 py-2 rounded-lg text-[#999a9a]">{firstBot}</button>
                { secBot && <button className="border border-[#999a9a] px-6 py-2 rounded-lg text-[#999a9a]">{secBot}</button>}
            </div>
            </div>
        </div>
     );
}
 
export default Card;
