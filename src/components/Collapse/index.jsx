import React, { useState } from "react";

const Collapse = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
        <><h3 className="title" onClick={() => setIsCollapsed(!isCollapsed)}>
          {title} {isCollapsed ? "▲" : "▼"}
        </h3>
        {!isCollapsed && <p className="content">{children}</p>}</>
    );
  };
  
  export default Collapse;