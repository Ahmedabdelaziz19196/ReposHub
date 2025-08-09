import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DarkAndLightTheme from "../Context/DarkAndLight";
import HnadleFilterForms from "../Context/HandleSearchedDate";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import Date from "./Date";

export default function FilterInput({ opne, closeForm }) {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const { handleSearchedDate } = useContext(HnadleFilterForms);

    const [filteredData, setFilteredData] = useState({
        language: "javascript",
        stars: "",
        creationDate: "",
        lastUpdate: "",
        Sorting: "",
    });

    const languageList = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "PHP",
        "Ruby",
        "Go",
        "Rust",
        "Swift",
        "Kotlin",
        "Dart",
        "Scala",
        "Perl",
        "Shell",
        "Objective-C",
        "R",
        "Lua",
        "Haskell",
    ];

    const handleClose = () => {
        closeForm();
    };
    function handleSentData() {
        handleSearchedDate(filteredData);
        closeForm();
    }
    return (
        <Box sx={{ minWidth: 120 }}>
            {/* language selection */}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <InputLabel
                    id="language-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                        "& .MuiList-root-MuiMenu-list": {
                            color: "red",
                        },
                    }}
                >
                    Language
                </InputLabel>
                <Select
                    labelId="language-label"
                    id="language"
                    value={filteredData.language}
                    label="Language"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            language: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                    }}
                >
                    {languageList.map((lang, index) => (
                        <MenuItem key={index} value={lang.toLowerCase()}>
                            {lang}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* language selection */}

            {/* stars selection */}
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                <InputLabel
                    id="stars-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                        "& .MuiList-root-MuiMenu-list": {
                            color: "red",
                        },
                    }}
                >
                    Stars
                </InputLabel>
                <Select
                    labelId="stars-label"
                    id="stars"
                    value={filteredData.stars}
                    label="stars"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            stars: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                    }}
                >
                    <MenuItem value={">=0"}>Select Stars</MenuItem>
                    <MenuItem value={"<500"}>Less than 500</MenuItem>
                    <MenuItem value={"500..1000"}>500 - 1000</MenuItem>
                    <MenuItem value={">1000"}>More than 1000</MenuItem>
                </Select>
            </FormControl>
            {/* stars selection */}

            {/*  creation date */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="create-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                        "& .MuiList-root-MuiMenu-list": {
                            color: "red",
                        },
                    }}
                >
                    Creation Date
                </InputLabel>
                <Select
                    labelId="create-label"
                    id="stars"
                    value={filteredData.creationDate}
                    label="stars"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            creationDate: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                    }}
                >
                    <MenuItem value={"2024-01-01"}>Select The Date</MenuItem>
                    <MenuItem value={"1year"}>Last year</MenuItem>
                    <MenuItem value={"6months"}>Last 6 months</MenuItem>
                    <MenuItem value={"1month"}>Last month</MenuItem>
                </Select>
                <div
                    style={{
                        position: "absolute",
                        right: "30px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Date />
                </div>
            </FormControl>
            {/*  creation date */}

            {/*  Last Update */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="update-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                        "& .MuiList-root-MuiMenu-list": {
                            color: "red",
                        },
                    }}
                >
                    Last Update
                </InputLabel>
                <Select
                    labelId="update-label"
                    id="stars"
                    value={filteredData.lastUpdate}
                    label="stars"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            lastUpdate: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                    }}
                >
                    <MenuItem value={"2024-01-01"}>Select the Date</MenuItem>
                    <MenuItem value={"1week"}>Updated in last week</MenuItem>
                    <MenuItem value={"1month"}>Updated in last month</MenuItem>
                    <MenuItem value={"6month"}>
                        Updated in last 6 months
                    </MenuItem>
                    <MenuItem value={"1year"}>Updated in last year </MenuItem>
                </Select>
                <div
                    style={{
                        position: "absolute",
                        right: "30px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Date />
                </div>
            </FormControl>
            {/*  Last Update */}

            {/*  Stars Sorting */}
            <FormControl
                fullWidth
                sx={{ marginBottom: "20px", position: "relative" }}
            >
                <InputLabel
                    id="update-label"
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        background: darkTheme
                            ? "var(--secondry-dark-background)"
                            : "var(--secondry-light-background)",
                        padding: "0px 5px",
                        "& .MuiList-root-MuiMenu-list": {
                            color: "red",
                        },
                    }}
                >
                    Stars Sorting
                </InputLabel>
                <Select
                    labelId="update-label"
                    id="stars"
                    value={filteredData.Sorting}
                    label="stars"
                    onChange={(e) =>
                        setFilteredData({
                            ...filteredData,
                            Sorting: e.target.value,
                        })
                    }
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                "& .MuiList-root": {
                                    backgroundColor: darkTheme
                                        ? "var(--main-dark-background)"
                                        : "var(--main-light-background)",
                                    color: darkTheme
                                        ? "var(--color-dark)"
                                        : "var(--color-light)",
                                },
                                "& .MuiList-root .MuiMenuItem-root": {
                                    "&:hover": {
                                        background: darkTheme
                                            ? "var(--secondry-dark-background)"
                                            : "var(--secondry-light-background)",
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        "& .MuiSvgIcon-root": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: darkTheme
                                ? "1px solid var(--color-dark)"
                                : "1px solid var(--color-light)",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                        "& .MuiSelect-select": {
                            color: darkTheme
                                ? "var(--color-dark)"
                                : "var(--color-light)",
                        },
                    }}
                >
                    <MenuItem value={"desc"}>Select the Sorting</MenuItem>
                    <MenuItem value={"desc"}>Descending</MenuItem>
                    <MenuItem value={"asc"}>Ascending</MenuItem>
                </Select>
                <div
                    style={{
                        position: "absolute",
                        right: "30px",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Date />
                </div>
            </FormControl>
            {/*  Stars Sorting */}

            <DialogActions sx={{ marginBottom: "20px" }}>
                <Button
                    onClick={handleClose}
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                    }}
                >
                    Cancel
                </Button>
                <Button
                    sx={{
                        color: darkTheme
                            ? "var(--color-dark)"
                            : "var(--color-light)",
                        "&:hover": {
                            background: "var(--color-theme)",
                        },
                    }}
                    className="search-button"
                    onClick={handleSentData}
                >
                    Search
                </Button>
            </DialogActions>
        </Box>
    );
}
