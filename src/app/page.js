"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PageLayout from "./(components)/pageLayout";

import {
    Stack,
    Box,
    Typography,
    Avatar,
    Button,
} from "@mui/material";

const Home = () => {
    const router = useRouter();

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

                    <Box display="flex" justifyContent="center" sx={{ p: 8 }}>
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
                                alignItems="center"
                                justifyContent="center"
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography
                                        display="block"
                                        sx={{ whiteSpace: "pre-line" }}
                                    >
                                        Celebrate 10+ years with us!
                                    </Typography>
                                    <Typography
                                        display="block"
                                        sx={{ whiteSpace: "pre-line" }}
                                    >
                                        {"\n"}
                                    </Typography>
                                    <Typography>
                                        We are a small family owned local
                                        business, proudly serving Allston,
                                        Massachusetts for over 10 years. With
                                        years of knowledge and experience in the
                                        industry, we aim for the best service we
                                        can!
                                    </Typography>
                                </Box>

                                <Avatar
                                    alt="Family Owned"
                                    src="https://res.cloudinary.com/dfquzd92w/image/upload/f_auto/c_limit/v1714675702/linh4_imd6lj.jpg"
                                    sx={{ width: 216, height: 216 }}
                                    variant="rounded"
                                />
                            </Stack>

                            <Stack
                                spacing={2}
                                alignItems="center"
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row-reverse",
                                    md: "row-reverse",
                                    lg: "row-reverse",
                                    xl: "row-reverse",
                                }}
                            >
                                <Box>
                                    <Typography>
                                        Quick Turn Around Time!
                                    </Typography>
                                    <Typography
                                        display="block"
                                        sx={{ whiteSpace: "pre-line" }}
                                    >
                                        {"\n"}
                                    </Typography>
                                    <Typography>
                                        Everything we do is in house! Dry
                                        cleaning, laundry services, and
                                        tailoring! With a quick turn around for
                                        dry cleaning and laundry, expected
                                        earliest pick up is 48 hours after drop
                                        off! Our goal is to provide reliable and
                                        efficient dry cleaning services for all
                                        your clothing needs!{" "}
                                    </Typography>
                                </Box>

                                <Avatar
                                    alt="Quick Turnaround"
                                    src="https://res.cloudinary.com/dfquzd92w/image/upload/f_auto/c_limit/v1714675510/linh2_muvnvg.jpg"
                                    sx={{ width: 216, height: 216 }}
                                    variant="rounded"
                                />
                            </Stack>

                            <Stack
                                spacing={2}
                                alignItems="center"
                                direction={{
                                    xs: "column-reverse",
                                    sm: "row",
                                    md: "row",
                                    lg: "row",
                                    xl: "row",
                                }}
                            >
                                <Box>
                                    <Typography>
                                        Personalized Requests
                                    </Typography>
                                    <Typography
                                        display="block"
                                        sx={{ whiteSpace: "pre-line" }}
                                    >
                                        {"\n"}
                                    </Typography>
                                    <Typography>
                                        We strive for customer excellence. From
                                        the time you drop off to when you pick
                                        up, we want to carry out any request to
                                        achieve satisfaction. Quality care is
                                        our priority and we are glad to offer
                                        it. Let’s have a chat!{" "}
                                    </Typography>
                                </Box>

                                <Avatar
                                    alt=""
                                    src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714676368/linh5_dwdsqe.jpg"
                                    sx={{ width: 216, height: 216 }}
                                    variant="rounded"
                                />
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
                                <Stack direction="column" alignItems="center" spacing={2}>
                                    <Avatar
                                        alt="Dry Cleaning"
                                        src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714678040/shirt-svgrepo-com_vvzlon.svg"
                                        variant="rounded"
                                        sx={{ width: 64, height: 64 }}
                                    />
                                    <Typography>Dry Cleaning</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center" spacing={2}>
                                    <Avatar
                                        alt="Wash & Fold"
                                        src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714678034/laundry-service-svgrepo-com_nnvv6u.svg"
                                        variant="rounded"
                                        sx={{ width: 64, height: 64 }}
                                    />
                                    <Typography>Wash & Fold</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center" spacing={2}>
                                    <Avatar
                                        alt="Alterations"
                                        src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714678033/sewing-machine-svgrepo-com_rru8a0.svg"
                                        variant="rounded"
                                        sx={{ width: 64, height: 64 }}
                                    />
                                    <Typography>Alterations</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center" spacing={2}>
                                    <Avatar
                                        alt="Shirt Laundry"
                                        src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714678033/shirt-and-tie-svgrepo-com_zifiqi.svg"
                                        variant="rounded"
                                        sx={{ width: 64, height: 64 }}
                                    />
                                    <Typography>Shirt Laundry</Typography>
                                </Stack>
                                <Stack direction="column" alignItems="center" spacing={2}>
                                    <Avatar
                                        alt="Wedding Gown"
                                        src="https://res.cloudinary.com/dfquzd92w/image/upload/v1714678033/dress-4-svgrepo-com_vvvrvg.svg"
                                        variant="rounded"
                                        sx={{ width: 64, height: 64 }}
                                    />
                                    <Typography>Wedding Gown</Typography>
                                </Stack>
                            </Stack>

                            <Button
                                sx={{ bgcolor: "#7E5A9B" }}
                                variant="contained"
                                onClick={() => router.push("/services")}
                            >
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
