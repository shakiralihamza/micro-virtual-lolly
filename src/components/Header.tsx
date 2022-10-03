import React, {FC} from 'react';
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";
import ShinyText from "./ShinyText";
import {navigate} from "gatsby-link";

const Header: FC = ({}) => {
    const theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    const isSmallerThanSM = useMediaQuery(theme.breakpoints.down('sm'));

    const headingSize = isSmallerThanSM ? '3em' : isSmallerThanMD ? '4em' : '5em';
    return (
        <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'}>
            <Grid item>
                <Box component={'span'} onClick={() => navigate('/')} sx={{'&:hover': {cursor: 'pointer'}}}>
                    <ShinyText text={'virtual lolly'} size={headingSize} italic={true}/>
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
}

export default Header;
