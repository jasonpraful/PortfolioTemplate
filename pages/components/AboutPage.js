import Image from 'next/image'
import styles from "../../styles/About.module.scss"

export default function AboutPage() {
    return <section className={styles.about}>
        <div className={styles.heading}>
            About
        </div>
        <div className={styles.details}>
            <p>
                <h2>Namaste !! 🐣</h2>
                I am<span className={styles.name}>{' '}Aditya Manikanth Rao</span><br/>
                I am from <b>Warangal</b>.<br/>
                I am a <b>Computer Science Undergraduate</b>.<br/>
                A fan of The Game Of Thrones, Big Bang Theory and How I Met your Mother.<br/>
                I love listening to Music and I'm a big fan of Arijit Singh.
            </p>
            <img
                className={styles.image}
                src="/mypic.jpeg"
                alt="Aditya Manikanth Rao"
            />
        </div>
    </section>
}