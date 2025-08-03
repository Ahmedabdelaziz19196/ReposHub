import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DarkAndLightTheme from "../Context/DarkAndLight";
import { useContext, useState } from "react";
import Date from "./Date";

export default function FilterInput() {
    const { darkTheme } = useContext(DarkAndLightTheme);
    const [language, setLanguage] = useState("javascript");
    const [stars, seStars] = useState("");

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

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

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
                {/* language selection */}
                <Select
                    labelId="language-label"
                    id="language"
                    value={language}
                    label="Language"
                    // onChange={handleChange}
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
                    value={stars}
                    label="stars"
                    // onChange={handleChange}
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
                    <MenuItem value={"<500"}>Less than 500</MenuItem>
                    <MenuItem value={"500..1000"}>500 - 1000</MenuItem>
                    <MenuItem value={">1000"}>More than 1000</MenuItem>
                </Select>

                {/* stars selection */}
            </FormControl>
            {/* stars selection */}

            {/* stars create date */}
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
                    value={stars}
                    label="stars"
                    // onChange={handleChange}
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
            {/* stars create date */}
        </Box>
    );
}
