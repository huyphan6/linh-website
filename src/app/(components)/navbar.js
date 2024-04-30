"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Typography,
    Stack,
    Menu,
    MenuItem,
    Drawer,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const Navbar = () => {
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
    };

    const theme = createTheme({
        palette: {
            linhButton: {
                main: "#7E5A9B",
                contrastText: "#ffffff",
            },
        },
        typography: {
            fontFamily: "-apple-system",
            button: {
                textTransform: "none",
            },
            h5: {
                fontWeight: 700,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <Stack width="95vw" direction="row" justifyContent="flex-end">
                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            mx: 1,
                            p: 2,
                            justifyContent: "flex-start",
                        }}
                    >
                        Linh Dry Cleaners
                    </Typography>

                    <Stack
                        spacing={1.25}
                        direction="row"
                        variant=""
                        sx={{
                            mx: 1,
                            spacing: "2rem",
                            alignContent: "center",
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "block",
                                xl: "block",
                            },
                        }}
                    >
                        <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<HomeRoundedIcon />}
                            onClick={() => router.push("/")}
                        >
                            Home
                        </Button>
                        {/* <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<InfoRoundedIcon />}
                            onClick={() => router.push("/about")}
                        >
                            About
                        </Button> */}
                        <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<MonetizationOnRoundedIcon />}
                            onClick={() => router.push("/services")}
                        >
                            Services
                        </Button>
                        <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<AccountCircleRoundedIcon />}
                            onClick={() => router.push("/staff")}
                        >
                            Staff
                        </Button>
                        <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<CallRoundedIcon />}
                            onClick={() => router.push("/contact")}
                        >
                            Contact
                        </Button>
                        <Button
                            color="linhButton"
                            variant="contained"
                            startIcon={<CalendarMonthRoundedIcon />}
                            onClick={() => router.push("/hours")}
                        >
                            Hours
                        </Button>
                    </Stack>

                    <IconButton
                        // aria-label="more"
                        // id="long-button"
                        // aria-controls={open ? "long-menu" : undefined}
                        // aria-expanded={open ? "true" : undefined}
                        // aria-haspopup="true"
                        // onClick={handleClick}
                        onClick={() => toggleDrawer(true)}
                        sx={{
                            mx: 1,
                            display: {
                                xs: "block",
                                sm: "block",
                                md: "block",
                                lg: "none",
                                xl: "none",
                            },
                        }}
                    >
                        <MenuRoundedIcon />
                    </IconButton>

                    <Drawer open={open} onClose={() => toggleDrawer(false)} >
                        <Stack
                            spacing={3}
                            width="250px"
                            direction="column"
                            sx={{
                                m: 2,
                                p: 2,
                                spacing: "2rem",
                                alignContent: "center",
                            }}
                        >
                            <Button
                                color="linhButton"
                                variant="contained"
                                size="lg"
                                startIcon={<HomeRoundedIcon />}
                                onClick={() => router.push("/")}
                            >
                                Home
                            </Button>
                            <Button
                                color="linhButton"
                                variant="contained"
                                size="lg"
                                startIcon={<MonetizationOnRoundedIcon />}
                                onClick={() => router.push("/services")}
                            >
                                Services
                            </Button>
                            <Button
                                color="linhButton"
                                variant="contained"
                                size="lg"
                                startIcon={<AccountCircleRoundedIcon />}
                                onClick={() => router.push("/staff")}
                            >
                                Staff
                            </Button>
                            <Button
                                color="linhButton"
                                variant="contained"
                                size="lg"
                                startIcon={<CallRoundedIcon />}
                                onClick={() => router.push("/contact")}
                            >
                                Contact
                            </Button>
                            <Button
                                color="linhButton"
                                variant="contained"
                                size="lg"
                                startIcon={<CalendarMonthRoundedIcon />}
                                onClick={() => router.push("/hours")}
                            >
                                Hours
                            </Button>
                        </Stack>
                    </Drawer>
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

export default Navbar;
