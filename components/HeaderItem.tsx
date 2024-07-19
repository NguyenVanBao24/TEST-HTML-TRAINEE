import Link from "next/link";
import React from "react";

interface HeaderItemProps {
  label?: string;
  className?: string;
  active?: boolean;
  href: string;
}

const isActive = "border-b-[6px] border-primary mt-[2px]";

const HeaderItem: React.FC<HeaderItemProps> = ({ label, active, href }) => {
  return (
    <Link href={href} className={`flex items-center h-full box-border ${active && isActive}`}>
      {label}
    </Link>
  );
};

export default HeaderItem;
