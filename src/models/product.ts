import { additionalInfo } from "./additionalinfo";
import { Category } from "./category";
import { Seller } from "./seller";

export interface Product {
    id: number;
    name: string;
    images: string[];
    uploadedDate: Date;
    description: string;
    price: number;
    seller: Seller;
    category: Category;
    additionalInfo?: additionalInfo[];
}
