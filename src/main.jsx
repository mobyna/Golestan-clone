import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './Components/Menu/Menu'
import Chai from './Components/Chai/Chai'
import Intro from './Components/Intro/Intro'
import PhotoCard from './Components/PhotoCard/PhotoCard'
import Card from './Components/Card/Card'
import './main.css'
import Baner from './Components/Baner/Baner'
import Magazin from './Components/Magazin/Magazin'
import Hospital from './Components/Hospital/Hospital'
createRoot(document.getElementById('root')).render(
  <div><Menu/>
    <Chai/>
    <Intro/>
    <PhotoCard
     bgImag="../public/Images/rice.jpg"
     title="برنج گلستان" 
     subTitle="معرفی محصول"/>
    <Card
    title="رکن اول غذای ایرانی"
    discription="مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند."
    firstBot="محصولات برنج"
    secBot="آشپزخانه گلستان"
    />
    <PhotoCard
     bgImag="../public/Images/talk.jpg"
     title="چای گلستان" 
     subTitle="معرفی محصول"/>
    <Card
    title="سابقه‌ای به قدمت یک عمر"
    discription="چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد."
    secondDiscription="برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است."
    firstBot="محصولات چای"
    />
    <PhotoCard
     bgImag="../public/Images/pest.jpg"
     title="پسته گلستان" 
     subTitle="معرفی محصول"/>
     <Card
    title="آجيل‌های خوش خنده"
    discription="خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب."
    secondDiscription="پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد."
    firstBot="ناتس گلستان"
    />
    <Baner/>
    <Magazin/>
    <Hospital/>
    </div>
    
)
