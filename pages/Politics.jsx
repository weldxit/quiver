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
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
            <div className={style.items}>
              <Image src={"/images/navin.jpg"} fill={true} alt="navin-babu" />
            </div>
          </div>

          <div className={style.right_trend}>
            <div className={style.latest}>
              <h1 className={style.latest_heading}>Latest on Politics</h1>
              <div className={style.first_politics}>
                <div className={style.first_politics_image}>
                  <Image
                    src={"/images/leftbar/elon.jpg"}
                    fill={true}
                    alt="elon must"
                  />
                </div>
                <div className={style.first_politics_desc}>
                  <span className={style.author}>
                    Elon Musk Owns the Technology Election.
                  </span>
                  <p className={style.small_desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi laudantium quasi distinctio ratione eveniet nostrum
                    molestias cumque? Exercitationem commodi natus sed, nemo est
                    dolor nostrum quidem vitae, repellat ullam repudiandae.
                  </p>
                </div>
              </div>
            </div>

            <div className={style.trending}>
              <h1 className={style.latest_heading}>Trending Politics</h1>
              <div className={style.trending_grid}>
                <div className={style.tgrid_item}>
                  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/dreamland.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p>
                </div>
                <div className={style.tgrid_item}>  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/marshmello.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p></div>
                <div className={style.tgrid_item}>  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/binary-world.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p></div>
                <div className={style.tgrid_item}>  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/hiking_romania.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p></div>
                <div className={style.tgrid_item}>  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/northernlights.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p></div>
                <div className={style.tgrid_item}>  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"/images/aw.jpg"}
                      fill={true}
                      alt="thumbnail"
                    />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p></div>
              </div>
            </div>

            <div className={style.related}>related</div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Politics;
