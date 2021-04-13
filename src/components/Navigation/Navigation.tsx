import React from 'react';
import { Link } from "react-router-dom";
import { NavigationPropsTypes } from '../../App';
import * as Component from '../Components';
import Icon, { IconInputTypes } from '../Modules/Icon';
import './Navigation.css';

interface inputTypes {
  data: NavigationPropsTypes;
}
interface LinksTypes {
  tab: keyof typeof Component;
  icon?: string;
  selected?: boolean;
}

// i need to change this at some point
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
const Navigation = (input: inputTypes) => {
  const data = input.data;
  // BELLOW is a logic for making current tab highlighted 
  // Links.map(e => e.selected = e.tab === data.currentTab ? true : false)
  return (
    <nav className='Navigation'>
      {/* <Favorites/> */}
      {Links.map(e => {
        const selected = e.selected === true ? 'selected' : ''
        !e.icon && (e.icon = 'photograph')

        const iconParameters: IconInputTypes = {
          icon: e.icon,
          styles: {
            fontSize: '36px'
          }
        }

        return (
          <Link
            to={`/${e.tab}`}
            className={`NavigationButton flexed ${selected}`}
            onClick={() => data.RenderTab(e.tab)}
          >
            <Icon {...iconParameters} />
          </Link>
        )
      })}
      <Link
        to='/Account'
        className='NavigationAvatar flexed ghost'
        onClick={() => data.RenderTab('Account')}
      >
        <img className='NavigationAvatarImage' src='svg/avatar.png' alt='Account' />
      </Link>
    </nav>
  )
}

export default Navigation;