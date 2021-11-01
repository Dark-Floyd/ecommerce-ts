import React, { useState } from "react";
import { Card, Form, ListGroup } from "react-bootstrap";
import styles from "./Filters.module.css";

export interface SelectMember {
    name: string;
    onClick: () => void;
}

interface Props {
    header: string;
    selectors: SelectMember[];
}

const SelectFilter: React.FC<Props> = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleChange = (onClick: () => void, index: number) => {
        setSelectedIndex(index);
        onClick();
    };

    return (
        <Card className={styles.filterCard}>
            <Card.Header as="h3">{props.header}</Card.Header>
            <ListGroup>
                {props.selectors.map((selector, index) => (
                    <ListGroup.Item key={index}>
                        <Form.Check
                            type="radio"
                            id={selector.name}
                            label={selector.name}
                            checked={index === selectedIndex}
                            onChange={() =>
                                handleChange(selector.onClick, index)
                            }
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default SelectFilter;
