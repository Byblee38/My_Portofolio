import style from './MyProject.module.scss'
import { MyProjectList } from './MyProject'

const MyProject = () => {
    return (  
        <div className={style.MyProject}>
            <div className={style.titleProject}>
                <h2 className={style.titleProject}>My Project</h2>
            </div>
            <div className={style.myProjectList}>
                {
                    MyProjectList.list.map((item) => (
                        <div className={style.project} 
                        key={item.id}>
                            <div className={style.projectImg}>
                                <img src={item.img} alt={item.name} className={style.projectImg}/>
                            </div>
                            <div className={style.projectText}>
                                <h1 className={style.projectNo}>{item.no}</h1>
                                <h1 className={style.projectTitle}>{item.title}</h1>
                                <p className={style.projectDescription}>{item.description}</p>
                                <div className={style.projectButton}>
                                <a href={item.view} className={style.link}><button className={style.buttonProject}>View</button></a>
                                </div>
                            </div>
                        </div>
                ))
                }
            </div>
        </div>
    );
}
 
export default MyProject;