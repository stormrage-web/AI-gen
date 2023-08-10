import React from "react";
import styles from "./CardModal.module.scss";
import Modal from "antd/lib/modal/Modal";

const CardModal = () => {
	return (
		<Modal className={styles.wrapper} open={true}>
			<p>asd</p>
		</Modal>
	);
};

export default CardModal;