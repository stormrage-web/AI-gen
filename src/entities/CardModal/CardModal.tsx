import React from "react";
import styles from "./CardModal.module.scss";
import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";
import Form, { useForm } from "antd/lib/form/Form";
import Input from "antd/lib/input/Input";
import { ModalProps } from "antd/lib";

interface CardModadProps extends ModalProps {
	src: string;
}

const CardModal = ({src, ...props}: CardModadProps) => {
	const [form] = useForm();

	return (
		<Modal className={styles.wrapper} {...props}>
			<Form
				form={form}
				name="horizontal_login"
				layout="inline"
				className={styles.form}
			>
				<Input className={styles.input}/>
				<Button type="primary" htmlType="submit" className={styles.submit}>
					Submit
				</Button>
			</Form>
			<div className={styles.group}>
				<img src={src} className={styles.group__image} alt="item" />
				<div className={styles.group__left}>
					<Button type="primary" htmlType="submit" className={styles.changeButton}>
						White background
					</Button>
					<Button type="primary" htmlType="submit" className={styles.changeButton}>
						Context background
					</Button>
					<Button type="primary" htmlType="submit" className={styles.changeButton}>
						Infographics
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default CardModal;