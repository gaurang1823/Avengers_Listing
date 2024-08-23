import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import styles from '../styles/Home.module.css'
import Link from "next/link";




export default function Home() {
  return (
    <>
    <Head><title>Avengers | Home </title></Head>
    <div> 
      <h1 className={styles.title}>Avengers</h1>
      <p className={styles.text}>The Avengers Initiative was the brainchild of S.H.I.E.L.D. Director Nick Fury. He first approached Tony Stark with the idea, following Tony’s defeat of Obadiah Stane and his subsequent public announcement that he was Iron Man. Fury kept his eye on several potential members, as Bruce Banner struggled with life as the Hulk, the Asgardian Thor appeared on Earth, and Steve Rogers, AKA World War II hero Captain America, was discovered alive decades after his apparent death. In the meantime, some of S.H.I.E.L.D.’s most skilled members, Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton), were making a name for themselves and impressing Fury.</p>
      <p className={styles.text}>The Avengers’ first-ever adversary is the Asgardian god of mischief, Loki, who attempts to rule the Earth, aided by an invading Chitauri army. Loki was, in fact, working at the behest of the Mad Titan, Thanos, who would formulate new plans in the wake of Loki’s defeat.</p>
      <Link  href="/avengers/avenger" className={styles.btn}>
        Checkout   
      </Link>
      </div>
      </>
  );
}
