import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {
    achievementsBody, backgroundBody,
    educationBody, experienceBody
} from "../text/AboutBody";

export default function AboutCard() {



    return(
        <Paper>
            <Stack m={2}>
                <Stack justifyContent= "space-between" direction="row">
                    <Stack>
                        <Typography variant="h6">Background</Typography>
                        <Typography variant="body">{backgroundBody}</Typography>
                        <Typography variant="h6">Education</Typography>
                        <Typography variant="body">{educationBody}</Typography>
                        <Typography variant="h6">Achievements</Typography>
                        <Typography variant="body">{achievementsBody}</Typography> 
                        <Typography variant="h6">Experience</Typography>           
                        <Typography variant="body">{experienceBody}</Typography>
                    </Stack>
                    <Box
                        component="img"
                        alt="Personal Image"
                        src="https://media.licdn.com/dms/image/D4E03AQE48OH5BOKVEw/profile-displayphoto-shrink_400_400/0/1667768771423?e=1681344000&v=beta&t=y0VT40Im1r54cBBZ3JewLdD9-4fmClSSo1lwpABJsaw"

                        sx={{
                            border: 2,
                            borderRadius: 2,
                            borderBlockColor: "inherit",
                        }}
                    />
                </Stack>

            </Stack>
        </Paper>
    )
}