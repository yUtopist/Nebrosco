import React from 'react';
import { NavigationPropsTypes } from '../../App';
import * as Component from '../Components';
import Icon, { IconInputTypes } from '../Modules/Icon';
import './Navigation.css';

interface LinksTypes {
  tab: keyof typeof Component;
  icon?: string;
  selected?: boolean;
}
interface propsTypes {
  data: NavigationPropsTypes;
}

const Links: Array<LinksTypes> = [
  {
    tab: 'Dashboard',
    icon: 'presentationChartLine',
    selected: false
  },
  {
    tab: 'Tracker',
    icon: 'viewList',
    selected: false
  },
  {
    tab: 'Messages',
    icon: 'chatConversation',
    selected: false
  },
  {
    tab: 'Settings',
    icon: 'cog',
    selected: false
  }
]

// Component
const Navigation = (props: propsTypes) => {
  const placeIcon = (iconName: string) => {
    const iconParameters: IconInputTypes = {
      icon: iconName,
      styles: {
        fontSize: '36px'
      }
    }
    return <Icon {...iconParameters} />
  }
  const buttonHandler = (object: LinksTypes) => {
    props.data.RenderTab(object.tab)
    Links.forEach(_object => {
      if (_object === object) _object.selected = true;
      else _object.selected = false
    })
  }

  Links.map(object => object.selected = object.tab === props.data.currentTab ? true : false)
  // Rendering
  return (
    <header className='Nav'>
      {/* <img className='Nav-Logo' src='svg/nebrosco-logo.svg' /> */}
      {/* <Favorites/> */}
      {Links.map(object => {
        const selected = object.selected === true ? 'selected' : ''
        return (
          <button
            className={`Nav-Button flexed ghost ${selected}`}
            onClick={() => buttonHandler(object)}>
            {placeIcon(object.icon ? object.icon : 'photograph')}
          </button>
        )
      })}
      <button
        className='Nav-Avatar flexed _button-ghost'
        onClick={() => buttonHandler({ tab: 'Account' })}>
        <img className='Nav-Avatar-Image' src='svg/avatar.png' alt='Account' />
      </button>
    </header>
  )
}

export default Navigation;