/** @jsx jsx */
import { jsx } from 'theme-ui'

import * as styles from '../styles/footer.module.scss'

const Footer = () => (
  <footer>
    <p className={styles.copyright}>
      © Joshua Hayes Davidson {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
