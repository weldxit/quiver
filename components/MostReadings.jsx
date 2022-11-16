import React from 'react';
import Image from 'next/image';
import style from '../styles/Mostread.module.css'
const MostReadings = () => {
    return (
        <div className={style.flexitem}>

          <div className={style.sidehead}> 
                <h1 className={style.headingtext}>OUR TOP READINGS</h1>
          </div>
          <div className={style.mostreadcontainer} >  
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/blackhole.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/hotballon.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/star-gazing.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/northernlights.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/hiking_romania.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/planets/Big-Bang.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            <div className={style.mostread}>
                <div className={style.img}>
                    <Image 
                    src={'/images/anonymous.jpg'}
                    fill={true}
                    alt={'big bang'}
                    />
                </div>

                <h1> Big-Bang Theory</h1>

            </div>
            </div>
          
        </div>
    );
}

export default MostReadings;
