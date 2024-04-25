import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Box p="5" bgColor="#dad7cd">
                <Typography fontSize="sm" textAlign="center">
                    © {currentYear} Linh Dry Cleaners | All Rights Reserved
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
