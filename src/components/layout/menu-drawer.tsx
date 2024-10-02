"use client";

import React, { ReactNode, useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { MENU_ITEMS_HEADER } from "@/config/menu-items";

interface Props {
  menulist: { key: string; icon: ReactNode; label: string; link: string }[];
}

const MenuDrawer = ({ menulist }: Props) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="">
      {/* Botón para abrir el Drawer, visible solo en pantallas grandes */}
      <Button
        className=" lg:hidden items-center"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      {/* Drawer visible en pantallas grandes */}
      <Drawer title="Menú" placement="right" onClose={onClose} open={visible}>
        <Menu mode="vertical" items={MENU_ITEMS_HEADER} />
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
