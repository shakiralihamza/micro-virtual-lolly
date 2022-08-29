import * as React from "react"
import {useEffect} from "react";
import axios from "axios";
import ViewLollyPage from "../templates/ViewLollyPage";
import Melted from "../components/Melted";
import Page404 from "./Page404";

const NotFoundPage = () => {
    const isBrowser = () => typeof window !== "undefined"
    if (!isBrowser()) {
        return null
    }
    const path = window.location.pathname;

    //if path does not include /lolly then return general 404
    if (!path?.includes('/lolly/') || !path?.includes('/lolly')) {
        return <Page404/>
    }

    //otherwise, check if lolly exists
    const [lolly, setLolly] = React.useState(undefined);
    const [found, setFound] = React.useState(true);
    const url = window.location.href;
    const lollyID = url.split("/").pop();

    useEffect(() => {
        axios.post(`/getLolly/?lollyID=${lollyID}`)
            .then(res => setLolly(res.data))
            .catch(() => setFound(false))
    }, [])

    //if lolly exists, return ViewLollyPage
    if (lolly !== undefined) {
        return <ViewLollyPage pageContext={lolly}/>
    }
    //if lolly does not exist, return Melted
    if (!found) {
        return <Melted/>
    }
}

export default NotFoundPage
