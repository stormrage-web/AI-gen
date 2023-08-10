import React from "react";
import styles from "./UploadForm.module.scss";
import Form, { useForm } from "antd/lib/form/Form";
import Upload from "antd/lib/upload/Upload";
import { Button, message, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props: UploadProps = {
	name: "file",
	action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
	headers: {
		authorization: "authorization-text",
	},
	onChange(info) {
		if (info.file.status !== "uploading") {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
};

const UploadForm = () => {
	const [form] = useForm();

	return (
		<div className={styles.wrapper}>
			<Form
				form={form}
				name="horizontal_login"
				layout="inline"
				className={styles.form}
			>
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
				<Button htmlType="button">
					Reset
				</Button>
			</Form>
		</div>
	);
};

export default UploadForm;
