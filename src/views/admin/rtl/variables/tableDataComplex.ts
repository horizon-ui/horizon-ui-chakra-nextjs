type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: "Red Cross Foundation",
		progress: 75.5,
		status: "Approved",
		date: "12 Jan 2021",
	},
	{
		name: "UNICEF",
		progress: 25.5,
		status: "Disable",
		date: "21 Feb 2021",
	},
	{
		name: "Doctors Without Borders",
		progress: 90,
		status: "Approved",
		date: "13 Mar 2021",
	},
	{
		name: "Greenpeace",
		progress: 50.5,
		status: "Approved",
		date: "24 Oct 2022",
	},
];

export default tableDataComplex;
