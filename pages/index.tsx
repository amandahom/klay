import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [gameTime, setGameTime] = useState(false);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const target = new Date("01/03/2021 17:29:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      // console.log("day", day);
      setDay(day);

      const hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      // console.log("hour", hour);
      setHour(hour);

      const min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      // console.log("min", min);
      setMinute(min);

      const sec = Math.floor((difference % (1000 * 60)) / 1000);
      // console.log("sec", sec);
      setSecond(sec);

      if (day <= 0 && hour <= 0 && min <= 0 && sec <= 0) {
        setGameTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Klay Thompson Countdown</title>
        <meta name="description" content="Klay Thompson Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Klay Thompson Countdown</h1>

        <p className={styles.description}>
          Because I can't wait and I'm bored.
        </p>

        {gameTime ? (
          <>
            <h1>Game Time.</h1>
            <video autoPlay loop muted>
              <source src="/party.mp4" />
            </video>
          </>
        ) : (
          <>
            <div className="timer-wrapper">
              <div className="timer-inner">
                <div className="timer-segment">
                  <span className="time">{day}</span>
                  <span className="label">Days</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{hour}</span>
                  <span className="label">Hours</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{minute}</span>
                  <span className="label">Minutes</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                  <span className="time">{second}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>
            <Image
              alt="background image"
              src="/image.webp"
              layout="fill"
              quality={100}
            />
          </>
        )}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
