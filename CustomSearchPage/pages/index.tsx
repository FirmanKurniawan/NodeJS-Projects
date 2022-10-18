import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from "./components/landingPage";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Yuuriya Search!</title>
                <meta name="description" content="Privacy respecting search engine! powered by SearXNG project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LandingPage />

        </div>
    )
}

export default Home
