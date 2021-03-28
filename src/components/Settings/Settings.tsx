import React from 'react';
import './Settings.css';

export interface CategoriesTypes {
  title: string;
  icon: string;
  submenu: {
    title: string;
    icon: string;
    anchor: string;
  }[];
}

// const CreateNavigation = (props: CategoriesTypes) => {
//   const [isHovered, setHovered] = useState(false);
//   const [isOpened, setOpened] = useState(false);
//   const dropdownHeight: string = `${props.submenu.length * 30}px`;
//   const dropdownProps: DropdownInputTypes = {
//     menuHeight: isOpened ? dropdownHeight : '0px',
//     menuWidth: '250px',
//     menuMargin: isOpened ? '0 5px 15px 0' : '0 5px 5px 0'
//   }
//   const textParameters: TextInputTypes = {
//     title: props.title,
//     element: 'h6',
//     elementMargin: '0 30px'
//   }
//   const iconProps: IconInputTypes = {
//     icon: 'arrowChevronDown',
//     styles: {
//       margin: '0 10px 0 0',
//       opacity: isOpened ? 1 : isHovered ? 1 : 0,
//       transform: `rotate(${isOpened ? 180 : 0}deg)`
//     }
//   }
//   return (
//     <>
//       <button
//         className={'category _button-ghost'}
//         onClick={() => setOpened(!isOpened)}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}>
//         <TextField {...textParameters} />
//         <Icon {...iconProps} />
//       </button>
//       <Dropdown {...dropdownProps}>
//         {props.submenu.map((_object) => {
//           const _textProps: TextInputTypes = {
//             title: _object.title,
//             element: 'p',
//             elementPadding: '0 0 0 50px'
//           }
//           const _iconProps: IconInputTypes = {
//             icon: 'arrowChevronRight',
//             styles: {
//               opacity: 1
//             }
//           }
//           return (
//             <button
//               className='submenu _button-ghost'
//               onClick={() => window.location.hash = `#${_object.anchor}`}>
//               <TextField {..._textProps} />
//               <Icon {..._iconProps} />
//             </button>
//           )
//         })}
//       </Dropdown>
//     </>
//   )
// }

const CreateContent = () => {
  return (
    <>
    </>
    // <section className='content'>
    //   {settingsFile.categories.map((object) => {

    //     return (
    //       <CategoryBox {...object}>
    //         {object.submenu.map((_object) => {
    //           return (
    //             <>
    //               <h5 id={_object.anchor} style={{ marginBottom: '5px' }}>
    //                 {_object.title}
    //               </h5>
    //               {settingsFile.content.map((__object) => {
    //                 if (__object.anchor === _object.anchor) {
    //                   return (
    //                     <>
    //                       <p>
    //                         {__object.title}
    //                       </p>
    //                       <h6>
    //                         {__object.description}
    //                       </h6>
    //                       <h6>
    //                         {__object.type}
    //                       </h6>
    //                       <h6>
    //                         {__object.anchor}
    //                       </h6>
    //                       <h6>
    //                         {__object.editable ? 'Editable' : 'Not Editable'}
    //                       </h6>

    //                       <h6 style={{ marginBottom: '30px' }}>
    //                         {__object.content}
    //                       </h6>
    //                     </>
    //                   )
    //                 }
    //                 else return <> </>
    //               })}
    //             </>
    //           )
    //         })}
    //       </CategoryBox>
    //     )
    //   })}
    // </section>
  )
}

const Settings = () => {
  // const onCartAdd = (e: any) => {
  //   console.log(e.target.id);
  // };

  return (
    <div className='flexed bigged debugged' style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <nav className='navigation'>
        {settingsFile.categories.map((object) => CreateNavigation(object))}
      </nav> */}
      <h1>This is H1 heading</h1>
      <h2>This is H2 heading</h2>
      <h3>This is H3 heading</h3>
      <h4>This is H4 heading</h4>
      <h5>This is H5 heading</h5>
      <h6>This is H6 heading</h6>
      <p>This is paragraph</p>
      {CreateContent()}
    </div>
  )
}
export default Settings;


