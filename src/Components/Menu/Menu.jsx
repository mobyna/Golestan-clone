import backGround from "/Images/back.png";
const Menu = () => {
    const MenuItems=[
        { name:'صفحه اصلی',link:'/'},
        { name:'شرکت گلستان',link:''},
        { name:'محصولات',link:''},
        { name:'وبلاگ',link:''},
        { name:'قرعه کشی',link:''},
        { name:'استخدام',link:''},
        { name:'تماس با ما',link:''},
        { name:'EN',link:''}
    ]
    return ( 
        <div className="h-[100px] w-full flex justify-center items-center font-GoleastanLight font-normal sticky top-0 z-50" style={{backgroundImage:`url(${backGround})`}}>
            <div>
                <img src="/Images/logoImage.png" alt="" className=" absolute right-64" />
            </div>
            <nav className="Menu absolute left-64 bottom-7">
                <ul className="flex text-[#AFB2B4] font-Golestan text-base">
                        {
                            MenuItems.map((item,index)=>{
                                return (<li key={index} className=" border-l-[1px] last:border-none border-[#58595b] px-5">
                                    <a href={item.link}>{item.name}</a>
                                </li>)   

                            })
                        }
                </ul>
            </nav>
            </div>
        
     );
}
 
export default Menu;