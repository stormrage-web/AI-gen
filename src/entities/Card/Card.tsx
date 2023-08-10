import Button from "antd/es/button";
import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardModal from "../CardModal/CardModal";

export interface CardProps {
	src: string;
	name: string;
	modal?: boolean;
}

const Card = ({ src, name, modal }: CardProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={styles.wrapper}>
			<img src={src} alt="item" className={styles.picture}/>
			<div className={styles.group}>
				<p>{name}</p>
				{modal && (
					<>
						<Button type="primary" onClick={() => setIsModalOpen(true)}>Change</Button>
						<CardModal src={src} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={[]}/>
					</>
				)}
			</div>
		</div>
	);
};

export default Card;
