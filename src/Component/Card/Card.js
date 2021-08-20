import React from 'react'
import "./Card.scss"
const Card = (props) => {
    const {duration,classes,title,note,question,closingIn,img} = props.data
    return (
        <div className="Card">
           <div className="Card-head">
            <img src={img} alt="hero"/>
            <span className={`Card-head-text ${closingIn < 5 ? "Card-head-text-open" : "Card-head-text-closed"}`} ><img src="/image/clock.png" alt="clock"/>{duration}</span>
           </div>
           <div className="Card-foot">
            <div className="Card-foot-title">
                <span className="Card-foot-title-text">{title}</span>
            </div>
            <span className="Card-foot-text-classes"><img src="/image/youtube.png" alt="play"/>{classes}+ Live Classes</span>
            <div className="Card-foot-mini">
                <span className="Card-foot-text-question">
                <img src="/image/question.png" alt="note"/> {question}+ Questions
                </span>
                <span className="Card-foot-text-note">
                <img src="/image/adobe.png" alt="note"/>  {note}+ Notes
                </span>
            </div>
           </div>
        </div>
    )
}

export default Card

