import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [gameTime, setGameTime] = useState(false);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const targetDate = new Date("01/09/2022 17:30:00");

    const interval = setInterval(() => {
      const currentDateTime = new Date();
      const dateTimeDifference =
        targetDate.getTime() - currentDateTime.getTime();

      const day = Math.floor(dateTimeDifference / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (dateTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor(
        (dateTimeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const sec = Math.floor((dateTimeDifference % (1000 * 60)) / 1000);

      setDay(day);
      setHour(hour);
      setMinute(min);
      setSecond(sec);

      if (day <= 0 && hour <= 0 && min <= 0 && sec <= 0) {
        setGameTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Klay Thompson Countdown</title>
        <meta name="description" content="Klay Thompson Countdown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="mx-auto px-4 sm:px-6 bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
        id="home-image"
      >
        <style jsx>{`
          #home-image {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(https://res.cloudinary.com/cub95/image/upload/v1641342177/abhishek-chandra-kXJksx1kdJ0-unsplash_1_i8wcc7.jpg);
            opacity: 1;
          }
        `}</style>
        <div className="pt-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Klay Thompson </span>
              <span className="block text-white xl:inline">Countdown</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg">
              Because I can't wait and I'm bored.
            </p>
          </div>

          {gameTime ? (
            <>
              <h1>Game Time.</h1>
              {/* <video autoPlay loop muted> */}
              {/* <source src="/party.mp4" /> */}
              {/* </video> */}
            </>
          ) : (
            <>
              <div className="text-center text-white pt-48">
                <div className="inline-block p-10">
                  <p className="text-7xl inline-block">{day}</p>
                  <p className="text-base">Days</p>
                </div>
                <span className="text-7xl">:</span>
                <div className="inline-block p-10">
                  <p className="text-7xl inline-block">{hour}</p>
                  <p className="text-base">Hours</p>
                </div>
                <span className="text-7xl">:</span>
                <div className="inline-block p-10">
                  <p className="text-7xl inline-block">{minute}</p>
                  <p className="text-base">Minutes</p>
                </div>
                <span className="text-7xl">:</span>
                <div className="inline-block p-10">
                  <p className="text-7xl inline-block">{second}</p>
                  <p className="text-base">Seconds</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
};

export default Home;
