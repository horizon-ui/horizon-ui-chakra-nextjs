type RowObj = {
	name: string;
	progress: string;
	quantity: number;
	date: string;
};

const tableDataColumns: RowObj[] = [
	{
		name: "Apple Inc. - Tim Cook",
		quantity: 1000000, // $1,000,000
		progress: "17.5%",
		date: "12 Jan 2021",
	},
	{
		name: "Amazon.com Inc. - Jeff Bezos",
		quantity: 750000, // $750,000
		progress: "10.8%",
		date: "21 Feb 2021",
	},
	{
		name: "Microsoft Corporation - Satya Nadella",
		quantity: 500000, // $500,000
		progress: "21.3%",
		date: "13 Mar 2021",
	},
	{
		name: "Google LLC - Sundar Pichai",
		quantity: 250000, // $250,000
		progress: "31.5%",
		date: "24 Jan 2021",
	},
];

export default tableDataColumns;
