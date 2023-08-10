import React, { useState } from "react";
import { AppstoreOutlined, BarcodeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
	{
		label: "Source",
		key: "mail",
		icon: <BarcodeOutlined />,
	},
	{
		label: "Result",
		key: "app",
		icon: <AppstoreOutlined />,
		disabled: true,
	},
];

const Navigation = () => {
	const [current, setCurrent] = useState("mail");

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navigation;