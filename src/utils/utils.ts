type TBreakpointValue<T> = {
    breakpoint: number;
    value: T;
};

export const getResponsiveValue = <T>(
    width: number | undefined,
    breakpoints: TBreakpointValue<T>[],
    defaultValue: T
): T => {
    // console.log(width, breakpoints.map((breakpoint) => breakpoint.breakpoint).join(", "), defaultValue);

    if (width === undefined) {
        return defaultValue;
    }

    for (let i = breakpoints.length - 1; i >= 0; i--) {
        if (width >= breakpoints[i].breakpoint) {
            return breakpoints[i].value;
        }
    }

    return defaultValue;
};
