import React from "react";
import PageLayout from "../(components)/pageLayout";

import {
    Stack,
    Avatar,
    Typography,
    Card,
    CardActions,
    CardContent,
    Box,
} from "@mui/material";

const Staff = () => {
    return (
        <>
            <PageLayout>
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
                        direction={{
                            xs: "column",
                            sm: "column",
                            md: "row",
                            lg: "row",
                            xl: "row",
                        }}
                        alignItems="center"
                        justifyContent="center"
                        spacing={5}
                        sx={{
                            p: 5,
                            m: 5,
                            width: "90%",
                        }}
                    >
                        <Card variant="outlined" sx={{ width: "auto" }}>
                            <CardContent sx={{ p: 5 }}>
                                <Avatar
                                    alt=""
                                    src=""
                                    sx={{
                                        width: {
                                            xs: 150,
                                            sm: 200,
                                            md: 300,
                                            lg: 400,
                                        },
                                        height: {
                                            xs: 150,
                                            sm: 200,
                                            md: 300,
                                            lg: 400,
                                        },
                                        p: 3,
                                        m: 3,
                                    }}
                                />
                                <Typography variant="h4" sx={{ pt: 4 }}>
                                    Hung Phan
                                </Typography>
                                <Typography variant="subtitle1">
                                    Owner
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card variant="outlined" sx={{ width: "auto" }}>
                            <CardContent sx={{ p: 5 }}>
                                <Avatar
                                    alt=""
                                    src=""
                                    sx={{
                                        width: {
                                            xs: 150,
                                            sm: 200,
                                            md: 300,
                                            lg: 400,
                                        },
                                        height: {
                                            xs: 150,
                                            sm: 200,
                                            md: 300,
                                            lg: 400,
                                        },
                                        p: 3,
                                        m: 3,
                                    }}
                                />
                                <Typography variant="h4" sx={{ pt: 4 }}>
                                    Nhat Trinh
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lead Tailor{" "}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
            </PageLayout>
        </>
    );
};

export default Staff;
