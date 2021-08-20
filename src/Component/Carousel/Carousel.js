import React, {useState} from 'react'
import data from '../Data'
import Card from '../Card/Card'
import "./Carousel.scss"
const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const steps = 3;
    const nextSlide = () => {
        console.log(slideIndex)
        
        if (slideIndex >= data.length-steps){
            console.log("working")
            setSlideIndex(0)
        }else{
            setSlideIndex(slideIndex + steps)
        } 
    }

    const prevSlide = () => {
        console.log(data.length, slideIndex)
        if(!(slideIndex <= 0)){
            setSlideIndex(slideIndex-steps)
        }
        else if (slideIndex <= 0){
            
            setSlideIndex(data.length-steps)
            console.log(slideIndex)
        }
    }
    return (
        <div className="container">
            {console.log(slideIndex)}
        <div className="container-head">   
        <div className="container-live">
            <span className="container-live-textLive"><span className="container-live-textLive-dot"></span>Live</span> <span className="container-live-upcomming">Upcommint Live Coaching</span>
        </div> 
        <div className="container-btn">
        <div onClick={()=>prevSlide()}><span  className="container-btn-left"></span></div>
        <div onClick={()=>nextSlide()}><span  className="container-btn-right"></span></div>
        </div>
        </div>
        <div className="Carousel">
            {data.map((e,el)=>{
              
                   
                        if(el >= slideIndex && el <= slideIndex+2){
                            return(
                            <div className={ "Carousel-active"}>
                             <Card data={e} />
                        </div>)
                        }
                        
                
        
        })}
        </div>
        </div>
    )
}
export default Carousel;