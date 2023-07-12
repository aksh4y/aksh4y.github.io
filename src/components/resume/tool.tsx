import React from 'react';
import Tool from '../../types/tool';

export const ToolBox: React.FC<Tool> = (props) => (
    <p>
        <span className="font-weight-bold">{props.name}</span>
        <br />
        <span dangerouslySetInnerHTML={{ __html: props.list }} />
    </p>
);

export default ToolBox;
