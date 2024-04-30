"use client";

import React from "react";
import PageLayout from "../(components)/pageLayout";

import { Tab, Tabs, Box, Typography } from "@mui/material";

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const Services = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <PageLayout>
                <h1>Services</h1>

                <Box
                    sx={{
                        flexGrow: 1,
                        height: "90%",
                        maxHeight: "350px",
                        "@media (min-Height: 350px)": {
                            height: "90%",
                            maxHeight: "350px",
                        },
                        width: "90%",
                        maxWidth: "600px",
                        "@media (min-width: 600px)": {
                            width: "90%",
                            maxWidth: "2000px",
                        },
                        display: "flex",
                        bgcolor: "background.paper",
                        borderRadius: 1,
                        border: "1px solid"
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        sx={{py:2, my:2, borderRight: 1, borderColor: "divider" }}
                    >
                        <Tab label="tab1" />
                        <Tab label="tab2" />
                        <Tab label="tab3" />
                        <Tab label="tab4" />
                        <Tab label="tab5" />
                        <Tab label="tab6" />
                        <Tab label="tab7" />
                        <Tab label="tab8" />
                    </Tabs>

                    <TabPanel value={value} index={0}> 
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        Item Eight
                    </TabPanel>
                </Box>
            </PageLayout>
        </>
    );
};

export default Services;
