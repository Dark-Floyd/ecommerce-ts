import React from "react";
import { Product } from "../../models/product";
import { Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import styles from "./ProductCard.module.css";
import ChangeLayout from "../ui/ChangeLayout/ChangeLayout";

interface Props {
    products: Product[];
}

const ProductCards: React.FC<Props> = (props) => {
    return (
        <ChangeLayout>
            {props.products.map((product) => (
                <Col className={styles.colProduct} key={product.id}>
                    <ProductCard  product={product} />
                </Col>
            ))}
        </ChangeLayout>
    );
};

export default ProductCards;
