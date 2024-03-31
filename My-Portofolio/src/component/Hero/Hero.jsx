import myFoto from '../../assets/Hero/myFoto.png'
import style from './Hero.module.scss'
import facebook from '../../assets/Hero/facebook.png'
import instagram from '../../assets/Hero/instagram.png'
import twitter from '../../assets/Hero/twitter.png'
import github from '../../assets/Hero/github.png'


const Hero = () => {
    return ( 
        <section className={style.hero}>
            <div className={style.heroImage}>
                <img src={myFoto} alt="myFoto" className={style.myImage}/>
            </div>
            <div className={style.heroText}>
                <h1 className={style.titleHero}>Hello, i am Bayu Kresna. Frontend Developer Based In Indonesia</h1>
                <p className={style.paragrafHero}>My experience in Front End development may be considered relatively limited, but due to my passion for this field, I possess the ability to swiftly learn and adapt to new concepts and technologies.</p>
            <div className={style.heroIcon}>
                <a href="https://web.facebook.com/bayukresna.mukti.7"><img className={style.Icon} src={facebook} alt="facebook" target="_blank" /></a>
                <a href='https://www.instagram.com/krsnna_38'><img className={style.Icon} src={instagram} alt="instagram" target="_blank"/></a>
                <a href='https://twitter.com/byyy38'><img className={style.Icon} src={twitter} alt="twitter" target="_blank"/></a>
                <a href='https://github.com/Byblee38'><img className={style.Icon} src={github} alt="github" target="_blank"/></a>
            </div>
            </div>

        </section>
     );
}
 
export default Hero;