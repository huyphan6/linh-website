import React from "react";
import PageLayout from "../(components)/pageLayout";

import {
    Stack,
    Avatar,
    Typography,
    Card,
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
                        <Card
                            variant="outlined"
                            sx={{
                                width: "auto",
                                borderRadius: 2,
                                border: "4px solid",
                            }}
                        >
                            <CardContent sx={{ p: 5 }}>
                                <Avatar
                                    alt="Hung Phan"
                                    src="https://res.cloudinary.com/dfquzd92w/image/upload/f_auto/c_limit/v1714586312/HQP_1720_mfbxla.jpg"
                                    variant="rounded"
                                    sx={{
                                        width: {
                                            xs: 200,
                                            sm: 300,
                                            md: 350,
                                            lg: 450,
                                        },
                                        height: {
                                            xs: 200,
                                            sm: 300,
                                            md: 350,
                                            lg: 450,
                                        },
                                        p: 2,
                                        m: 2,
                                    }}
                                />
                                <Typography variant="h4" sx={{ pt: 4 }}>
                                    Hung Phan
                                </Typography>
                                <Typography variant="subtitle1">
                                    Owner
                                </Typography>
                                <Typography variant="subtitle2">
                                    (617) 480-9370
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
                            variant="outlined"
                            sx={{
                                width: "auto",
                                borderRadius: 2,
                                border: "4px solid",
                            }}
                        >
                            <CardContent sx={{ p: 5 }}>
                                <Avatar
                                    alt="Nhat Trinh"
                                    src="https://res.cloudinary.com/dfquzd92w/image/upload/f_auto/c_limit/v1714586312/HQP_1775_t9r0pd.jpg"
                                    variant="rounded"
                                    sx={{
                                        width: {
                                            xs: 200,
                                            sm: 300,
                                            md: 350,
                                            lg: 450,
                                        },
                                        height: {
                                            xs: 200,
                                            sm: 300,
                                            md: 350,
                                            lg: 450,
                                        },
                                        p: 2,
                                        m: 2,
                                    }}
                                />
                                <Typography variant="h4" sx={{ pt: 4 }}>
                                    Nhat Trinh
                                </Typography>
                                <Typography variant="subtitle1">
                                    Lead Tailor
                                </Typography>
                                <Typography variant="subtitle2">
                                    (617) 448-9723
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
