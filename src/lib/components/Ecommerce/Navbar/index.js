import React,{useState} from 'react';
import { GoThreeBars } from 'react-icons/go';
import {AiOutlineClose } from 'react-icons/ai';
import { BrowserRouter, Link} from 'react-router-dom'
import styles from './style.module.css';


export default function Navbar(props) {

    const [isMobileNavOpen, setMobileNavOpen] = useState(true);
    const [navLinks,setNavLink] = useState(props.navLinks)
       

    //hide mobile nav
    const openNav= () =>
    {
        setMobileNavOpen(false)
    }

    //show mobile nav
    const closeNav = () => 
    {
        setMobileNavOpen(true);
    }

    return (
        <>
        <div className = {styles.con} style = {{backgroundColor:props.bg_color}}>
                <div className = {styles.Logo}>
                  <p className = {styles.logo}>{props.heading}</p>
                </div>
                <div className = {styles.list}> 
                    <ul className = {styles.ulnav} style = {{backgroundColor:props.bg_color}}>
                        {navLinks.map(({ to, label}, index) =>                
                        <li key={index}>
                           <BrowserRouter>
                           <Link  to={to}>
                           {label}
                           </Link>
                           </BrowserRouter>
                        </li>
                        )}
                    </ul>       
                </div>
                <div className={styles.search}>
                      <span class={styles.search_icon} value="">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="dark:text-gray-400 fill-current" style={{minWidth: '24px'}}><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"></path></svg>
                      </span>
                      <input placeholder="Search" type="search" className={styles.input_search}></input>
                </div>
                <div className = {styles.bar}>
                  {isMobileNavOpen == true ?<GoThreeBars onClick = {openNav}/> : <AiOutlineClose onClick = {closeNav}/>}
                </div>
        </div>
        <div>
      {isMobileNavOpen == false ? 

            <div className = {styles.mobilelist}> 
                        <ul className = {styles.mobileulnav}>
                        {navLinks.map(({ to, label}, index) =>                
                        <li key={index}>
                           <BrowserRouter>
                           <Link  to={to}>
                           {label}
                           </Link>
                           </BrowserRouter>
                        </li>
                        )}
                        </ul>
            </div>:

            null}
        </div> 
        </>
    )
}

