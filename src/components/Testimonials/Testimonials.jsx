import React from "react";
import "./testimonials.css"
import data from "../../data/certifications.json";
import { sliderSettings } from "../../data/common";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";

import Oracle from "../../assests/images/oracle.png";
import BEC from "../../assests/images/cambridge.png"
import Limca from "../../assests/images/limca.jpeg";
import Courseera from "../../assests/images/course.png";
import Nptel from "../../assests/images/nptel.png";
import IIT from "../../assests/images/iit.png";
import NIT from "../../assests/images/nit.png";
import KMIT from "../../assests/images/kmit.png";


const Testimonials = () => {
    const projectImages = [Oracle,BEC,Limca,BEC,Courseera,Nptel,IIT,Nptel,NIT,Nptel,NIT,KMIT,Courseera];
    return (
        <section className="testimonials container section">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle"></span>
           <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
                data.map((card,i)=>(
                    <SwiperSlide key={i}>
                    <div className="r-card">
                        <img src={projectImages[i]} alt="placeholder" className="card-image" />
                        <div className="card-content">
                            <span className="secondaryText r-price">
                                {card.title}
                            </span>
                            <span className="primaryText">{card.description}</span>
                        </div>
                    </div>
                </SwiperSlide>                
                ))
            }
           </Swiper>
        </section>
    );
}

export default Testimonials;

const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
       <div className="flexCenter r-buttons">
        <button onClick={()=>swiper.slidePrev()}>
            &lt;
        </button>
        <button onClick={()=>swiper.slideNext()}>
            &gt;
        </button>
       </div>
    )
}
