import { useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext } from "react";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./NavBar.css";
import FilterForm from "./FilterForm";
import Date from "./Date";
export default function NavBar() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [topic] = useState(["Explore", "Trending", "Recently", "Newest"]);
    const [activeTopic, setActiveTopic] = useState(0);
    const [contentFormat, setContentFormat] = useState("10x");
    const [showContentFormat, setShowContentFormat] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    function handleChangingFormat(e) {
        setContentFormat(e.target.value);
    }
    function handleShowContentFormat() {
        setShowContentFormat(!showContentFormat);
    }

    //handle filter form
    function handleOpenForm() {
        setFormOpen(true);
    }
    function handleCloseForm() {
        setFormOpen(false);
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "20px 0",
                    fontWeight: "bold",
                }}
                className="the-nav-bar"
            >
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "20px",
                        cursor: "pointer",
                    }}
                >
                    {topic.map((ele, index) => (
                        <li
                            key={index}
                            className={`the-list ${
                                index === activeTopic ? "active" : ""
                            }`}
                            onClick={() => setActiveTopic(index)}
                        >
                            {ele}
                        </li>
                    ))}
                </ul>
                <div
                    className={`format ${showContentFormat ? "show" : ""}`}
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: "10px ",
                        // width: "100%",
                    }}
                >
                    <div
                        onClick={handleShowContentFormat}
                        className={`format-icon ${
                            showContentFormat ? "clicked" : ""
                        }`}
                    >
                        <ViewModuleIcon sx={{ fontSize: 30 }} />
                    </div>
                    <ToggleButtonGroup
                        value={contentFormat}
                        exclusive
                        onChange={handleChangingFormat}
                        aria-label="Platform"
                        className="format-number"
                        sx={{
                            maxHeight: "5px",
                            "& .MuiToggleButton-root": {
                                color: darkTheme
                                    ? "var(--color-dark)"
                                    : "var(--color-light)",
                                borderColor: darkTheme
                                    ? "var(--color-dark)"
                                    : "var(--color-light)",
                                "&:hover": {
                                    background: darkTheme
                                        ? "var(--secondry-dark-background)"
                                        : "var(--secondry-light-background)",
                                    color: "white",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: "var(--color-theme)",
                                    color: "white",
                                },
                                "&.Mui-selected:hover": {
                                    backgroundColor: "var(--color-theme)",
                                },
                            },
                            "& .MuiButtonBase-root": {
                                padding: "11px 5px",
                            },
                        }}
                    >
                        <ToggleButton value="10x">10X</ToggleButton>
                        <ToggleButton value="20x">20X</ToggleButton>
                        <ToggleButton value="30x">30X</ToggleButton>
                    </ToggleButtonGroup>
                    <div>
                        <Date />
                    </div>
                    <div className="filter">
                        <FilterAltIcon
                            sx={{ fontSize: 25 }}
                            onClick={handleOpenForm}
                        />
                    </div>
                </div>
                <FilterForm opne={formOpen} closeForm={handleCloseForm} />
            </div>
        </>
    );
}
