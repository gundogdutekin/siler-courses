import {useState} from "react";
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'

function Courses({courses}) {
    const [index, setIndex] = useState(0)
    const {title, content,price,currency} = courses[index];
    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if(newIndex > courses.length - 1){
                newIndex = 0;
            }
            return newIndex;
        })
    }
    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if(newIndex < 0){
                newIndex = courses.length - 1;
            }
            return newIndex;
        })
    }
    const randomCourse = () => {

        let randomIndex = Math.floor(Math.random() * courses.length);

        if(randomIndex === index){
           
            randomIndex=index+ 1;
            if(randomIndex > courses.length - 1){
                randomIndex = 0;
            }
        }
       
        setIndex(randomIndex);
    }
    return (
     <div className="parentContainer"><button className="button" onClick={randomCourse}>Rastgele Kurs Ata</button>    
        <div className="container">
        
            <button className="nextLeftBtn" onClick={prevCourse}><FaAngleLeft /></button>
            <div className="course">
                <h2 className="title">{title}</h2>
                <div className="price"><div>{price}<span className="currency">{currency}</span></div></div>
                <div className="content">{content}</div>
            </div> 
            <button className="nextLeftBtn" onClick={nextCourse}><FaAngleRight /></button>
    </div>
   </div>   );
}

export default Courses;