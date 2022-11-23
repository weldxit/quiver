import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import style from "../styles/Product.module.css";

const Politics = () => {
  return (
    <Layout>
      <div className={style.container}>
        <section className={style.maincontainer}>
          <div className={style.left_recent}>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            <div className={style.items}>
                <Image 
                src={'/images/navin.jpg'}
                fill={true}
                alt="navin-babu"
                />
                 </div>
            
          </div>

          <div className={style.right_trend}>
            <div className={style.latest}>
                <h1 className={style.latest_heading}>Latest on Politics</h1>
            </div>

            <div className={style.trending}>trend</div>

            <div className={style.related}>related</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Politics;
