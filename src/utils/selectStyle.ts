import { StylesConfig } from "react-select";
import variables from "@styles/scss/_variables.module.scss";

const SelectStyle: StylesConfig<{ value: string; label: string }, false> = {
    control: (provided) => ({
        ...provided,
        minHeight: "40px",
        borderColor: variables.medium,
        borderRadius: "50rem",
        boxShadow: "none",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    menu: (provided) => ({
        ...provided,
        margin: "4px 0 0 0",
        border: "none",
        borderRadius: `8px`,
        width: "auto",
        overflow: "hidden",
    }),
    menuList: (provided) => ({
        ...provided,
        padding: 0,
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? variables.white : variables.dark,
        backgroundColor: state.isSelected ? variables.primary : "transparent",
        "&:active": {
            backgroundColor: "transparent",
        },
    }),
};

export default SelectStyle;
