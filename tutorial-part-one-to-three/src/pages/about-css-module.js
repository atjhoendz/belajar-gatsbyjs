import React from 'react'
import Container from '../components/container'
import styles from './about-css-module.module.css'

const User = props => (
    <div className={styles.user}>
        <img src="props.avatar" className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function AboutModule() {
    return (
        <Container>
            <h1>About Css Module</h1>
            <p>Mantap ini module css container brad</p>
            <User
                username="Achun"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="Mantap gan ini user pertama"
            />
            <User
                username="Armando"
                avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                excerpt="Lesgo ini user kedua brader mantappp luarbiasaa edun ngenah kieu react jow mantaps"
            />
        </Container>
    )
}