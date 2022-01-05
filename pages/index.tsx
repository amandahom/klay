import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Home: NextPage = () => {
  const [gameTime, setGameTime] = useState(false);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const { width, height } = useWindowSize();

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
            background-image: url(https://res.cloudinary.com/cub95/image/upload/v1641354960/270333234_5280809635317491_6510822591476827720_n_1_yb0oxw.jpg);
            opacity: 1;
          }
          @media only screen and (max-width: 600px) {
            #home-image {
              background-image: url(https://res.cloudinary.com/cub95/image/upload/v1641342177/abhishek-chandra-kXJksx1kdJ0-unsplash_1_i8wcc7.jpg);
            }
          }
        `}</style>
        <div className="pt-36 lg:pr-96 lg:mr-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-blue-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Klay Thompson </span>
              <span className="block text-yellow-500  xl:inline">
                Countdown
              </span>
            </h1>
          </div>

          {gameTime ? (
            <>
              <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
                id="modal-id"
              >
                <Confetti width={width} height={height} />
                <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                <div className="w-full max-w-lg p-4 sm:p-10 relative mx-4 md:mx-auto my-auto rounded-xl shadow-lg bg-white">
                  <div className="">
                    <div className="text-center p-10 flex-auto justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-32 h-32 flex items-center text-red-500 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <h2 className="text-5xl font-bold py-4 ">
                        KLAY IS BACK!
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center text-white pt-20 md:pt-16">
                <div className="inline-block p-4 md:p-10">
                  <p className="text-5xl md:text-8xl inline-block">{day}</p>
                  <p className="text-sm md:text-xl">Days</p>
                </div>
                <div className="inline-block p-4 md:p-10">
                  <p className="text-5xl md:text-8xl inline-block">{hour}</p>
                  <p className="text-sm md:text-xl">Hours</p>
                </div>
                <div className="inline-block p-4 md:p-10">
                  <p className="text-5xl md:text-8xl inline-block">{minute}</p>
                  <p className="text-sm md:text-xl">Minutes</p>
                </div>
                <div className="inline-block p-4 md:p-10">
                  <p className="text-5xl md:text-8xl inline-block">{second}</p>
                  <p className="text-sm md:text-xl">Seconds</p>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
