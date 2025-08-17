import {Magazindata , MagazinVdata} from "./MagazinData";
import MagazinCard from "./MagazinCard";
import MagazinVCard from "./MagazinVCard";

const Magazin = () => {
  return (
    <div>
      <div className="h-[121px] flex items-center">
        <h3 className="text-[#ff0000] text-xl font-bold pr-[20%]">مجله گلستان</h3>
      </div>
      <div className="h-[770px] bg-[#cde4b0] flex gap-4 p-4 items-center justify-center">
        {Magazindata.map((item) => (
          <MagazinCard
            key={item.id}
            photo={item.photo}
            title={item.title}
            aboute={item.aboute}
          />

        ))}
      </div>
      <div className="h-[570px] bg-white flex gap-4 p-4 items-center justify-center">
        {MagazinVdata.map((item) => (
          <MagazinVCard
            key={item.id}
            video={item.video}
            title={item.title}
            aboute={item.aboute}
            butt={item.butt}
          />
          ))}
      </div>
    </div>
  );
};

export default Magazin;