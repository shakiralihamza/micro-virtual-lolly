import React from 'react';
import Header from "./Header";
import {Box, Container, Grid, Typography} from "@mui/material";
import {HeadFC, navigate} from "gatsby";
import Button from "./Button";
import MeltedLolly from "./MeltedLolly";

function Melted() {
    return (
        <Container maxWidth={'md'}>
            <Header/>

            <Typography variant={'h4'} sx={{textAlign: 'center', my: 7}}>Oops! This lolly has melted.</Typography>

            <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
                <Grid item>
                    <MeltedLolly/>
                </Grid>
                <Grid item sx={{mt: 8, mb: 10}}>
                    <Box component={'span'} onClick={() => navigate('/create')}>
                        <Button text={'Make a new lolly to send to a friend'}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Melted;

export const Head: HeadFC = () => <title>Lolly melted</title>
