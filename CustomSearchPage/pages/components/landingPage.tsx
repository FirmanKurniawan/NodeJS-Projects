import { NextPage } from "next";
import styles from "../../styles/Startup.module.css"
import Image from 'next/image'
import banner from '../../assets/header.png'



const LandingPage: NextPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.ascii}>
                    <Image className={styles.banner}
                        src={banner}
                    />
                </div>
            </div>
            <div className={styles.searchBox}>
                <form action="https://ayasearx.herokuapp.com/search" method="GET">
                    <input autoFocus className={styles.searchBar} type="search" name="q" id="searchBar" placeholder="ネット上で調べみよう！" />
                </form>
            </div>
            <div className={styles.info}>
                <li><a href="https://blog.yuuriya.tech">blog</a></li>
                <li><a href="https://linkedin.com/in/RyaWcksn">linkedin</a></li>
                <li><a href="https://github.com/RyaWcksn">github</a></li>
            </div>
        </div>
    )
}

export default LandingPage;
