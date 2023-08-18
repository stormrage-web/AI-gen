import React, { useContext } from "react";
import styles from "./UploadForm.module.scss";
import Form, { useForm } from "antd/lib/form/Form";
import Upload from "antd/lib/upload/Upload";
import { Button, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message } from "antd/lib";
import { CardsContext } from "../../pages/MainPage/MainPage";

const UploadForm = () => {
	const [form] = useForm();
	const [, setCards,, setResultCards] = useContext(CardsContext);

	const props: UploadProps = {
		name: "file",
		accept: ".json",
		action: "http://51.250.91.130:5000/source",
		headers: {
			"Content-Type": "application/json",
		},
		beforeUpload: (file) => {
			const reader = new FileReader();

			reader.onload = (e) => {
				if (setCards && setResultCards) {
					setCards(JSON.parse(e.target?.result as string));
					setResultCards(JSON.parse(e.target?.result as string));
				}
				// axios
				// 	.get(
				// 		"http://51.250.91.130:5000/source?files=" +
				// 		JSON.stringify(
				// 			JSON.parse(e.target?.result as string),
				// 		),
				// 	)
				// 	.then((result) => {
				// 		console.log(result.data);
				// 		if (setResultCards)
				// 			setResultCards(result.data.map((item: any) => ({id: item.id, url: item.generated[item.generated.length - 1].url})));
				// 	})
				// 	.catch(() => {
				// 		console.log("axios error");
				// 	});
			};
			reader.readAsText(file);

			// Prevent upload
			return false;
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

	return (
		<div className={styles.wrapper}>
			<p className={styles.title}>Upload your JSON</p>
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
				<Button htmlType="button">Reset</Button>
			</Form>
			<code style={{whiteSpace: "pre-line"}}>
				Пример JSON:
				{"\n[\n" +
					" {\n" +
					"  \"id\": 10563370,\n" +
					"  \"url\": \"http:\\/\\/avatars.mds.yandex.net\\/get-mpic\\/1911047\"\n" +
					" },\n" +
					" {\n" +
					"  \"id\": 10563370,\n" +
					"  \"url\": \"http:\\/\\/avatars.mds.yandex.net\\/get-mpic\\/1912364\"\n" +
					" }\n" +
					"]"}
			</code>
		</div>
	);
};

export default UploadForm;
