import React, { useEffect } from 'react'
import './server.scss'
import { useLocation } from 'react-router-dom';
import CableIcon from '@mui/icons-material/Cable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ApiIcon from '@mui/icons-material/Api';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export default function Server() {

    const location = useLocation();
    const { server } = location.state || {};

    if (!server) {
        window.location.href = '/servers';
    }

    return (
        <div className='server'>
            <div className="server-bar">
                <p>{server.name}</p>
                <button><CableIcon/> Connect</button>
                <div className={server.isActive ? 'active' : 'not-active'}>{server.isActive ? "Active" : "Not Active"}</div>
            </div>

            <div className="server-info">
                <div className="how-to-connect">
                    <p><HelpOutlineIcon/> Connecting to server</p>
                    <p>To join your server, simply copy the server address and paste it 
                        into your Minecraft client. You can add it as a new server or use the 
                        "Direct Connect" option. The server address is available on the server details page.</p>
                </div>

                <div className="server-infos">
                    <div className="server-single-info">
                        <p><LinkIcon/>Address</p>
                        <p>servername.lumino.io</p>
                    </div>
                    <div className="server-single-info">
                        <p><ApiIcon/>Software</p>
                        <p>Forge</p>
                    </div>
                    <div className="server-single-info">
                        <p><FormatListNumberedIcon/>Version</p>
                        <p>1.20.1</p>
                    </div>
                </div>

            </div>

            {!server.isActive ? <button className='start-button'>Start Server</button> : <button className='stop-button'>Stop Server</button>}
        </div>
    )
}
