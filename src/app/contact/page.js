import React from "react";
import PageLayout from "../(components)/pageLayout";

import {
    Box,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import PhonelinkRingRoundedIcon from "@mui/icons-material/PhonelinkRingRounded";

const Contact = () => {
    return (
        <>
            <PageLayout pageTitle="Linh - Contact">
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
                    <Card
                        variant="none"
                        sx={{
                            m: 1,
                            p: 1,
                            borderRadius: 2,
                            border: "4px solid",
                        }}
                    >
                        <CardContent sx={{ p: 5 }}>
                            <h1 fontFamily="-apple-system"> Contact us! </h1>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhonelinkRingRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="(617) 232-0800" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhonelinkRingRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="(617) 480-9370" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PhonelinkRingRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="(617) 448-9723" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </PageLayout>
        </>
    );
};

export default Contact;
