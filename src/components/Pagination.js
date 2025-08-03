import * as React from "react";
import Pagination from "@mui/material/Pagination";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
export default function ThePagination() {
    const { darkTheme } = useContext(DarkAndLightTheme);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
            }}
        >
            <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                sx={{
                    "& .MuiPaginationItem-root": {
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    },

                    "& .MuiButtonBase-root": {
                        border: "none",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "var(--color-theme)",
                        color: "white",
                        borderColor: "var(--color-theme)",
                    },
                }}
            />
        </div>
    );
}
