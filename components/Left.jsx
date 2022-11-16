import React from "react";
import Link from "next/link";
import Image from "next/image";

const Left = ({ style }) => {
  return (
    <>
      <div className={style.left}>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/modiji.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             Modi Ji visiting odisha for the first time.
            </h2>
          </Link>
        </div>

        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/trump.webp"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             Trump fires up on his wife
            </h2>
          </Link>
        </div>

        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/jack.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             Jack sparrow lost Black Pearl
            </h2>
          </Link>
        </div>

        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/philosopher.webp"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              A Geek philosopher
            </h2>
          </Link>
        </div>

        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/twilight.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              Twilight Conflict | Bella Swan
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/rami.webp"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             Rami got the Award
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/elon.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
           Elon takes marijuana on show
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/greece.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
              The clean Greece 
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/winter.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             Winter has came, Warm up !
            </h2>
          </Link>
        </div>
        <div className={style.imagediv}>
          <Link href={"/"}>
            <Image
              src={"/images/leftbar/great_wall_of_china.jpg"}
              fill={true}
              alt={"my image"}
            />
            <h2 className={style.imagedivmain_para}>
             30 Km long Wall | Great Wall
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Left;
