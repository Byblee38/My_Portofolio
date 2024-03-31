import { MyTestimonialList } from "./MyTestimonial.js";
import style from "./MyTestimonial.module.scss";

const MyTestimonial= () => {
    return ( 

        <section>
            <div className={style.testimonial}>
                <div className={style.boxTestimonial}>
                     <h1 className={style.titleTestimonial}>My Testimonial</h1>
                </div>
                <div className={style.testimonialList}>
                     {
                         MyTestimonialList.list.map((data) => {
                             return (
                                 <div className={style.testimonialContent} key={data.id}>
                                     <div className={style.testimonialImg}>
                                         <img src={data.img} alt={data.name} className={style.testimonialImg}/>
                                     </div>
                                     <div className={style.testimonialText}>
                                         <p className={style.testimonialDescription}>{data.testimonial}</p>
                                         <hr style={{width: "120px", height: "2px", color: "", backgroundColor: "black", border: "none"}}/>
                                         <h1 className={style.testimonialName}>{data.name}</h1>
                                         <p className={style.testimonialPosition}>{data.position}</p>
                                     </div>
                                 </div>
                             )
                         })
                     }
                 </div>
            </div>
        </section>
     );
}
 
export default MyTestimonial;