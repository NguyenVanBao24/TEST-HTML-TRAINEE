import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

interface BoxItemProps {
  image: IconType;
  headerTitle?: string;
  description?: string;
  title?: string;
}
const BoxItem: React.FC<BoxItemProps> = ({ image: ImageI, headerTitle, description, title }) => {
  return (
    <div className="flex flex-col items-center  text-center gap-4 ">
      {title ? (
        <Image src={`${ImageI}`} alt="" width={300} height={300} />
      ) : (
        <div className="w-[100px] h-[100px] rounded-full bg-[#519bba] flex items-center justify-center">
          <ImageI size={40} />
        </div>
      )}
      <span className={`${title && "text-primary"} font-semibold`}>{headerTitle}</span>
      <span className="text-sm mb-4">{description}</span>
    </div>
  );
};

export default BoxItem;
