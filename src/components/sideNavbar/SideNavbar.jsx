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
        <li><Link to={`/profile/servers/${serverId}`}><PlayCircleOutlineIcon/> Server</Link></li>
        
        <li><Link to={`/profile/servers/${serverId}/settings`}><SettingsIcon />Settings</Link></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><CodeIcon/>Console</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><PeopleIcon/>Players</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><FolderIcon/>Folders</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><ApiIcon/>Software</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><RestorePageIcon/>Logs</a></li>
        <li><a href={`/profile/servers/${serverId}/settings`}><PublicIcon/>World</a></li>
       </ul>
    </div>
  )
}
