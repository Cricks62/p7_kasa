import React, { useState } from "react";
import arrows from '../../assets/VectorBas.png'
import arrowsH from '../../assets/VectorHaut.png'

const Collapse = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
        <><div>
            <h3 className="title" onClick={() => setIsCollapsed(!isCollapsed)}>
            {title} {isCollapsed ? <img src={arrows} alt="test" />: <img src={arrowsH} alt="test" /> }
            </h3>
        
        {!isCollapsed && <p className="content">{children}</p>}
        </div></>
        
    );
  };
  
  export default Collapse;