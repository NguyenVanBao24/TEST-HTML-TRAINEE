import Image from "next/image";
import BodyTextItem from "./BodyTextItem";

const data = [
  {
    id: 1,
    title: "AKITA INU DOG",
    date: "Jan 4, 2016",
    category: "In Culture",
    content: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

  Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`,
    imageUrl:
      "https://cdn.elearningindustry.com/wp-content/uploads/2023/01/shutterstock_1681937335.jpg",
  },
  {
    id: 2,
    title: "AKITA INU DOG",
    date: "Jan 4, 2022",
    category: "In Culture",
    content: `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

    Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.`,
    imageUrl:
      "https://cdn.elearningindustry.com/wp-content/uploads/2023/01/shutterstock_1681937335.jpg",
  },
];

const Body = () => {
  return (
    <div className="flex flex-col">
      <BodyTextItem character="W" />

      <div className="flex flex-wrap w-full lg:h-[1000px]">
        {data.map((item) => {
          if (item.id % 2 === 1) {
            return (
              <div
                key={item.id}
                className="text-white lg:flex items-center justify-center w-full h-[500px]"
              >
                <div className="lg:w-1/2 px-20 py-20 bg-[#222222] h-full flex flex-col items-center justify-center">
                  <div className="flex flex-col ">
                    <div className="mb-2">
                      <span className="border-r-2 pr-2">{item.date}</span>
                      <span className="pl-2">{item.category}</span>
                    </div>
                    <span className="text-md font-bold mb-10">{item.title}</span>
                    <span className="text-sm">{item.content}</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    alt=""
                    src={item.imageUrl}
                    width={1000}
                    height={1000}
                    className="w-full h-[500px]"
                    objectFit="cover"
                  />
                </div>
              </div>
            );
          } else
            return (
              <div
                key={item.id}
                className="text-white lg:flex items-center justify-center w-full h-[500px]"
              >
                <div className="lg:w-1/2 ">
                  <Image
                    alt=""
                    src={item.imageUrl}
                    width={1000}
                    height={1000}
                    className="w-full h-[500px]"
                    objectFit="cover"
                  />
                </div>
                <div className="lg:w-1/2 px-20 py-20 h-full bg-[#f3f3f3] text-black ">
                  <div className="flex flex-col ">
                    <div className="mb-2">
                      <span className="border-r-2 pr-2">{item.date}</span>
                      <span className="pl-2">{item.category}</span>
                    </div>
                    <span className="text-md font-bold mb-10">{item.title}</span>
                    <span className="text-sm">{item.content}</span>
                  </div>
                </div>
              </div>
            );
        })}
      </div>

      <BodyTextItem character="B" title="We love clean design and advanced digital solutions." />
    </div>
  );
};

export default Body;
