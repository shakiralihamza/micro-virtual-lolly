import React, {FC} from 'react';
import {Box, Container, Grid, Stack, useMediaQuery, useTheme} from "@mui/material";
import Lolly from "./Lolly";
import Button from "./Button";
import Header from "./Header";
import {navigate} from "gatsby-link";

const colorOptions = [
    {colorTop: 'pink', colorMiddle: 'brown', colorBottom: 'blue'},
    {colorTop: 'yellow', colorMiddle: 'green', colorBottom: 'red'},
    {colorTop: 'orange', colorMiddle: 'purple', colorBottom: 'cyan'},
    {colorTop: 'brown', colorMiddle: 'cyan', colorBottom: 'pink'},
    {colorTop: 'green', colorMiddle: 'blue', colorBottom: 'yellow'},
]

const IndexPage: FC = () => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallerThanSM = useMediaQuery(theme.breakpoints.down('sm'));

    const noOfLollies = isSmallerThanSM ? 2 : isSmallerThanMD ? 3 : 5;

    return (
        <Container maxWidth={'md'}>
            <Header/>
            <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
                <Grid item sx={{mt: 5}}>
                    <Stack direction={'row'} spacing={2}>
                        {
                            colorOptions.slice(0, noOfLollies).map((colorOption, index) => (
                                <Box key={index} onClick={() => navigate(`/lolly/${index}`)}>
                                    <Lolly colorTop={colorOption.colorTop} colorMiddle={colorOption.colorMiddle}
                                           colorBottom={colorOption.colorBottom}/>
                                </Box>
                            ))
                        }
                    </Stack>
                </Grid>
                <Grid item sx={{mt: 5, mb: 10}}>
                    <Box component={'span'} onClick={() => navigate('/create')}>
                        <Button text={'Make a new lolly to send to a friend'}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default IndexPage;
