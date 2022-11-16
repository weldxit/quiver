
import React from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import mid from '../styles/Mid.module.css'
import side from '../styles/Sidebar.module.css'
import left from '../styles/Left.module.css'
import Left from '../components/Left'
import Mid from '../components/Mid'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout';
import MostReadings from '../components/MostReadings';
const Home = () => {
    return (
        <Layout>


            
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  
    <main className={styles.main}>
     <Left style={left}/>
     <Mid style={mid}/>
     <Sidebar style={side}/>
    </main>
    <MostReadings/>
        </div>
        </Layout>
    );
}

export default Home;

