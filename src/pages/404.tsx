import * as React from "react"
import {useEffect} from "react";
import axios from "axios";
import ViewLollyPage from "../templates/ViewLollyPage";
import Melted from "../components/Melted";
import Page404 from "./Page404";
import {Box} from "@mui/material";
import ShinyText from "../components/ShinyText";

const NotFoundPage = () => {
    const isBrowser = () => typeof window !== "undefined"
    if (!isBrowser()) {
        return null
    }
    const path = window.location.pathname;

    //if path does not include /lolly then return typical 404
    if (!path?.includes('/lolly/') || !path?.includes('/lolly')) {
        return <Page404/>
    }

    //otherwise, check if lolly exists
    const [lolly, setLolly] = React.useState(undefined);
    const [found, setFound] = React.useState(true);
    const url = window.location.href;
    const lollyID = url.split("/").pop();

    useEffect(() => {
        axios.post(`/.netlify/functions/showLolly/?lollyID=${lollyID}`)
            .then(res => setLolly(res.data))
            .catch(() => setFound(false))
    }, [])

    //if lolly exists, show it
    if (lolly !== undefined) {
        return <ViewLollyPage pageContext={lolly}/>
    }
    //if lolly does not exist, show Melted Lolly Page
    if (!found) {
        return <Melted/>
    }

    return (
        <Box sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ShinyText text={'Unwrapping...'} size={'12'} italic={true}/>
        </Box>
    )
}

export default NotFoundPage
