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
        <div className="bg-[#282828] h-[100px] w-full flex justify-center align-middle font-Golestan">
            <div>
                <img src="/Images/logoImage.png" alt="" className="logoImage" />
            </div>
            <nav className="Menu">
                <ul className="flex text-[#ababab] font-Golestan">
                        {
                            MenuItems.map((item,index)=>{
                                return (<li key={index}>
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