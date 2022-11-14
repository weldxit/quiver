import React from 'react';
import Image from 'next/image';

const TopNews = ({style}) => {

    return (
        <div className={style.topnews}>
           <div>
            <h1>The latest news</h1>
           <Image src={''} 
           height={300}
           width ={400}
           alt={"my image"}
           />
           </div>
           <div>lorem</div>
           <div>dsfaffg</div>
           <div>nhcvfgv</div>
           <div>nyhfdgf</div>
         
        </div>
    );
}

export default TopNews;
