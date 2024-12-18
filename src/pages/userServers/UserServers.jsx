import React, { useState } from 'react'
import './userServers.scss'
import { servers } from '../../lib/servers.js'
import { useNavigate } from 'react-router-dom';

export default function UserServers() {

    const navigate = useNavigate();

    const handleServerClick = (server) => {
        console.log("row clicked")
        navigate(`/profile/servers/${server.id}`, { state: { server } });
        console.log(server)
    }

    return (
        <div className='user-servers'>
            <h3>My Servers</h3>
            <div className="server-container">
                {servers.map((server) => (
                    <div className="server" key={server.id}>

                        <div className="server-title">
                            <img src={server.image} alt="" />
                            <p>User Server Name</p>
                            <a
                                className='server-settings'
                                onClick={() => handleServerClick(server)}
                            >
                                Server Settings
                            </a>
                        </div>

                        <div className="server-info">

                            <div>{server.info}</div>

                            <li className='ram'>Using {server.ram - 1}/{server.ram} GBs of Ram</li>
                            <li className="people">{server.maxUser} people active</li>
                            <li className="locations">Best location selected!</li>

                        </div>

                        {!server.isActive ? <button className='start-button'>Start Server</button> : <button className='stop-button'>Stop Server</button>}

                    </div>
                ))}
            </div>
        </div>
    )
}
