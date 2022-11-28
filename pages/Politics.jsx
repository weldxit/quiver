import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import style from "../styles/Allpage.module.css";

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
                <div className={style.tgrid_item}>
                  {" "}
                  <h1 className={style.trend_item_heading}>
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
                  </p>
                </div>
                <div className={style.tgrid_item}>
                  {" "}
                  <h1 className={style.trend_item_heading}>
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
                  </p>
                </div>
                <div className={style.tgrid_item}>
                  {" "}
                  <h1 className={style.trend_item_heading}>
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
                  </p>
                </div>
                <div className={style.tgrid_item}>
                  {" "}
                  <h1 className={style.trend_item_heading}>
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
                  </p>
                </div>
                <div className={style.tgrid_item}>
                  {" "}
                  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>
                  <div className={style.trend_item_image}>
                    <Image src={"/images/aw.jpg"} fill={true} alt="thumbnail" />
                  </div>
                  <p className={style.trend_item_desc}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio voluptates aliquam, totam odio laborum exercitationem
                    deserunt cum accusamus inventore consectetur veritatis nulla
                    recusandae ipsam, placeat natus rerum dolorem omnis autem?{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className={style.related}>
            <h1 className={style.latest_heading}>Related News</h1>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
              <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>

               <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
               <div className={style.related_news}>
                <Image src={"/images/aw.jpg"} width={200} height={150} alt="image" />
                <div className={style.related_news_texts}>
                  <h1 className={style.related_news_heading}>Heading goes through this</h1>
                  <span className={style.related_news_time}>2 min ago</span>
                  <p className={style.related_news_desc}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Adipisci assumenda quaerat iusto mollitia voluptatum quia
                    nemo at, aliquam illo incidunt quasi ratione doloremque
                    voluptatibus sunt animi omnis quas ab a!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione obcaecati omnis, quam magnam rerum iusto corporis molestias cumque aut fuga nobis mollitia modi, labore nisi reiciendis placeat doloremque. Natus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos cumque, minus mollitia adipisci ex illo et, laboriosam excepturi quis repellendus est itaque veniam sunt repellat animi perferendis distinctio nihil?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Politics;
