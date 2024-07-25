"use client";

import { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import { FaMinus, FaPlus } from "react-icons/fa";

import { TAccordion } from "@/models";

import styles from "./GlobalAccordion.module.scss";

type TGlobalAccordionProps = {
    data: TAccordion[];
};

const GlobalAccordion = (props: TGlobalAccordionProps) => {
    const { data } = props;
    const [activeKey, setActiveKey] = useState<string>("0");

    const handleToggle = (key: any) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <Accordion defaultActiveKey="0" activeKey={activeKey} flush={true}>
            {data.map((item, index) => (
                <Accordion.Item eventKey={String(index)} key={index} className={data.length !== index ? "mb-2" : ""}>
                    <Accordion.Header
                        className={`d-flex align-items-center gap-3 py-2 ${styles.accordionHeader}`}
                        onClick={() => handleToggle(String(index))}
                    >
                        <span className="fs-4 fw-semibold">{item.title}</span>
                        <span className={`bg-light rounded-circle small p-3 lh-1 ms-auto`}>
                            {activeKey === String(index) ? <FaMinus /> : <FaPlus />}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body className="fs-6 fw-medium">{item.content}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default GlobalAccordion;
