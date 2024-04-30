"use client";

import React from "react";
import PageLayout from "./(components)/pageLayout";

import {
    Stack,
    Box,
    Card,
    CardContent,
    Typography,
    Avatar,
    Button,
} from "@mui/material";

const Home = () => {
    return (
        <>
            <PageLayout>
                <Stack
                    spacing={4}
                    direction="column"
                    sx={{
                        width: "100%",
                        maxWidth: "600px", 
                        "@media (min-width: 600px)": {
                            width: "100%",
                            maxWidth: "2000px",
                        },
                    }}
                >
                    <Typography variant="h2" textAlign="center">
                        Family owned in Allston since 2010
                    </Typography>

                    <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ padding: 2, margin: 2 }}
                    >
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={5}
                        >
                            <Typography variant="h5">
                                {" "}
                                Why Choose Us?{" "}
                            </Typography>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 1</Typography>
                                </Box>

                                <Avatar sx={{ width: 216, height: 216 }} variant="rounded"/>
                            </Stack>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row-reverse",
                                    md: "row-reverse",
                                    lg: "row-reverse",
                                    xl: "row-reverse",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 2</Typography>
                                </Box>

                                <Avatar sx={{ width: 216, height: 216 }} variant="rounded"/>
                            </Stack>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 3</Typography>
                                </Box>

                                <Avatar sx={{ width: 216, height: 216 }} variant="rounded"/>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="center"
                        padding={2}
                        margin={2}
                    >
                        <Stack direction="column" alignItems="center">
                            <Typography variant="h5"> Our Services </Typography>

                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                                margin={4}
                                spacing={8}
                                alignItems="center"
                            >
                                <Stack direction="column" alignItems="center">
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Typography>Service 1</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center">
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Typography>Service 2</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center">
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Typography>Service 3</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center">
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Typography>Service 4</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center">
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                    <Typography>Service 5</Typography>
                                </Stack>
                            </Stack>

                            <Button variant="contained">
                                View All Services
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </PageLayout>
        </>
    );
};

export default Home;
