import { Box, ListItem, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {
    achievementsBody, backgroundBody,
    educationBody, experienceBody
} from "../text/AboutBody";

export default function AboutCard() {

    const educationList = educationBody.map((educationEntry, index) => 
    <ListItem
        key={index}
        component="typography"
        sx={{
            display: "list-item",
            mx: 5
        }}
    >
        <Typography variant="body1">
            {educationEntry}
        </Typography>
    </ListItem>
    )

    return(
        <Paper sx={{px:5, py:2}} elevation={2}>
            <Stack
                spacing={4}
                alignItems="center"
                justifyContent= "center" 
                direction={{
                    lg:"row",
                    sm:"column-reverse",
                    xs:"column-reverse"}}>
                <Stack>
                    <Typography variant="h6" gutterBottom>Background</Typography>
                    <Typography variant="body1" align="justify">{backgroundBody}</Typography>
                    <Typography variant="h6">Education</Typography>
                    <Stack>{educationList}</Stack>
                    <Typography variant="h6" gutterBottom>Achievements</Typography>
                    <Typography variant="body1">{achievementsBody}</Typography> 
                    <Typography variant="h6" gutterBottom>Experience</Typography>           
                    <Typography variant="body1">{experienceBody}</Typography>
                </Stack>
                <Box
                    display={{sm: "block", xs: "none"}}
                    component="img"
                    alt="Personal Image"
                    src="https://media.licdn.com/dms/image/D4E03AQE48OH5BOKVEw/profile-displayphoto-shrink_400_400/0/1667768771423?e=1681344000&v=beta&t=y0VT40Im1r54cBBZ3JewLdD9-4fmClSSo1lwpABJsaw"
                    sx={{
                        border: 2,
                        borderRadius: 2,
                        borderColor: "inherit",
                        maxWidth: 400,
                        margin: "auto",
                    }}
                />
            </Stack>
        </Paper>
    )
}