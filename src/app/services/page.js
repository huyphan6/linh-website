"use client";

import React from "react";
import PageLayout from "../(components)/pageLayout";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    Tab,
    Tabs,
    Box,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {children}
                </Box>
            )}
        </div>
    );
};

const Services = () => {
    const theme = createTheme({
        pallete: {
            customTab: {
                main: "#7E5A9B",
            },
        },
    });
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <PageLayout pageTitle="Linh - Services">
                    <Box
                        sx={{
                            flexGrow: 1,
                            width: "100%",
                            maxWidth: "700px",
                            "@media (min-width: 700px)": {
                                width: "100%",
                                maxWidth: "700px",
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            bgcolor: "background.paper",
                            borderRadius: 3,
                            border: "5px solid",
                        }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            textColor="secondary"
                            indicatorColor="secondary"
                            value={value}
                            onChange={handleChange}
                            sx={{
                                p: 1,
                                m: 1,
                                borderRight: 2,
                                borderColor: "divider",
                            }}
                        >
                            <Tab
                                label="Dry Cleaning"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Wash & Fold"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Tops"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Bottoms"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Dresses"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Coats"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="Suits"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                            <Tab
                                label="MISC"
                                sx={{ textTransform: "none", fontSize: 18 }}
                            />
                        </Tabs>

                        <TabPanel value={value} index={0}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                sx={{ m: 2 }}
                            >
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Dress shirts: $7.00"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Blouses: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Sweater: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Trousers: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Blazers: $15.00"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="$1.75/lb"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Dress Shirts: $3.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Boxed Shirts: $5.00"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Blouses: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Sweaters: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Polos: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Alterations: $15-$25"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Trousers: $7.50"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Skirts: $10"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Long Skirts: $13"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Alterations: $15"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Short: $15"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Long: $20"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Wedding: $100-$150"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Alterations: $20-$80"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Short: $30"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Long: $40"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Lab Coats: $15.00"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary=" Luxury/Designer: $60-$70"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Scarves: $10-$20"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Alterations: $25-$40"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="2 piece suit: $20"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Blazers: $15"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Pants: $7.25"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Vests: $10"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Ties: $5"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Alterations: $30-$100"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            <Stack direction="column" justifyContent="center">
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Comforters: $40-$60"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Boots: $60"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CheckroomRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Leather Jackets: $50-$100"
                                            primaryTypographyProps={{
                                                fontSize: "20px",
                                            }}
                                        />
                                    </ListItem>
                                </List>
                            </Stack>
                        </TabPanel>
                    </Box>
                </PageLayout>
            </ThemeProvider>
        </>
    );
};

export default Services;
