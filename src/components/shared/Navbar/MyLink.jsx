'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname)
  return <Link href={href} className={`py-1 px-2 md:py-2 md:px-4 font-medium md:font-semibold ${pathname === href ? "bg-[#244D3F] text-white py-1 md:py-2 px-2 md:px-4 rounded-lg" : "text-[#64748B]"}`}>{children}</Link>;
};

export default MyLink;
