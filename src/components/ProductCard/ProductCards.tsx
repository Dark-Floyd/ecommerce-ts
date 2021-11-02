import React from "react";
import { Product } from "../../models/product";
import { Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import styles from "./ProductCard.module.css";
import ChangeLayoutCard from "../common/ChangeLayout/ChangeLayout";

interface Props {
    products: Product[];
}

const Products: React.FC<Props> = (props) => {
    return (
        <ChangeLayoutCard>
            {props.products.map((product) => (
                <Col className={styles.colProduct} key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </Col>
            ))}
        </ChangeLayoutCard>
    );
};

export default Products;
