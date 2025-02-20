import React from 'react'
import './sideNavbar.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ApiIcon from '@mui/icons-material/Api';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import CodeIcon from '@mui/icons-material/Code';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import PublicIcon from '@mui/icons-material/Public';
import { Link, useParams } from 'react-router-dom';

export default function SideNavbar() {
  
  const { serverId } = useParams();
  

  return (
    <div className='side-navbar'>
      <div className='header'>
        <p>Server Name</p>
        <button><PlayCircleOutlineIcon /></button>
      </div>
       <ul className=''>
        <li><a href={`/profile/servers/${serverId}`}><PlayCircleOutlineIcon/> Server</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><SettingsIcon />Settings</a></li>
        <li><a href={`/profile/servers/${serverId}/console`}><CodeIcon/>Console</a></li>
        <li><a href={`/profile/servers/${serverId}/players`}><PeopleIcon/>Players</a></li>
        <li><a href={`/profile/servers/${serverId}/folders`}><FolderIcon/>Folders</a></li>
       </ul>
    </div>
  )
}
