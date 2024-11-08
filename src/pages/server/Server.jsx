import React, { useEffect, useState } from 'react';
import './server.scss';
import { useParams } from 'react-router-dom';
import CableIcon from '@mui/icons-material/Cable';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ApiIcon from '@mui/icons-material/Api';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import { servers } from '../../lib/servers';

export default function Server() {
    const { serverId } = useParams();
    const [userServer, setUserServer] = useState(null); // Set initial state to null

    useEffect(() => {
        const fetchDetails = () => {
            const server = servers.find(server => +serverId === server.id);

            if (server) {
                setUserServer(server);
                console.log(server)
            } else {
                setUserServer(null); // Set to null if server not found
            }
        };

        fetchDetails();
    }, [serverId]); // Added dependency to serverId, to update if it changes

    // Render a loading state or error if userServer is null
    if (userServer === null) {
        return (
            <div className='server'>
                <div className='side-navbar-container'>
                    <SideNavbar serverId={serverId} />
                </div>
                <div className='server-container'>
                    <p>Server not found or still loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='server'>
            <div className='side-navbar-container'>
                <SideNavbar serverId={serverId} />
            </div>

            <div className='server-container'>
                <div className="server-bar">
                    <p>{userServer.name}</p>
                    <button><CableIcon /> Connect</button>
                    <div className={userServer.isActive ? 'active' : 'not-active'}>{userServer.isActive ? "Active" : "Not Active"}</div>
                </div>

                <div className="server-info">
                    <div className="how-to-connect">
                        <p><HelpOutlineIcon /> Connecting to server</p>
                        <p>To join your server, simply copy the server address and paste it into your Minecraft client. You can add it as a new server or use the "Direct Connect" option. The server address is available on the server details page.</p>
                    </div>

                    <div className="server-infos">
                        <div className="server-single-info">
                            <p><LinkIcon />Address</p>
                            <p>servername.lumino.io</p>
                        </div>
                        <div className="server-single-info">
                            <p><ApiIcon />Software</p>
                            <p>Forge</p>
                        </div>
                        <div className="server-single-info">
                            <p><FormatListNumberedIcon />Version</p>
                            <p>1.20.1</p>
                        </div>
                    </div>

                </div>

                {!userServer.isActive ? <button className='start-button'>Start Server</button> : <button className='stop-button'>Stop Server</button>}
            </div>
        </div>
    );
}
