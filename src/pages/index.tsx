import * as React from "react"
import type {HeadFC} from "gatsby"
import IndexPage from "../components/IndexPage";

const Index = () => {
    return (
        <IndexPage/>
    )
}

export default Index

export const Head: HeadFC = () => <title>Virtual Lolly</title>
