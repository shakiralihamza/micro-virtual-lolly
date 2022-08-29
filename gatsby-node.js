const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
    const {createPage} = actions

    const result = await graphql(
            `
            {
                lolly {
                    lollies {
                        lollyID
                        colorBottom
                        colorMiddle
                        colorTop
                        from
                        message
                        to
                    }
                }
            }
        `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create pages for each markdown file.
    const lollyTemplate = path.resolve(`src/templates/ViewLollyPage.tsx`)
    result.data.lolly.lollies.forEach(lolly => {
        createPage({
            path: `/lolly/${lolly.lollyID}`,
            component: lollyTemplate,
            context: {
                lollyID: lolly.lollyID,
                colorTop: lolly.colorTop,
                colorMiddle: lolly.colorMiddle,
                colorBottom: lolly.colorBottom,
                from: lolly.from,
                message: lolly.message,
                to: lolly.to,
            },
        })
    });
}
