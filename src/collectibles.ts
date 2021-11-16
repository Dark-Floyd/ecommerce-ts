import { Product } from '../src/models/product';

const products: Product[] = [
	{
		id: 1,
		description: 'The leader of them all',
		price: 2000,
		images: [
			'https://www.picclickimg.com/d/l400/pict/263579600949_/Optimus-Prime-Collectible-Autobots-Transformers-Dark-of-the.jpg',
			'https://cdn.shopify.com/s/files/1/2726/1450/products/RE_TransOptimus_FIGURE_2048x2048.png?v=1587443320',
			'https://www.hasbro.com/common/productimages/en_US/568E33D9528B4A19BD862BADE3DAB52F/4922048107888e6987f1a7932979b47ada7d276b.jpg',
		],
		name: 'Optimus Prime',
		category: {
			name: 'Autobots',
		},
		seller: {
			name: 'Jolyn',
		},
		uploadedDate: new Date('2020-02-01 15:30:30'),
		additionalInfo: [
			{
				title: 'Tags',
				description: 'Movies',
			},
			{
				title: 'Color',
				description: 'Blue and Red',
			},
			{
				title: 'Made in',
				description: 'China',
			},
		],
	},
	{
		id: 2,
		description: 'Unspecified disorder of orbit',
		price: 600,
		images: [
			'https://i.pinimg.com/originals/f9/9f/85/f99f8544114435e7eadaf9debffa4c62.jpg',
			'https://target.scene7.com/is/image/Target/GUEST_c1df3f09-7fdf-413f-8cb2-711a7ad7ebb8?wid=488&hei=488&fmt=pjpeg',
		],
		name: 'BumbleBee',
		category: {
			name: 'Autobots',
		},
		seller: {
			name: 'Zorah',
		},
		uploadedDate: new Date('2020-02-01 15:30:30'),
		additionalInfo: [
			{
				title: 'Tags',
				description: 'Movies',
			},
			{
				title: 'Color',
				description: 'Yellow',
			},
			{
				title: 'Made in',
				description: 'China',
			},
		],
	},
	{
		id: 3,
		description: 'Survivor',
		price: 200,
		images: [
			`https://i.ebayimg.com/images/g/X28AAOSws0FgqcdK/s-l1600.jpg`,
			'https://i.ebayimg.com/images/g/s9oAAOSweMJeUnWQ/s-l640.jpg',
			'https://ae01.alicdn.com/kf/HTB1f66vHVXXXXXHXFXXq6xXFXXXf/Square-Enix-Play-Arts-Kai-Isaac-Clarke-Dead-Space-3-Action-Figure.jpg',
		],
		name: 'Issac Clark',
		category: {
			name: 'Dead Space',
		},
		seller: {
			name: 'Zorah',
		},
		uploadedDate: new Date('2020-02-01 15:30:30'),
		additionalInfo: [
			{
				title: 'Tags',
				description: 'Video Games',
			},
			{
				title: 'Material',
				description: 'Plastic',
			},
			{
				title: 'Made in',
				description: 'United States',
			},
		],
	},
	{
		id: 4,
		description: 'Rip and Tear',
		price: 700,
		images: [
			'https://bbts1.azureedge.net/images/p/full/2018/05/2969985a-b65f-48d6-8838-a4de395fce7d.jpg',
			'https://i.ytimg.com/vi/UQA851fRdG4/maxresdefault.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieIpa0gj-qJ4tqNQpYhmjMgniiTYBu3zusQ&usqp=CAU',
		],
		name: 'Doom Guy',
		category: {
			name: 'Doom',
		},
		seller: {
			name: 'Jolyn',
		},
		uploadedDate: new Date('2020-02-01 15:30:30'),
		additionalInfo: [
			{
				title: 'Tags',
				description: 'Video Games',
			},
			{
				title: 'Material',
				description: 'Plastic',
			},
			{
				title: 'Made in',
				description: 'United States',
			},
		],
	},
	{
		id: 5,
		description: 'Pure Evil',
		price: 500,
		images: [
			'https://m.media-amazon.com/images/I/41Xhqtw6LmL._AC_.jpg',
			'https://media.entertainmentearth.com/assets/images/f900702429ba4a289ec7a62758fe6df2xl.jpg',
			'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://numskull.com/wp-content/uploads/Tubbz-DOOM-Marauder-NS-08.jpg',
		],
		name: 'Marauder Duck',
		category: {
			name: 'Doom',
		},
		seller: {
			name: 'Lucias',
		},
		uploadedDate: new Date('2020-02-01 15:30:30'),
		additionalInfo: [
			{
				title: 'Tags',
				description: 'Video Games',
			},
			{
				title: 'Material',
				description: 'Rubber',
			},
			{
				title: 'Made in',
				description: 'United Kingdom',
			},
		],
	},
];

export default products;
