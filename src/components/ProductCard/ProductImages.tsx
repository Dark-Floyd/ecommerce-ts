import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { BsCircle, BsCircleFill } from "react-icons/all";
import styles from "./ProductCard.module.css";

interface Props {
    images: string[];
}

const ProductImages: React.FC<Props> = (props) => {
    const [shownImageIndex, setShownImageIndex] = useState(0);
    const handleOnClick = (
        event: React.MouseEvent<SVGElement>,
        index: number
    ) => {
        event.preventDefault();
        setShownImageIndex(index);
    };

    const circleStyleProps = {
        className: styles.productImageButton,
        size: 11,
    };

    if (props.images.length) {
        return (
            <React.Fragment>
                <Card.Img
                    className={styles.productImage}
                    src={props.images[shownImageIndex]}
                    variant="top"
                />
                <div className={styles.productImagesButtons}>
                    {props.images.map((_, index) =>
                        shownImageIndex === index ? (
                            <BsCircleFill
                                key={index}
                                onClick={(event) => handleOnClick(event, index)}
                                {...circleStyleProps}
                            />
                        ) : (
                            <BsCircle
                                key={index}
                                onClick={(event) => handleOnClick(event, index)}
                                {...circleStyleProps}
                            />
                        )
                    )}
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <Card.Img
                className={styles.productImage}
                src={`${process.env.PUBLIC_URL}/images/noImageAvailable.jfif`}
            />
        );
    }
};

export default ProductImages;
