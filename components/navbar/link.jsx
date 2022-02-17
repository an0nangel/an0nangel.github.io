import styles from './link.module.css'
import NextLink from 'next/link'

export default function Link(props) {
  return(
    <>
      <div className={styles.container}>
        <NextLink href={props.href}>
          <a className={styles.link}>{props.title}</a>
        </NextLink>
      </div>
    </>
  )
}
