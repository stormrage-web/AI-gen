import React from "react";
import styles from "./CardGroup.module.scss";
import Card from "../../entities/Card/Card";
import CardModal from "../../entities/CardModal/CardModal";

const CardGroup = () => {
	return (
		<div className={styles.wrapper}>
			<Card src={"https://ir.ozone.ru/s3/multimedia-k/wc250/6575201144.jpg"} name={"picture.jpg"} modal/>
			<Card src={"https://ir.ozone.ru/s3/multimedia-k/wc250/6575201144.jpg"} name={"picture.jpg"}/>
			<Card src={"https://ir.ozone.ru/s3/multimedia-k/wc250/6575201144.jpg"} name={"picture.jpg"}/>
			<Card src={"https://ir.ozone.ru/s3/multimedia-k/wc250/6575201144.jpg"} name={"picture.jpg"}/>
			<Card src={"https://ir.ozone.ru/s3/multimedia-k/wc250/6575201144.jpg"} name={"picture.jpg"}/>
			<CardModal/>
		</div>
	);
};

export default CardGroup;