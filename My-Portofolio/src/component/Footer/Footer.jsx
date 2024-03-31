import style from './Footer.module.scss'
import logo from '../../assets/Header/logo1.png'

const Footer = () => {
    return ( 
        <div className={style.footerContainer}>
        <div className={style.footer}>
            <img src={logo} alt="logo" className={style.logo}/>
            <h1 className={style.footerText}>Personal</h1>
        </div>
        <div className={style.footerCopyRight}>
            <h1 className={style.footerCopyRightText}>Copyright © 2024</h1>
            <h1 className={style.footerCopyRightText2}>Made By Bayu Kresna</h1>
        </div>
        </div>
     );
}
 
export default Footer;