import React from 'react';

export interface CategoryBoxTypes {
  childern?: object;
}
export const CategoryBox = (props: any) => {
  console.log(props.submenu)
  return (
    <>
      <h4 id={props.anchor}>
        {props.submenu.title}
      </h4>
      {props.children}
    </>
  )
}