"use client";

import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Typography,
    Stack,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <Stack
                width="95vw"
                direction="row"
                justifyContent="flex-end"
            >
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        mx: 1,
                        p: 2,
                        justifyContent: "flex-start",
                    }}
                >
                    Linh Dry Cleaners
                </Typography>

                <ButtonGroup
                    variant=""
                    sx={{
                        mx: 1,
                        alignContent: "center",
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "block",
                            lg: "block",
                            xl: "block",
                        },
                    }}
                >
                    <Button color="inherit">
                        Home
                    </Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Hours</Button>
                </ButtonGroup>

                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                        mx: 1,
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "none",
                            lg: "none",
                            xl: "none",
                        },
                    }}
                >
                    <MenuRoundedIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Button
                            color="inherit"
                        >
                            Home
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button color="inherit">About</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button color="inherit">Pricing</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button color="inherit">Services</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button color="inherit">Contact</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button color="inherit">Hours</Button>
                    </MenuItem>
                </Menu>
            </Stack>
        </Box>
    );
};

export default Navbar;
