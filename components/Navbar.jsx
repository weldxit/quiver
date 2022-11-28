import React from 'react';
import Link from 'next/link';
import style from '../styles/Navbar.module.css'



const Navbar = () => {
    return (
        <div className={style.navcontainer}>
            <ul className={style.navul}>
                <Link href={'/Home'} className={style.navlink}>Quiver</Link>
                <Link href={'/ShreeJagannath'} className={style.navlink}>Shree Jagannath</Link>
                <Link href={'/Politics'} className={style.navlink}>Politics</Link>
                <Link href={'/Education'} className={style.navlink}>Education</Link>
                <Link href={'/Nature'} className={style.navlink}>Nature</Link>
                <Link href={'/Nature'} className={style.navlink}>Sports</Link>
                <Link href={'/Nature'} className={style.navlink}>Sports</Link>
                <Link href={'/Nature'} className={style.navlink}>Sports</Link>
                <Link href={'/Technology'} className={style.navlink}>Technology</Link>
                <Link href={'/TenMinuteOdisha'} className={style.navlink}>10 Mins Odisha</Link>          
            </ul>
            
        </div>
    );
}

export default Navbar;
