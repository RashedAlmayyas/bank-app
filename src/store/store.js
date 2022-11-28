import { createStore } from "redux";

const initState = {
	accounts: [
		{
			id: 1,
			customerName: "Rashed",
			accountNumber: "1478",
			accountType: "commercial",
		},
		{
			id: 2,
			customerName: "Mayyas",
			accountNumber: "1568",
			accountType: "under clouds",
		},
		{
			id: 3,
			customerName: "mugheir",
			accountNumber: "1148",
			accountType: "to provide",
		},
		{
			id: 4,
			customerName: "Elyas",
			accountNumber: "9852",
			accountType: "commercial",
		},
		{
			id: 5,
			customerName: "Motaz",
			accountNumber: "54545",
			accountType: "commercial",
		},
		{
			id: 6,
			customerName: "Hashem",
			accountNumber: "7863",
			accountType: "under clouds",
		},
		
	],
};

const reducer = (state = initState, action) => {
	return state;
};

const store = createStore(reducer);

export default store;
