type RowObj = {
	name: string;
	tech: string[];
	date: string;
	progress: number;
	priceMexico?: number;
	priceUSA?: number;
};

const tableDataComplex: RowObj[] = [
    {
        name: 'Tomato',
        tech: ['apple', 'android', 'windows'],
        date: '12.Jan.2021',
        priceUSA: 0.85,
        priceMexico: 0.50,
        progress: Math.round(((0.85 - 0.50) / 0.50) * 100)
    },
    {
        name: 'Avocado',
        tech: ['apple'],
        date: '21.Feb.2021',
        priceUSA: 1.20,
        priceMexico: 0.70,
        progress: Math.round(((1.20 - 0.70) / 0.70) * 100)
    },
    {
        name: 'Beef',
        tech: ['apple', 'windows'],
        date: '13.Mar.2021',
        priceUSA: 5.00,
        priceMexico: 3.50,
        progress: Math.round(((5.00 - 3.50) / 3.50) * 100)
    },
    {
        name: 'Pork',
        tech: ['apple', 'android', 'windows'],
        date: '24.Jan.2021',
        priceUSA: 3.80,
        priceMexico: 2.50,
        progress: Math.round(((3.80 - 2.50) / 2.50) * 100)
    },
    {
        name: 'Onion',
        tech: ['apple', 'windows'],
        date: 'Oct 24, 2022',
        priceUSA: 0.40,
        priceMexico: 0.20,
        progress: 30
    },
    {
        name: 'Corn',
        tech: ['apple', 'android', 'windows'],
        date: 'Oct 24, 2022',
        priceUSA: 0.25,
        priceMexico: 0.15,
        progress: Math.round(((0.25 - 0.15) / 0.15) * 100)
    },
    {
        name: 'Sugar',
        tech: ['apple', 'android', 'windows'],
        date: '12.Jan.2021',
        priceUSA: 0.60,
        priceMexico: 0.35,
        progress: Math.round(((0.60 - 0.35) / 0.35) * 100)
    },
    {
        name: 'Coffee',
        tech: ['apple'],
        date: '21.Feb.2021',
        priceUSA: 4.50,
        priceMexico: 2.80,
        progress: Math.round(((4.50 - 2.80) / 2.80) * 100)
    },
    {
        name: 'Lime',
        tech: ['apple', 'windows'],
        date: '13.Mar.2021',
        priceUSA: 0.30,
        priceMexico: 0.15,
        progress: Math.round(((0.30 - 0.15) / 0.15) * 100)
    },
    {
        name: 'Strawberry',
        tech: ['apple', 'android', 'windows'],
        date: '24.Jan.2021',
        priceUSA: 2.00,
        priceMexico: 1.00,
        progress: Math.round(((2.00 - 1.00) / 1.00) * 100)
    },
    {
        name: 'Chili Pepper',
        tech: ['apple', 'windows'],
        date: 'Oct 24, 2022',
        priceUSA: 1.50,
        priceMexico: 1.00,
        progress: Math.round(((1.50 - 1.00) / 1.00) * 100)
    }
];

export default tableDataComplex;
