import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Topnews.module.css";

const TopNews = () => {
  return (
    <div className={style.topnews}>
      <h1 className={style.heading}>
        Top News <span className={style.today}>Today</span>
      </h1>

      {/* frontpage -> mid content -> right side div of mid */}
      <div className={style.imagedivmain}>
      <h1 className={style.imagedivmain_heading}>
            <Link href={'/'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </h1>
          <div className={style.image}>
          <Link href={"/"}>
            <Image
              src={"/images/binary-world.jpg"}
              fill={true}
              alt={"my image"}
              placeholder="blur"
              blurDataURL="base64"
            />
            </Link>
          </div>
          
          
     
      </div>

      {/* frontpage -> mid content -> left side div of mid */}

      <div className={style.topnewsleft}>


        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/marshmello.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              #1 Marshmello reached 1 Billion listeners.
            </h2>
          </Link>
        </div>


        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image src={"/images/mr-robot.jpg"} fill={true} alt={"my image"} />
            <h2 className={style.imagedivmain_para}>
              Mr.Robot targets the fsociety.
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image src={"/images/aw.jpg"} fill={true} alt={"my image"} />
            <h2 className={style.imagedivmain_para}>
              Alan walkers next song, Thrilling !!
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image src={"/images/anonymous.jpg"} fill={true} alt={"my image"} />
            <h2 className={style.imagedivmain_para}>
              Anonymous has taken away the Dark Web portals.
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/northernlights.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              Northern Lights.. A view to slow down running mind
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/hiking_romania.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              Romania&apos;s Hiking spot getting crowded
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
