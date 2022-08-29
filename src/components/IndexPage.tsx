import React, {FC} from 'react';
import {Box, Container, Grid, Stack} from "@mui/material";
import Lolly from "./Lolly";
import Button from "./Button";
import Header from "./Header";
import {navigate} from "gatsby";


const IndexPage: FC = ({}) => (
    <Container maxWidth={'md'}>
        <Header/>
        <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
            <Grid item sx={{mt: 5}}>
                <Stack direction={'row'} spacing={2}>
                    <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
                    <Lolly colorTop={'yellow'} colorMiddle={'green'} colorBottom={'red'}/>
                    <Lolly colorTop={'orange'} colorMiddle={'purple'} colorBottom={'cyan'}/>
                    <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
                    <Lolly colorTop={'yellow'} colorMiddle={'green'} colorBottom={'red'}/>
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

export default IndexPage;
