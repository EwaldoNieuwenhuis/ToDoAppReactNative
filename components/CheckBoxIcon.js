import React from 'react';
import { SvgXml } from 'react-native-svg';

const CheckBoxIcon = ({ checked = false, color1 = '#6EDC5F', color2= "#E8E8E8", size = 31 }) => {
  //const padding = 2; // Voeg de gewenste paddingwaarde toe
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="10" stroke="${checked ? color2 : color1}" strokeWidth="1" fill="${checked ? color1 : 'transparent'}"/>
        ${checked ? '<path fill=white width="2" d="m9.3 17l-4.97-4.97l.714-.713l4.256 4.256l9.156-9.156l.713.713z"/> ' : ''}
      </g>
    </svg>
  `;

  return (
    <SvgXml xml={svgMarkup} width={size} height={size} />
  );
};

export default CheckBoxIcon;
