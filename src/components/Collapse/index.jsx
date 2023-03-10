import React, { useState } from "react";
import arrows from '../../assets/VectorBas.png'
import arrowsH from '../../assets/VectorHaut.png'
import '../Collapse/index.css'

const Collapse = ({ classCSS, title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
 
    return (
        <>
        <div className={classCSS}>
            <h3 className="title" onClick={() => setIsCollapsed(!isCollapsed)}>
            {title} {isCollapsed ? <img src={arrows} alt="Fleche vers le bas" />: <img src={arrowsH} alt="Fleche vers le haut" /> }
            </h3>
        <div className={classCSS}></div>
        {!isCollapsed && <div className="content">{children}</div>}
        </div>
        </>
       
    );
  };
  
  export default Collapse;