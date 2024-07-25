"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Select, { SingleValue, StylesConfig } from "react-select";

import CustomPagination from "@components/core/CustomPagination";
import { mockProductsData } from "@models/constant";
import { TProducts } from "@models/index";
import "@styles/pagination.scss";
import SelectStyle from "@utils/selectStyle";

const ProductsComponent = dynamic(() => import("@components/Products"), {
    loading: () => <p>...</p>,
});

const Products = () => {
    const [data, setData] = useState<TProducts[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = Object.fromEntries(searchParams.entries());

    useEffect(() => {
        setData(mockProductsData);
        setCurrentPage(Number(params.page));
    }, []);

    const handlePageChange = (page: number) => {
        router.push(`/products/?page=${page}`);
    };

    const [pageSize, setPageSize] = useState<number>(9);

    const showOnPageOptions = [
        { value: "9", label: "9" },
        { value: "12", label: "12" },
        { value: "15", label: "15" },
        { value: "21", label: "21" },
        { value: "30", label: "30" },
    ];

    const onSelectChange = (newValue: SingleValue<{ value: string; label: string }>) => {
        const currentValue = newValue?.value;
        if (currentValue) {
            setPageSize(Number(currentValue));
        }
    };

    const customStyles: StylesConfig<{ value: string; label: string }, false> = {
        ...SelectStyle,
        valueContainer: (provided, state) => ({
            ...(SelectStyle.valueContainer ? SelectStyle.valueContainer(provided, state) : provided),
            width: "50px",
            paddingRight: "0",
        }),
        menuList: (provided, state) => ({
            ...(SelectStyle.menuList ? SelectStyle.menuList(provided, state) : provided),
            width: "80px",
        }),
    };

    return (
        <>
            <ProductsComponent data={data} />

            <Row className="row-gap-2 row-cols-2 mt-4 mt-md-5">
                <Col>
                    <CustomPagination
                        current={Number(currentPage)}
                        total={240}
                        pageSize={Number(pageSize)}
                        onChange={handlePageChange}
                    />
                </Col>
                <Col className="d-flex align-items-center justify-content-end gap-2">
                    <span className="fs-medium">Items</span>
                    <Select
                        key="pageSize"
                        defaultValue={showOnPageOptions.find((option) => option.value === String(pageSize))}
                        onChange={onSelectChange}
                        options={showOnPageOptions}
                        styles={customStyles}
                        isSearchable={false}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Products;
