import React, {FC} from 'react';
import {Grid} from "@mui/material";
import ShinyText from "./ShinyText";

const Header: FC = ({}) => (
    <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
        <Grid item>
            <ShinyText text={'virtual lolly'} size={'5em'} italic={true}/>
        </Grid>
        <Grid item>
            <ShinyText text={`because we all know someone`} size={'1em'} italic={true}/>
        </Grid>
        <Grid item>
            <ShinyText text={`who deserves some sugar.`} size={'1em'} italic={true}/>
        </Grid>
    </Grid>
);

export default Header;
