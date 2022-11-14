import React from 'react';
import SpecialNews from './SpecialNews';
import TopNews from './TopNews';

const Mid = ({style}) => {
    console.log(style.topnews)
    return (
        <div className={style.mid}>
            <TopNews style={style}/>
            <SpecialNews style={style}/>
            <SpecialNews style={style}/>
        </div>
    );
}

export default Mid;
