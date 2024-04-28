type RowObj = {
	name: [string, boolean];
	progress: string;
	quantity: number;
	date: string;
	info: boolean;
};

const tableDataCheck: RowObj[] = [
	{
		name: ["John Smith", false],
		quantity: 2458,
		progress: "17.5%",
		date: "12 Jan 2024",
		info: true,
	},
	{
		name: ["Emily Brown", false],
		quantity: 1485,
		progress: "10.8%",
		date: "21 Feb 2024",
		info: true,
	},
	{
		name: ["Michael Johnson", false],
		quantity: 1024,
		progress: "21.3%",
		date: "13 Mar 2024",
		info: true,
	},
	{
		name: ["Sarah Wilson", false],
		quantity: 858,
		progress: "31.5%",
		date: "24 Jan 2024",
		info: false,
	},
	{
		name: ["David Garcia", false],
		quantity: 258,
		progress: "12.2%",
		date: "24 Oct 2024",
		info: false,
	},
	{
		name: ["Linda Martinez", false],
		quantity: 1485,
		progress: "10.8%",
		date: "21 Feb 2024",
		info: false,
	},
	{
		name: ["James Anderson", false],
		quantity: 1024,
		progress: "21.3%",
		date: "13 Mar 2024",
		info: false,
	},
	{
		name: ["Alexis Turner", false],
		quantity: 858,
		progress: "31.5%",
		date: "24 Jan 2024",
		info: false,
	},
	{
		name: ["Daniel Clark", false],
		quantity: 258,
		progress: "12.2%",
		date: "24 Oct 2024",
		info: false,
	},
	{
		name: ["Victoria Lee", false],
		quantity: 1485,
		progress: "10.8%",
		date: "21 Feb 2024",
		info: false,
	},
	{
		name: ["Jessica Hall", false],
		quantity: 1024,
		progress: "21.3%",
		date: "13 Mar 2024",
		info: false,
	},
	{
		name: ["Samuel Parker", false],
		quantity: 858,
		progress: "31.5%",
		date: "24 Jan 2024",
		info: false,
	},
];

export default tableDataCheck;
