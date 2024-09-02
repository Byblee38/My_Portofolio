import style from './GetInTouch.module.scss'
import facebook from '../../assets/Hero/facebook.png'
import instagram from '../../assets/Hero/instagram.png'
import twitter from '../../assets/Hero/twitter.png'
import github from '../../assets/Hero/github.png'
import copyIcon from '../../assets/GetInTouch/iconCopy.png'

const GetInTouch = () => {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)};
    return ( 
        <section className={style.getInTouch}>
            <div className={style.getInTouchTitle}>
                <h1 className={style.getInTouchTitle}>Get In Touch</h1>
            </div>
            <div className={style.getInTouchContainer}>
            <div className={style.getInTouchBody}>
                <form className={style.getInTouchForm}>
                    <input type="text" placeholder="Name" className={style.getInTouchInput}/>
                    <input type="text" placeholder="Email" className={style.getInTouchInput}/>
                    <input type="text" placeholder="Subject" className={style.getInTouchInput}/>
                    <textarea placeholder="Message" className={style.getInTouchInput}/>
                    <button className={style.getInTouchButton}>Get In Touch</button>
                </form>
                <div className={style.getInTouchIcon}>
                    <a href="https://web.facebook.com/bayukresna.mukti.7"><img className={style.Icon} src={facebook} alt="facebook"  /></a>
                    <a href='https://www.instagram.com/krsnna_38'><img className={style.Icon} src={instagram} alt="instagram" /></a>
                    <a href='https://twitter.com/byyy38'><img className={style.Icon} src={twitter} alt="twitter" /></a>
                    <a href='https://github.com/Byblee38'><img className={style.Icon} src={github} alt="github" /></a>
                </div>
            </div>
            <div className={style.getInTouchDescription}>
                <h1 className={style.getInTouchText}>Lets Talk For Something Special</h1>
                <p className={style.getInTouchParagraf}>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <div className={style.copy}>
                <h1 className={style.email}>kresnamukti386@gmail.com</h1>
                <img className={style.copyIcon} src={copyIcon} alt="copyToClipboard" onClick={() => copyToClipboard('kresnamukti386@gmail.com')}/>
                </div>
                <div className={style.copy2}>
                <h1 className={style.phoneNumber}>+62 938-6366-9292</h1>
                <img className={style.copyIcon} src={copyIcon} alt="copyToClipboard" onClick={() => copyToClipboard('+62 938-6366-9292')} />
                </div>            
            </div>
            </div>
        </section>
     );
}
 
export default GetInTouch;