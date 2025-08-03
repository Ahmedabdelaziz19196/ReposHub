import "./MainPage.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import NavBar from "./NavBar";
import Card from "./Cards";
import ThePagination from "./Pagination";

export default function MainPage() {
    const { darkTheme, handleDarkLightTheme } = useContext(DarkAndLightTheme);
    const [mobileSreach, inMobileSearch] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    function handleSreachBarDisplay() {
        if (window.innerWidth < 769) {
            inMobileSearch(true);
        }
    }
    function setSearchBarOffMobile() {
        if (window.innerWidth < 769) {
            inMobileSearch(false);
        }
    }

    function handleThemeIcon() {
        handleDarkLightTheme();
    }
    function handleScroll() {
        setIsScrolled(window.scrollY >= 20 ? true : false);
    }
    window.addEventListener("scroll", handleScroll);

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    background: darkTheme
                        ? "var(--main-dark-background)"
                        : "var(--main-light-background)",
                    color: darkTheme
                        ? "var(--color-dark)"
                        : "var(--color-light)",
                }}
            >
                <div
                    style={{
                        height: "57px",
                        width: "100%",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "sticky",
                        top: "0px",
                        zIndex: "9999",
                        backdropFilter: "blur(10px)",
                    }}
                    className={`top-bar ${isScrolled ? "scrolled" : ""}`}
                    data-theme={darkTheme ? "dark" : "light"}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px   ",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src={
                                darkTheme
                                    ? require("../img/GitHub-Logo-edit-dark2.png")
                                    : require("../img/GitHub-Logo-edit-dark.png")
                            }
                            alt="logo"
                            className="thelogo"
                        />
                        <p style={{ fontWeight: "bold" }}>ReposHub</p>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <input
                            type="text"
                            className={`sreach-input ${
                                mobileSreach ? "clicked" : ""
                            }`}
                            style={{
                                height: "32px",
                                background: "transparent",
                                border: "1px solid #5e6369ff",
                                borderRadius: "10px",
                                padding: "10px  10px 10px 40px ",
                                width: "200px",
                                color: "#5e6369ff",
                            }}
                            placeholder="Search..."
                        />
                        <SearchIcon
                            style={{
                                color: "#5e6369ff",
                                position: "absolute",
                                top: "50%",
                                left: "20px",
                                transform: "translate(-50%, -50%)",
                            }}
                            className={`search-icon ${
                                mobileSreach ? "clicked" : ""
                            }`}
                            onClick={handleSreachBarDisplay}
                        />
                        <div
                            style={{
                                color: "#5e6369ff",
                                border: "1px solid #5e6369ff",
                                padding: "3px",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignContent: "center",
                                cursor: "pointer",
                                width: "32px",
                                height: "32px",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onClick={handleThemeIcon}
                        >
                            <FontAwesomeIcon
                                icon={faMoon}
                                className={`moon-icon ${
                                    darkTheme ? "clickd" : ""
                                }`}
                            />
                            <FontAwesomeIcon
                                icon={faSun}
                                className={`sun-icon ${
                                    darkTheme ? "clickd" : ""
                                }`}
                            />
                        </div>
                    </div>
                </div>
                <Divider
                    sx={{
                        backgroundColor: darkTheme ? "#30363d" : "#ebebebff",
                        position: "sticky",
                        top: "57px",
                    }}
                />
                <Container
                    maxWidth="md"
                    className="main-page"
                    sx={{ height: "calc(100% - 58px)" }}
                    onClick={setSearchBarOffMobile}
                >
                    <NavBar />
                    <Card />
                    <ThePagination />
                </Container>
            </div>
        </>
    );
}
