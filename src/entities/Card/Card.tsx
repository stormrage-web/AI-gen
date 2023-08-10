import Button from "antd/es/button";
import React from "react";
import styles from "./Card.module.scss";

export interface CardProps {
	src: string;
	name: string;
	modal?: boolean;
}

const Card = ({ src, name, modal }: CardProps) => {
	return (
		<div className={styles.wrapper}>
			<img src={src} alt="item"/>
			<div className={styles.group}>
				<p>{name}</p>
				{modal && (
					<Button type="primary">
						Change
					</Button>
				)}
			</div>
		</div>
	);
};

export default Card;