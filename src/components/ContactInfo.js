import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const StyledUl = styled.ul`
    list-style: none;
    font-size: x-small;
    padding-inline-start: 0;
    li {
        a {
            text-decoration: underline;
        }
    }
`

const ContactInfo = () => {
    const { contentfulPerson } = useStaticQuery(graphql`
        query joshQuery {
            contentfulPerson(contentful_id: {eq: "6Fr0UwYXtgWexoF4sAVdJ5"}) {
                jobTitle
                fullName
                linkedIn
            }
        }
    `)
    return (
        <StyledUl>
            <li>
                <a
                    target="_blank"
                    href={contentfulPerson.linkedIn}
                    rel="noreferrer noopener"
                >
                    {contentfulPerson.fullName}
                </a>
            </li>
            <li>{contentfulPerson.jobTitle}</li>
        </StyledUl>
    )
}

export default ContactInfo
