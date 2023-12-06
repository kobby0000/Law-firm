import React,{useState, useRef} from 'react';
import "./collapsible.css";
import { IoIosArrowDown } from "react-icons/io";

function Collapsible(props) {
    const [isopen, setIsopen] = useState(false);
    const parentRef = useRef();

  return (
    <div id="collapsible">
        <button className='collapsible_btn' onClick={() => setIsopen(!isopen)}>
            {props.title}
        <IoIosArrowDown className={isopen ? 'arrow_icon rotate' : "arrow_icon "}/>
        </button>
        <div 
        className="content_parent" 
        ref={parentRef}
        style={ isopen ? {
            height: parentRef.current.scrollHeight + "px",
        } : {
            height: "0px",
        }
        }
        >

        <div className="collapsible_content">
            { props.children}
        </div>
        </div>

    </div>
  )
}

export default Collapsible