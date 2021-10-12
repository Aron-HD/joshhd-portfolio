import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/navigation.module.scss'

const Navigation = () => (
  <nav role="navigation" className={styles.navigation} aria-label="Main">
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/projects/" activeClassName="active">
          Projects
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
