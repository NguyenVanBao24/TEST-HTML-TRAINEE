import icon from "@/utils/icon";
import Image from "next/image";

const { PiNoteBold } = icon;
const Footer = () => {
  return (
    <div>
      <div className="lg:flex m-auto gap-4 justify-center items-center bg-primary lg:h-[200px]">
        <div className="mb-4 flex lg:w-1/3 items-center justify-center">
          <span>
            <PiNoteBold size={80} />
          </span>
          <span className="text-sm ml-4">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
          </span>
        </div>
        <div className="mb-4 flex lg:w-1/3 items-center justify-center">
          <span>
            <PiNoteBold size={80} />
          </span>
          <span className="text-sm ml-4">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
          </span>
        </div>
      </div>
      <div className="h-[40px]">
        <Image
          alt=""
          src={
            "https://img.freepik.com/free-photo/3d-dark-grunge-display-background-with-smoky-atmosphere_1048-16218.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"
          }
          width={100}
          height={100}
          className="w-full object-cover h-[40px]"
        />
      </div>
    </div>
  );
};

export default Footer;
