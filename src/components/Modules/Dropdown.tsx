import React from 'react';
import './Modules.css';

export interface DropdownInputTypes {
  menuHeight?: string;
  menuWidth?: string;
  menuMargin?: string;
  bgColor?: string;
  children?: object;
}
interface StylesTypes {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
}

const Dropdown = (data: DropdownInputTypes) => {
  const GenerateClassNames = (_data: DropdownInputTypes) => {
    // Text Color, isHovered
    let _classesReturn: string = '';
    return _classesReturn
  }
  const _classes: string = GenerateClassNames(data);

  // Generating Inline Styles with default values for Drop Menu Size
  const _styles: StylesTypes = {
    width: data.menuWidth,
    height: data.menuHeight,
    margin: data.menuMargin
  }

  return (
    <div className={'Dropdown ' + _classes} style={_styles}>
      {data.children}
    </div>
  )
}
export default Dropdown;
