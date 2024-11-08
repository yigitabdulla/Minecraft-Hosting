import React, { useEffect, useState } from 'react'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import { useParams } from 'react-router-dom';
import './serverSettings.scss'
import { servers } from '../../lib/servers';

export default function ServerSettings() {

    const { serverId } = useParams();
    const [userServer, setUserServer] = useState(null);

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
    }, [serverId]);

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
        <div className='server-settings'>

            <div className='side-navbar-container'>
                <SideNavbar serverId={serverId} />
            </div>

            <div className="server-settings-main">

                <h2>Server Settings</h2>

                <div className="server-settings-container">

                    <div className="server-setting">

                    </div>
                </div>

            </div>



        </div>
    )
}
