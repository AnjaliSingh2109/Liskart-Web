"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import { IoLanguage } from "react-icons/io5";

const Internationalization = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const options = [
        { value: "en", label: "English (EN)" },
        { value: "hi", label: "Hindi (HI)" },
    ];

    const onSelectChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        const nextLocale = newValue?.value;
        if (nextLocale) {
            startTransition(() => {
                router.replace(`/${nextLocale}`);
            });
        }
    };

    const customStyles: StylesConfig<{ value: string; label: string }, false> = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "transparent",
            borderColor: "transparent",
            height: "24px", // Set the height
            minHeight: "24px",
            width: "105px",
            border: "0", // Remove the border
            boxShadow: "none",
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: "0", // Adjust padding as needed to remove spacing
        }),
        singleValue: (provided) => ({
            ...provided,
            margin: 0, // Remove margin
            color: "white", // Change text color to white
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: 0,
            color: "white", // Initial color of the indicator
            "&:hover": {
                color: "white", // Color on hover
            },
            "&:focus": {
                color: "white", // Color on focus
            },
        }),
        menu: (provided) => ({
            ...provided,
            paddingTop: 0, // Remove top padding
            paddingBottom: 0, // Remove bottom padding
            border: "none",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#f2f2f2" : "transparent", // Hover background color
            color: state.isSelected ? "black" : "inherit", // Selected option text color
            "&:hover": {
                backgroundColor: "#f2f2f2", // Hover background color
            },
        }),
    };

    return (
        <div className="d-flex ps-3 ms-3 border-start border-white border-opacity-25">
            <IoLanguage size={24} className="me-2" color="white" />
            <Select
                key="internationalization"
                defaultValue={options.find((option) => option.value === localActive)}
                onChange={onSelectChange}
                isDisabled={isPending}
                options={options}
                styles={customStyles}
                isSearchable={false}
            />
        </div>
    );
};

export default Internationalization;
