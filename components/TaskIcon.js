import React from 'react';
import { SvgXml } from 'react-native-svg';

const TaskIcon = ({ color = 'black', width= 24, height="200%" }) => {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path fill="${color}" d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M9.354 3c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.126 5H6v15h12V5h-2.126c.082.32.126.655.126 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6c0-.345.044-.68.126-1M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"/>
      </g>
    </svg>
  `;

  return (
    <SvgXml xml={svgMarkup} width="24" height="24" />
  );
};

export default TaskIcon;
