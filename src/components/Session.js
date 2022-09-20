import {useState,useEffect} from "react";
import Breakouts from "./Breakouts";

function Session(props){

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState([]);

    let startParse = props.content.acf.start_time.substring(0, props.content.acf.start_time.length-3);
    let startHour = startParse.substring(0, startParse.length-3);
    let startMin = startParse.substring(3, startParse.length)
    let startAMPM = "AM";
    if(startHour>12){
        startHour-=12
        startAMPM = "PM";
    }

    let endParse = props.content.acf.end_time.substring(0, props.content.acf.end_time.length-3);
    let endHour = endParse.substring(0, endParse.length-3);
    let endMin = endParse.substring(3, endParse.length)
    let endAMPM = "AM";
    if(endHour>12){
        endHour-=12
        endAMPM = "PM";
    }
    let title= props.content.title.rendered.replace('&#038;', ' - ');
    title = title.replace("&#8211;", " - ");
    title = title.replace("&#8217;", "'");

    let sessionTags = (props.content.tags.length>0? props.content.tags[0]: null)
    console.log("session tags", sessionTags)
    const toggleOpen = function(e){
        e.preventDefault();

        setOpen(!open);
    }
    
    let visibleClass = (open? "shown": "hidden");


    return(
        <div className="session_item p-3">

            <div className="row">
                <div className="start col-sm-2 p-2">{startHour}:{startMin} {startAMPM}</div>
                <div className="start col-sm-2 p-2">{endHour}:{endMin} {endAMPM}</div>
                <div className="title col-sm-8 p-2">
                    <a href="#" onClick={toggleOpen.bind(this)}>
                        <strong>{title}</strong>
                    </a>
                </div>
            </div>
            <div className="row" >

                
                <div 
                    className={`col-sm-12 content bg-light p-4 ${visibleClass}`}>
                    <Breakouts open={open} content={props.content} />
                    
                </div>


            </div>
        </div>
    )

}
export default Session;