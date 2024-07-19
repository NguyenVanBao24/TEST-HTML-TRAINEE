import React from "react";
import BoxItem from "./BoxItem";
import icon from "@/utils/icon";
import Image from "next/image";

const { PiNoteBold, FaSearch, FaDiscourse } = icon;

interface BodyTextItemProps {
  character?: string;
  label?: string;
  title?: string;
}

const data = [
  {
    character: "W",
    label: "WE ARE AN AWESOME AGENCY",
  },
  {
    character: "B",
    label: "LET'S BLOG",
  },
];

const datas = [
  {
    image: PiNoteBold,
    headerTitle: "FEATURE ONE",
    description:
      "Aenean lacinia bibendum nulla sedcon sectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus",
  },
  {
    image: PiNoteBold,
    headerTitle: "FEATURE TWO",
    description:
      "Aenean lacinia bibendum nulla sedcon sectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus",
  },
  {
    image: FaSearch,
    headerTitle: "FEATURE THREE",
    description:
      "Aenean lacinia bibendum nulla sedcon sectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus",
  },
  {
    image: FaDiscourse,
    headerTitle: "FEATURE FOUR",
    description:
      "Aenean lacinia bibendum nulla sedcon sectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus",
  },
];

const data2 = [
  {
    id: 1,
    headerTitle: "FRESH SUMMER",
    image: "https://th.bing.com/th/id/OIP.BMqohJAk2ce6MC1qSbQkwAHaE8?rs=1&pid=ImgDetMain",
    description:
      "Cum sociis natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue",
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.BMqohJAk2ce6MC1qSbQkwAHaE8?rs=1&pid=ImgDetMain",
    headerTitle: "FRESH SUMMER",
    description:
      "Cum sociis natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue",
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.BMqohJAk2ce6MC1qSbQkwAHaE8?rs=1&pid=ImgDetMain",
    headerTitle: "FRESH SUMMER",
    description:
      "Cum sociis natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue",
  },
  {
    id: 4,
    image: "https://th.bing.com/th/id/OIP.BMqohJAk2ce6MC1qSbQkwAHaE8?rs=1&pid=ImgDetMain",
    headerTitle: "FRESH SUMMER",
    description:
      "Cum sociis natoque penatibus etmagnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel augue",
  },
];

const BodyTextItem: React.FC<BodyTextItemProps> = ({ character, title }) => {
  return (
    <div
      className={`${title ? "bg-white text-black " : "bg-primary "} flex flex-col items-center `}
    >
      <div className="w-3/4">
        <div className="flex flex-col items-center justify-center">
          {data.map((item) => {
            if (item.character == character) {
              return (
                <div key={item.character} className="flex justify-center items-center">
                  <span className="relative text-[12rem] opacity-30 font-semibold">
                    {item.character}
                  </span>
                  <span className="absolute text-xl lg:text-4xl">{item.label}</span>
                </div>
              );
            }
          })}
          {title && <span className="text-2xl ">{title}</span>}
        </div>
        <div className="lg:flex gap-4 my-10">
          {title
            ? data2.map((item) => (
                <div key={item.id} className="flex flex-col items-center  text-center gap-4 ">
                  <div className=" flex items-center justify-center">
                    <Image src={item.image} alt="" width={300} height={300} />
                  </div>

                  <span className={`${title && "text-primary"} font-semibold`}>
                    {item.headerTitle}
                  </span>
                  <span className="text-sm mb-4">{item.description}</span>
                </div>
              ))
            : datas.map((item) => <BoxItem key={item.headerTitle} {...item} title={title} />)}
        </div>
      </div>
    </div>
  );
};

export default BodyTextItem;
