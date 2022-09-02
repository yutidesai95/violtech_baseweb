import Link from 'next/link';
import { useState } from "react";
import styles from '../../menu.module.css';
import Modalmenu from '../Modal';
import Script from 'next/script'

function Navbar(){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return(
      <header className={styles.header}>
          <Script
  src="./scripts/header.js"
  strategy="beforeInteractive"
/>
                    <nav className={styles.navbar}>
                    <div className={styles.navLt}>
                    <Link className={styles.active} href='/'>
                            <a >
                                <img className={styles.navlogo} src="/images/Logo.png" alt="logo" width="120" height="35" />
                            </a>
                    </Link>
                    </div>
                  
                    <ul className={isOpen === false ? 
                            styles.navmenu : styles.navmenu +' '+ styles.active}>
                        <li className={styles.navitem}>
                            <Link href='/services'>
                              <a className={isOpen === false ? 
                                        styles.navlink : styles.navlink+' '+styles.active}
                                        onClick={openMenu}>Services</a>
                            </Link>
                        </li>
                        
                        <li className={styles.navitem}>
                           <Link href='/about'>
                             <a className={isOpen === false ? 
                                        styles.navlink : styles.navlink+' '+styles.active}
                                        onClick={openMenu}>About</a>
                            </Link>
                        </li>
                        
                        <li className={styles.navitem}>
                            <Link href='/careers'>
                              <a className={isOpen === false ? 
                                        styles.navlink : styles.navlink+' '+styles.active}
                                        onClick={openMenu}>Careers</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>
                            <Link href='/support'>
                              <a className={isOpen === false ? 
                                        styles.navlink : styles.navlink+' '+styles.active}
                                        onClick={openMenu}>Support</a>
                            </Link>
                        </li>
                     
                        <li className={styles.navitem}>
                           <Modalmenu /> 
                        </li>
                    </ul>
                    <button className={isOpen === false ? 
                                        styles.hamburger : styles.hamburger+' '+styles.active}
                                        onClick={openMenu}
                                        >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                    </nav>
                </header> 
               
        
    );
}

export default Navbar;