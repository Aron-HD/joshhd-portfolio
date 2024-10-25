import React from 'react'
import { Heading } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as styles from '../styles/about.module.scss'

const RootIndex = () => {
    const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulPerson(contentful_id: { eq: "6Fr0UwYXtgWexoF4sAVdJ5" }) {
        fullName
        company
        jobTitle
        linkedIn
        bio {
          childMarkdownRemark {
            html
          }
        }
        headshot {
          gatsbyImageData(
            formats: AUTO
            layout: CONSTRAINED
            placeholder: BLURRED
            quality: 80
            width: 200
            height: 200
          )
        }
      }
    }
  `)
    const bio = data.contentfulPerson.bio.childMarkdownRemark.html
    return (
        <Layout>
            <Seo title="About" />
            <section className={styles.about}>
                {data.contentfulPerson.headshot && (
                    <GatsbyImage
                        className={styles.headshot}
                        alt={data.contentfulPerson.fullName}
                        image={getImage(data.contentfulPerson.headshot)}
                    />
                )}
                <div className={styles.bio}>
                    <Heading as="h1">{data.contentfulPerson.fullName}</Heading>
                    {bio && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: bio,
                            }}
                        />
                    )}
                </div>
            </section>
        </Layout>
    )
}
export default RootIndex
