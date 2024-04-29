import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const PageLayout = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            gap={4}
            p={2}
            sx={{ bgcolor: "#dcdcdd", m: -1 }}
        >
            <Navbar />

            <Box flexGrow={1} width sx={{ m: 4 }}>
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
    );
};

export default PageLayout;
