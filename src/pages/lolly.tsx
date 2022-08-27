import * as React from "react"
import type { HeadFC } from "gatsby"
import ViewLollyPage from "../components/ViewLollyPage";

const ViewLolly = () => {
    return (
        <ViewLollyPage/>
    )
}

export default ViewLolly

export const Head: HeadFC = () => <title>Virtual Lolly</title>
