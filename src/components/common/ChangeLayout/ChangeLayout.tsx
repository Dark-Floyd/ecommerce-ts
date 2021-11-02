import React, { useState } from "react";
import styles from "./ChangeLayout.module.css";
import { Card, Row } from "react-bootstrap";
import { AiFillLayout, AiOutlineLayout } from "react-icons/all";
import { IconBaseProps } from "react-icons";

const ChangeLayoutCard: React.FC<{}> = (props) => {
    const [layoutMode, setLayoutMode] = useState(3);
    const handleOnClick = () => setLayoutMode(layoutMode === 3 ? 4 : 3);
    const iconProps: IconBaseProps = {
        onClick: handleOnClick,
        size: "25",
        className: styles.layoutIcon,
    };

    return (
        <Card className={styles.layoutCard}>
            <Card.Header className={styles.layoutCardHeader}>
                Change Layout{" "}
                {layoutMode === 3 ? (
                    <AiOutlineLayout {...iconProps} />
                ) : (
                    <AiFillLayout {...iconProps} />
                )}
            </Card.Header>
            <Row md={layoutMode} className={"h-100"}>
                {props.children}
            </Row>
        </Card>
    );
};

export default ChangeLayoutCard;
