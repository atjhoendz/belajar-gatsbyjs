import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function About({ data }) {
    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus libero porro commodi debitis fuga, distinctio error, perferendis a explicabo veniam facere architecto eaque. Numquam odit explicabo quisquam quos atque.
            </p>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`