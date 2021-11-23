import React, { useEffect, useState } from "react";
import { Card, ListGroup, Form } from "react-bootstrap";
import styles from "./Filter.module.css";

interface Props {
    header: string;
    selectors: { [name: string]: number };
    filter: (selectors: string[]) => void;
}

const CheckBoxesFilter: React.FC<Props> = (props) => {
    const [checkedSelectors, setCheckedSelectors] = useState<boolean[]>(
        new Array(Object.keys(props.selectors).length).fill(false)
    );

    // Each time we render the filter, we need show all products
    useEffect(() => {
        props.filter(Object.keys(props.selectors));
    }, []);

    const handleChange = (changedSelectorIndex: number) => {
        const names = Object.keys(props.selectors);
        let updatedCheckedSelectors = [...checkedSelectors];
        updatedCheckedSelectors[changedSelectorIndex] =
            !updatedCheckedSelectors[changedSelectorIndex];
        setCheckedSelectors(updatedCheckedSelectors);
        const filterSelectors = names.filter(
            (selector, index) => updatedCheckedSelectors[index]
        );

        if (filterSelectors.length) {
            props.filter(filterSelectors);
        } else {
            props.filter(names);
        }
    };

    return (
        <Card className={styles.filterCard}>
            <Card.Header as="h3">{props.header}</Card.Header>
            <ListGroup>
                {Object.keys(props.selectors).map((selector, index) => (
                    <ListGroup.Item key={selector}>
                        <Form.Check
                            type="checkbox"
                            id={selector}
                            label={`${selector} (${props.selectors[selector]})`}
                            checked={checkedSelectors[index]}
                            onChange={() => handleChange(index)}
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default CheckBoxesFilter;
