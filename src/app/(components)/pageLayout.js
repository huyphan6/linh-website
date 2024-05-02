"use client";

import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PageLayout = ({ children }) => {
    const theme = createTheme({
        typography: {
            fontFamily: "-apple-system",
            h2: {
                fontWeight: 500,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                gap={4}
                p={2}
                sx={{ backgroundcolor: "#dcdcdd", m: -1 }}
            >
                <Navbar />

                <Box
                    flexGrow={1}
                    sx={{
                        m: 4,
                        width: "100%",
                        maxWidth: "600px",
                        '@media (min-width: 600px)': {
                            width: "100%",
                            maxWidth: "1000px",
                        },
                    }}
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                    >
                        {children}
                    </Stack>
                </Box>

                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default PageLayout;
