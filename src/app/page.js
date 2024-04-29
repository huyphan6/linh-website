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
                <Stack spacing={4} direction="column">
                    {/* <Box display="flex" width="95vw" justifyContent="center" border="2px gray dashed">
                        <Card>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    </Box> */}

                    <Typography variant="h2">
                        Family owned in Allston since 2010
                    </Typography>

                    <Box
                        display="flex"
                        border="1px gray dashed"
                        justifyContent="center"
                        padding={2}
                        margin={2}
                    >
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={4}
                        >
                            <Typography variant="h5">
                                {" "}
                                Why Choose Us?{" "}
                            </Typography>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "column-reverse",
                                    md: "column-reverse",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 1</Typography>
                                </Box>
                                <image>
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                </image>
                            </Stack>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "column-reverse",
                                    md: "column-reverse",
                                    lg: "row-reverse",
                                    xl: "row-reverse",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 2</Typography>
                                </Box>
                                <image>
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                </image>
                            </Stack>

                            <Stack
                                spacing={2}
                                direction={{
                                    xs: "column-reverse",
                                    sm: "column-reverse",
                                    md: "column-reverse",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography>Reason 3</Typography>
                                </Box>
                                <image>
                                    <Avatar sx={{ width: 56, height: 56 }} />
                                </image>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box
                        display="flex"
                        border="1px gray dashed"
                        justifyContent="center"
                        padding={2}
                        margin={2}
                    >
                        <Stack direction="column" alignItems="center">
                            <Typography variant="h5"> Our Services </Typography>

                            <Stack
                                direction="row"
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
