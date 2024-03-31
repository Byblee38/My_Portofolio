import style from './MyExperience.module.scss'
import { MyExper } from './MyExper'

const MyExperience = () => {
    return ( 
        <section>
            <div className={style.experience}>
                <h1 className={style.titleExperience}>My Experience</h1>
                <div className={style.boxExperience}>
                {
                    MyExper.list.map((item) => (
                        <div className={style.exper} key={item.id}>
                        <div className={style.experContent}>
                            <div className={style.experIcon}>
                                <img src={item.img} alt={item.position} className={style.experImg}/>
                                <div className={style.experInfo}>
                                    <p className={style.experPosition}>{item.position}</p>
                                    <p className={style.experCompany}>{item.company}</p>
                                </div>
                        </div>
                            <p className={style.experDate}>{item.date}</p>
                            </div>
                            <div className={style.experText}>
                                <p className={style.experDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>    
        </section>
     );
}
 
export default MyExperience;