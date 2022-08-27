import * as React from "react"
import type { HeadFC } from "gatsby"
import CreatePage from "../components/CreatePage";

const Index = () => {
    return (
        <CreatePage/>
    )
}

export default Index

export const Head: HeadFC = () => <title>Create Lolly</title>
