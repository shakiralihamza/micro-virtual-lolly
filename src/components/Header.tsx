import React, {FC} from 'react';
import {Box, Grid} from "@mui/material";
import ShinyText from "./ShinyText";
import {navigate} from "gatsby";

const Header: FC = ({}) => (
    <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
        <Grid item>
            <Box component={'span'} onClick={()=>navigate('/')} sx={{'&:hover':{cursor:'pointer'}}}>
                <ShinyText text={'virtual lolly'} size={'5em'} italic={true}/>
            </Box>
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
