import { Product } from '../src/models/product';

const products: Product[] = [
	{
		id: 1,
		description: 'The leader of them all',
		price: 2000,
		images: [
			'https://www.picclickimg.com/d/l400/pict/263579600949_/Optimus-Prime-Collectible-Autobots-Transformers-Dark-of-the.jpg',
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
		images: ['https://i.pinimg.com/originals/f9/9f/85/f99f8544114435e7eadaf9debffa4c62.jpg'],
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
		description: 'Pneumococcal arthritis, right elbow',
		price: 200,
		images: [`https://i.ebayimg.com/images/g/X28AAOSws0FgqcdK/s-l1600.jpg`],
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
		images: [`https://bbts1.azureedge.net/images/p/full/2018/05/2969985a-b65f-48d6-8838-a4de395fce7d.jpg`],
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
		images: [`https://m.media-amazon.com/images/I/41Xhqtw6LmL._AC_.jpg`],
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
