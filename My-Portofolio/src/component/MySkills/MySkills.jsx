import style from './MySkills.module.scss'
import { MySkillsApp } from './MySkills'
const MySkills = () => {
    return ( 
        <section>
            <div className={style.skills}>
                <h1 className={style.titleSkill}>My Skills</h1>
                <div className={style.boxSkill}>
                    {
                        MySkillsApp.list.map((item) => (
                            <div className={style.skill} key={item.id}>
                                <img src={item.icon} alt={item.name} className={style.skillIcon}/>
                                <p className={style.skillName}>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}

export default MySkills;