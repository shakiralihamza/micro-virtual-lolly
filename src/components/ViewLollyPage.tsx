import React from 'react';
import Header from "./Header";
import {Grid} from "@mui/material";
import Lolly from "./Lolly";
import ViewLollyDetails from "./ViewLollyDetails";

const ViewLollyPage = ({}) => (
    <>
        <Header/>
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{my: 5}} spacing={1}>
            <Grid item xs={2}>
                <Lolly colorTop={'pink'} colorMiddle={'brown'} colorBottom={'blue'}/>
            </Grid>
            <Grid item xs={5}>
                <ViewLollyDetails lollyURL={'url here'} to={'this guy'} from={'this guy'} message={'this message'}/>
            </Grid>
        </Grid>

    </>
);

export default ViewLollyPage;
