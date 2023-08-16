import React, { useContext } from "react";

import CardGroup from "../../widgets/CardGroup/CardGroup";
import { CardsContext } from "../../pages/MainPage/MainPage";
import { Button } from "antd";

const ResultTab = () => {
	const [,,resultCards] = useContext(CardsContext);
	console.log(resultCards);
	return (
		<>
			<Button type="primary" htmlType="submit">
				Download all items
			</Button>
			<CardGroup items={resultCards} modal/>
		</>
	);
};

export default ResultTab;