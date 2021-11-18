import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./FullProduct.module.css";

interface Props {
    images: string[];
}


const ProductImages: React.FC<Props> = (props) => {
    const [shownImageIndex, setShownImageIndex] = useState(0);
    const handleOnClick = (
        event: React.MouseEvent<HTMLImageElement>,
        index: number
    ) => {
        event.preventDefault();
        setShownImageIndex(index);
    };

    return (
        <Card className={styles.imagesCard}>
            {props.images.length ? (
                <React.Fragment>
                    <Card.Img src={props.images[shownImageIndex]} />
                    <Card.Body>
                        {props.images.map((image, index) => (
                            <img
                                src={image}
                                alt="Product"
                                className={styles.sideImage}
                                onClick={(event) => handleOnClick(event, index)}
                            />
                        ))}
                    </Card.Body>
                </React.Fragment>
            ) : (
                <Card.Img
                    src={`${process.env.PUBLIC_URL}/images/noImageAvailable.jfif`}
                />
            )}
        </Card>
    );
};

export default ProductImages;
