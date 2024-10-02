import { MENU_ITEMS_HEADER } from "@/config/menu-items";
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import MenuDrawer from "./menu-drawer";

const Header = () => {
  return (
    <header className="bg-amber-500 h-[100px]">
      <nav className="flex justify-between items-center h-full px-4">
        <Link href="/home">
          <Image
            width={80}
            height={80}
            src="/images/space-ship-logo.png"
            alt="logo"
          />
        </Link>

        <div className="w-full flex justify-end items-center">
          <Menu
            mode="horizontal"
            items={MENU_ITEMS_HEADER}
            className="w-full h-full  items-center justify-between !bg-transparent text-[20px] font-semibold hidden lg:block "
          />
        </div>

        <MenuDrawer menulist={MENU_ITEMS_HEADER} />
      </nav>
    </header>
  );
};

export default Header;
