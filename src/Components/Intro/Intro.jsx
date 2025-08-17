const Intro = () => {
const introInfo =[
    {img :"/public/Images/human.png" , link:"" , disc:"سرمایه انسانی"},
    {img :"/public/Images/sail.png" , link:"" , disc:"مراكز فروش"},
    {img :"/public/Images/prod.png" , link:"" , disc:"محصولات گلستان"},
    {img :"/public/Images/costumor.png" , link:"" , disc:"مشتریان گلستان"}
]
    return ( 
        <div className="flex flex-col items-center w-full gap-[70px] my-12">
            <div className="w-[680px]">
                <h3 className="text-[#ff0000] mb-5">معرفی گلستان</h3>
                <span className="text-[#999a9a] block mb-9 font-Golestan">آنچه که امروز با نام مجموعه <span className="text-[#ff0000]">گلستان</span> می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. <span className="text-[#ff0000]">گلستان</span> پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
                </span>
                <span className="text-[#999a9a] block mb-11">
                هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی <span className="text-[#ff0000]">شرکت گلستان</span> است.</span>
                
                <h3 className="text-[#ff0000] mb-5">محصولات گلستان​</h3>
                <span className="text-[#999a9a]"><span className="text-[#ff0000]">نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.</span>

            </div>
            <div className="w-full flex justify-center mt-12 gap-5">
                    {
                        introInfo.map((item,index)=>{
                            return(
                                <div key={index} className="flex flex-col items-center ">
                                    <a href={item.link}>
                                        <img src={item.img} alt="" className="w-[185px] h-[185px]" />
                                    </a>
                                    <span className="my-4 text-[#999a9a]">{item.disc}</span>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
     );
}
 
export default Intro;