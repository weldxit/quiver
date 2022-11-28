import React from "react";
import style from '../styles/Sidebar.module.css'
const Sidebar = () => {
  function codeGenerate(ylink){
    const code =ylink.slice(32,43)
    return code
  }
  return (
    <div className={style.container}>
   <div className={style.sidebar}>
    <h1 className={style.heading}>See Our Videos</h1>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    <div className={style.ytcontainer}>
      <iframe src={`https://www.youtube.com/embed/${codeGenerate('https://www.youtube.com/watch?v=zGPC2D_K9DI')}`} frameborder="0"></iframe>
    </div>
    </div>
   </div>
  );
};

export default Sidebar;
