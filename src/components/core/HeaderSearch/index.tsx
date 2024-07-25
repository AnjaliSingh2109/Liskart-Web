import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSearchLine } from "react-icons/ri";
import SelectStyle from "@utils/selectStyle";
import Select, { StylesConfig } from "react-select";
import variables from "@styles/scss/_variables.module.scss";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
    const options = [
        { value: "", label: "All" },
        { value: "school-bus", label: "Schoole Bus" },
        { value: "mini-bus", label: "Mini Bus" },
        { value: "scooters", label: "Scooters" },
        { value: "generators", label: "Generators" },
        { value: "motor-bikes", label: "Motor Bikes" },
    ];

    const customStyles: StylesConfig<{ value: string; label: string }, false> = {
        ...SelectStyle,
        container: (provided) => ({
            ...provided,
            borderRight: `1px solid ${variables.light}`,
        }),
        control: (provided, state) => ({
            ...(SelectStyle.control ? SelectStyle.control(provided, state) : provided),
            border: 0,
        }),
        valueContainer: (provided, state) => ({
            ...(SelectStyle.valueContainer ? SelectStyle.valueContainer(provided, state) : provided),
            width: "80px",
            paddingRight: "0",
        }),
    };
    return (
        <div className="d-flex border border-light bg-white rounded-pill p-1 align-items-center">
            <Select
                key="headerSearch"
                defaultValue={options.find((option) => option.value === "")}
                options={options}
                styles={customStyles}
                isSearchable={false}
                className="flex-none"
            />
            <Form.Control className="border-0" />
            <Button
                variant="dark"
                className={`${styles.btnSearch} rounded-circle p-0 flex-none align-items-center justify-content-center d-flex`}
            >
                <RiSearchLine size={16} />
            </Button>
        </div>
    );
};

export default HeaderSearch;
