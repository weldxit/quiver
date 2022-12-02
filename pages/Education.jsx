import React from 'react';
import Layout from '../components/Layout';
import style from '../styles/Allpage.module.css'
import Image from 'next/image';

const Education = () => {
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
              <h1 className={style.latest_heading}>Latest Educational</h1>
              <div className={style.first_politics}>
                <div className={style.first_politics_image}>
                  <Image
                 
                    src={"https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_960_720.jpg"}
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
              <h1 className={style.latest_heading}>Trending On Education</h1>
              <div className={style.trending_grid}>
                <div className={style.tgrid_item}>
                  <h1 className={style.trend_item_heading}>
                    This is Heading Line some hot news
                  </h1>

                  <div className={style.trend_item_image}>
                    <Image
                      src={"https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_960_720.jpg"}
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
                      src={"https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306607_960_720.jpg"}
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
                      src={"https://cdn.pixabay.com/photo/2020/12/14/17/40/studying-5831644_960_720.jpg"}
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
                      src={"https://cdn.pixabay.com/photo/2016/10/30/05/43/school-1782427_960_720.jpg"}
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
                      src={"https://cdn.pixabay.com/photo/2015/12/19/20/32/paper-1100254_960_720.jpg"}
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
                    <Image src={"https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701__180.jpg"} fill={true} alt="thumbnail" />
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
                <Image src={"https://cdn.pixabay.com/photo/2016/11/29/13/51/alone-1869997_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726__340.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2018/09/11/19/49/education-3670453__340.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2019/07/11/14/24/reading-4330761_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589__180.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2020/05/16/16/43/book-5178205_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2019/07/11/14/24/reading-4330761_960_720.jpg"} width={200} height={150} alt="image" />
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
                <Image src={"https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"} width={200} height={150} alt="image" />
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
}

export default Education;
