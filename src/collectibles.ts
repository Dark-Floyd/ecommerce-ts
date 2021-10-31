import { Product } from "../src/models/product";

	const products: Product[] = [
		{
			id: 1,
			description: "The best in the whole world",
			price: 1500,
			images: [
				`https://d3m9l0v76dty0.cloudfront.net/system/photos/5964878/original/33917bca37d8df558b405b612803028a.jpg`,
				`https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/TCZ34_Z_P_194252022016_1.png`,
			],
			name: "Iphone 12 Pro Max",
			category: {
				name: "technology",
			},
			seller: {
				name: "Apple",
			},
			uploadedDate: new Date("2020-02-01 15:30:30"),
		},
		{
			id: 2,
			description: "Best google phone",
			price: 600,
			images: [
				`https://www.notebookcheck.biz/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg`,
				`https://d3m9l0v76dty0.cloudfront.net/system/photos/5727350/large/ea0964e9743d98b2d76f9547309a5c6a.jpg`,
				`https://d3m9l0v76dty0.cloudfront.net/system/photos/6342426/large/f1940c4c3007e95893e4879069773e3a.jpg`,
			],
			name: "Google Pixel 5",
			category: {
				name: "technology",
			},
			seller: {
				name: "Samsung",
			},
			uploadedDate: new Date("2020-02-01 15:30:30"),
		},
		{
			id: 3,
			description: "Can survive nuclear war",
			price: 20,
			images: [
				`https://img.zap.co.il/4/6/3/0/46140364c.gif`,
				`https://www.imgshop.co.il/images/itempics/2098_040520201314401_large.jpg`,
			],
			name: "Nokia 3310",
			category: {
				name: "technology",
			},
			seller: {
				name: "Samsung",
			},
			uploadedDate: new Date("2020-02-01 15:30:30"),
			additionalInfo: "Can survive everything",
		},
		{
			id: 4,
			description: "Best phone with reasonable price",
			price: 700,
			images: [
				`https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/WKG68_Z_P_8806090887185_1.png`,
			],
			name: "Samsung Galaxy S21 Ultra",
			category: {
				name: "technology",
			},
			seller: {
				name: "Samsung",
			},
			uploadedDate: new Date("2020-02-01 15:30:30"),
		},
		{
			id: 5,
			description: "2nd place best phone with reasonable price",
			price: 500,
			images: [
				`https://d3m9l0v76dty0.cloudfront.net/system/photos/6435163/large/13306935537d3739f3de6c54ef774eb6.jpg`,
			],
			name: "Samsung Galaxy S20",
			category: {
				name: "technology",
			},
			seller: {
				name: "Samsung",
			},
			uploadedDate: new Date("2020-02-01 15:30:30"),
			additionalInfo: "Kinda old though",
		},
	];
	
	export default products;
	