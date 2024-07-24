import React from "react";
import PageLayout from "../(components)/pageLayout";

import { Box, Stack, Typography } from "@mui/material";

const Hours = () => {
    return (
        <>
            <PageLayout pageTitle="Linh - Hours">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "650px",
                        "@media (min-width: 650px)": {
                            width: "100%",
                            maxWidth: "2000px",
                        },
                    }}
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            border: "4px solid",
                            p: 5,
                            m: 2,
                        }}
                    >
                        <Typography variant="h4" textAlign="center">
                            Hours of Operation
                        </Typography>

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                                xl: "row",
                            }}
                            spacing={4}
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                p: 8,
                            }}
                        >
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">S</Typography>
                                <Typography>Closed</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">M</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">T</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">W</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">TH</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">F</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                            <Stack
                                direction={{
                                    xs: "row",
                                    sm: "row",
                                    md: "column",
                                    lg: "column",
                                    xl: "column",
                                }}
                                alignItems="center"
                                spacing={4}
                            >
                                <Typography variant="h5">S</Typography>
                                <Typography>8-4</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </PageLayout>
        </>
    );
};

export default Hours;
