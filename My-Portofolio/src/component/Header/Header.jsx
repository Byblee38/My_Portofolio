import style from './Header.module.scss'
import logo from '../../assets//Header/logo1.png'
import { useState } from 'react';
import { Drawer } from 'antd';
import {Bars3Icon} from '@heroicons/react/24/solid'
import download from '../../assets/Header/download.png'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }
    return (  
        <div className={style.header}>
           <div className={style.imgheader}>
               <img src={logo} alt="logo" />
               <h1 className={style.title}>Personal</h1>
           </div>
            <div className={style.menu}>
                <ul className={style.list}>
                    <li>
                        <a className={style.link} href='#mySkills'>My Skills</a>
                    </li>
                    <li>
                        <a className={style.link} href='#myExperience'>My Experience</a>
                    </li>
                    <li>
                        <a className={style.link} href='#aboutMe'>About Me</a>
                    </li>
                    <li>
                        <a className={style.link} href='#myProject'>My Project</a>
                    </li>
                    <li>
                        <a className={style.link} href='#getInTouch'>Get In Touch</a>
                    </li>
                </ul>
            </div>
                <button className={style.button}>
                    Resume <img src={download} alt="download"/>
                </button>
           <div className={style.drawer}>
            <Bars3Icon onClick={toggleDrawer} className={style.Drawer}/>
            <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer}
            >
                <ul className={style.listOpen}>
                    <li>
                        <a className={style.link} href='#mySKills'>My Skills</a>
                    </li>
                    <li>
                        <a className={style.link} href='#myExperience'>My Experience</a>
                    </li>
                    <li>
                        <a className={style.link} href='#aboutMe'>About Me</a>
                    </li>
                    <li>
                        <a className={style.link} href='#myProject'>My Project</a>
                    </li>
                    <li>
                        <a className={style.link} href='#myTestimonial'>My Testimonial</a>
                    </li>
                    <li>
                        <a className={style.link} href='#getInTouch'>Get In Touch</a>
                    </li>
                </ul>
            </Drawer>
           </div>
        </div>
    );
}
 
export default Header;