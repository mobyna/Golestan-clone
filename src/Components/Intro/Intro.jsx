const Intro = () => {
const introInfo =[
    {img :"/public/Images/human.png" , link:"" , disc:"سرمایه انسانی"},
    {img :"/public/Images/sail.png" , link:"" , disc:"مراكز فروش"},
    {img :"/public/Images/prod.png" , link:"" , disc:"محصولات گلستان"},
    {img :"/public/Images/costumor.png" , link:"" , disc:"مشتریان گلستان"}
]
    return ( 
        <div className="flex flex-col items-center w-full gap-[70px] font-GoleastanLight">
            <div className="h-[0.5px] mt-3 w-full bg-[#dcdcdc]"></div>
            <div className="w-[680px]">
                <h3 className="text-[#ff0000] mb-5 text-xl font-bold">معرفی گلستان</h3>
                <span className="text-[#999a9a] block mb-9 text-base leading-9">آنچه که امروز با نام مجموعه <span className="text-[#ff0000]">گلستان</span> می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. <span className="text-[#ff0000]">گلستان</span> پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
                </span>
                <span className="text-[#999a9a] block mb-11 text-base leading-9">
                هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی <span className="text-[#ff0000]">شرکت گلستان</span> است.</span>
                
                <h3 className="text-[#ff0000] mb-5 text-xl font-bold">محصولات گلستان​</h3>
                <span className="text-[#999a9a] text-base leading-9"><span className="text-[#ff0000]">نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.</span>

            </div>
            <div className="w-full flex justify-center mt-16 mb-24 gap-5">
                    {
                        introInfo.map((item,index)=>{
                            return(
                                <div key={index} className="flex flex-col items-center text-center">
                                    <a href={item.link}>
                                        <img src={item.img} alt="" className="w-[185px] h-[185px]" />
                                    </a>
                                    <span className="py-4 text-base text-[#9ea2a0] border-b-[1px] w-full block">{item.disc}</span>
                                </div>
                            )
                        })
                    }
            </div>
            
                    <div className="h-[2px] mb-3 w-full bg-[#dcdcdc]"></div>
        </div>
     );
}
 
export default Intro;