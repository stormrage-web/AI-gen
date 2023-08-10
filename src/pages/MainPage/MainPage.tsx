import React from "react";
import UploadForm from "../../widgets/UploadForm/UploadForm";
import styles from "./MainPage.module.scss";
import CardGroup from "../../widgets/CardGroup/CardGroup";
import Navigation from "../../widgets/Navigation/Navigation";

const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.navigation}>
				<Navigation />
			</div>
			<UploadForm />
			<CardGroup />
		</div>
	);
};

export default MainPage;