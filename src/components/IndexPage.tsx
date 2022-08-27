import React, {FC} from 'react';
import {Container, Grid, Stack} from "@mui/material";
import Lolly from "./Lolly";
import Button from "./Button";
import Header from "./Header";


const IndexPage: FC = ({}) => (
    <Container maxWidth={'md'}>
        <Header/>
        <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
            <Grid item sx={{mt:5}}>
                <Stack direction={'row'} spacing={2}>
                    <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
                    <Lolly colorTop={'yellow'} colorMiddle={'green'} colorBottom={'red'}/>
                    <Lolly colorTop={'orange'} colorMiddle={'purple'} colorBottom={'cyan'}/>
                    <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
                    <Lolly colorTop={'yellow'} colorMiddle={'green'} colorBottom={'red'}/>
                </Stack>
            </Grid>
            <Grid item sx={{mt:5, mb:10}}>
                <Button text={'Make a new lolly to send to a friend'} onClick={() => {}}/>
            </Grid>
        </Grid>

    </Container>
);

export default IndexPage;
