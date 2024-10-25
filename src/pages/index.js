import React from 'react'
import { Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Projects from '../components/Projects'

import * as styles from '../styles/index.module.scss'

const RootIndex = () => {
    const data = useStaticQuery(graphql`
    query ForewordQuery {
        contentfulForeword(contentful_id: {eq: "1rGDT0Tu3V9MnuskUVFmam"}) {
            text {
                text
                childrenMarkdownRemark {
                    rawMarkdownBody
                }
            }
        }
    }
    `)
    const foreword = data.contentfulForeword.text.text
    const paras = foreword.split('\n')

    const forewordParagraphs = paras.map((item, index) => (
        <Text key={index} as="p" variant="large">
            {item}
        </Text>
    ))
    return (
        <Layout>
            <Seo title="Home" />
            <section className={styles.foreword}>
                {forewordParagraphs}
            </section>
            <Projects />
        </Layout>
    )
}

export default RootIndex

