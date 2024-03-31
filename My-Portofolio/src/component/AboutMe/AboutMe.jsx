import style from './AboutMe.module.scss'
import MyFoto from '../../assets/AboutMe/MyFoto.png'

const AboutMe = () => {
    return (  

        <section>
            <div className={style.aboutMe}>
                <img src={MyFoto} alt="AboutMe" className={style.meFoto}/>
                <div className={style.boxAboutMe}>
                    <div className={style.aboutMeImg}>
                        <h1 className={style.titleAboutMe}>About Me</h1>
                    </div>
                    <div className={style.aboutMeText}>
                        <p>I was born in Tulungagung on August 3, 2006. My interest in all things related to computers sparked when I was just 5 years old. Since then, I have been exploring various aspects of computing. Currently, as a student in Vocational High School, I have begun delving into programming languages.</p>
                        <p>Front-end development has been my initial goal, paving the way towards my ultimate aspiration of becoming a full-stack developer. I thrive on challenging aspects of coding, particularly the intricate logic embedded within it.</p>
                        <p>At present, I am still in the learning phase to become a front-end developer. Despite being a student, I am confident in my ability to quickly adapt to new environments and atmospheres, as well as grasp learning materials swiftly. My adaptability extends to both the learning process and new environments.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}
 
export default AboutMe