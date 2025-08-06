import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { useContext, useEffect, useState } from "react";
import DarkAndLightTheme from "../Context/DarkAndLight";
import NavBar from "./NavBar";
import Card from "./Cards";
import ThePagination from "./Pagination";
import Header from "./Header";
import axios from "axios";

export default function MainPage() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [mobileSreach, isMobileSearch] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [responsedDate, setResponsedDate] = useState([]);
    const [totalResposedDate, setTotalResposedDate] = useState(0);
    const [contentPerPage, setContentPerPage] = useState("10");

    function handleSreachBar() {
        isMobileSearch(true);
    }
    function setSearchBarOffMobile() {
        if (window.innerWidth < 769) {
            isMobileSearch(false);
        }
    }
    function handlePageNumber(number) {
        setPageNumber(number);
    }

    function setContentNumberPerPage(e) {
        setContentPerPage(e);
    }
    //request Data From Search Github API
    useEffect(() => {
        axios
            .get("https://api.github.com/search/repositories", {
                params: {
                    q: "language:c++ stars:>=0 created:>2023-01-01 pushed:>2024-01-01",
                    sort: "stars",
                    order: "desc",
                    per_page: contentPerPage,
                    page: pageNumber,
                },
            })
            .then(function (response) {
                setResponsedDate(response.data.items);
                setTotalResposedDate(response.data.total_count);
            })
            .catch(function (error) {
                console.log(error);
            });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pageNumber, contentPerPage]);
    //request Data From Search Github API
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
                <Header
                    mobileSreach={mobileSreach}
                    handleSreachBar={handleSreachBar}
                    setSearchBarOffMobile={setSearchBarOffMobile}
                />
                <Divider
                    sx={{
                        backgroundColor: darkTheme ? "#3d444d" : "#d1d9e0",
                        position: "sticky",
                        top: "57px",
                        zIndex: "1000",
                    }}
                />
                <Container
                    maxWidth="md"
                    className="main-page"
                    sx={{ height: "calc(100% - 58px)" }}
                    onClick={setSearchBarOffMobile}
                >
                    <NavBar
                        contentPerPage={contentPerPage}
                        setContentNumberPerPage={setContentNumberPerPage}
                    />
                    {responsedDate.map((_, index) => (
                        <Card
                            key={index}
                            responsedDate={responsedDate}
                            index={index}
                        />
                    ))}

                    <ThePagination
                        handlePageNumber={handlePageNumber}
                        pageNumber={pageNumber}
                        total={totalResposedDate}
                        contentPerPage={+contentPerPage}
                    />
                </Container>
            </div>
        </>
    );
}
