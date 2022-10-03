import React, {FC} from 'react';
import Header from "../components/Header";
import {Grid} from "@mui/material";
import Lolly from "../components/Lolly";
import ViewLollyDetails from "../components/ViewLollyDetails";
import {HeadFC} from "gatsby";

interface ViewLollyPageProps {
    pageContext: {
        lollyID: string;
        to: string;
        from: string;
        message: string;
        colorTop: string;
        colorMiddle: string;
        colorBottom: string;
    }
}

const ViewLollyPage: FC<ViewLollyPageProps> = ({pageContext}) => {
    const {to, from, message, colorTop, colorMiddle, colorBottom, lollyID} = pageContext;
    return (
        <>
            <Header/>
            <Grid container justifyContent={'center'} alignItems={'center'} sx={{my: 5}} spacing={1}>
                <Grid item xs={'auto'} sm={3} md={2}>
                    <Lolly colorTop={colorTop} colorMiddle={colorMiddle} colorBottom={colorBottom}/>
                </Grid>
                <Grid item xs={11} sm={8} md={6} mt={{xs:2, sm:0}}>
                    <ViewLollyDetails lollyURL={lollyID} to={to} from={from} message={message}/>
                </Grid>
            </Grid>

        </>
    );
}

export default ViewLollyPage;

export const Head: HeadFC = () => <title>Virtual Lolly For You!</title>
