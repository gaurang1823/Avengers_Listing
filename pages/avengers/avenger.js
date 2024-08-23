
export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {avengers: data}
    }
}

import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Avengers.module.css";
const Avenger = ({avengers}) => {
    return ( 
        <>
        <Head><title>Avengers | Avenger List </title></Head>
        <div>
            <h1 className={styles.new}>All Mighty Avengers</h1>
            {avengers.map(avenger => (
                <Link href={'/avengers/' + avenger.id} key={avenger.id} className={styles.single}>
                    <h3>{avenger.name}</h3>
                </Link>
))}
        </div>
        </>
     );
}
 
export default Avenger;