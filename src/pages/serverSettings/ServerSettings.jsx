import React, { useEffect, useState } from 'react';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import { useParams } from 'react-router-dom';
import './serverSettings.scss';
import { servers } from '../../lib/servers';
import SettingsIcon from '@mui/icons-material/Settings';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import BackupIcon from '@mui/icons-material/Backup';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

export default function ServerSettings() {
    const { serverId } = useParams();
    const [userServer, setUserServer] = useState(null);

    useEffect(() => {
        const fetchDetails = () => {
            const server = servers.find(server => +serverId === server.id);

            if (server) {
                setUserServer(server);
                console.log(server);
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
                    {/* Server Properties Section */}
                    <div className="server-setting">
                        <div className="setting-header">
                            <SettingsIcon />
                            <h3>Server Properties</h3>
                        </div>
                        <div className="setting-content">
                            <div className="setting-item">
                                <label>Server Name</label>
                                <input type="text" defaultValue={userServer.name} />
                            </div>
                            <div className="setting-item">
                                <label>Max Players</label>
                                <input type="number" defaultValue={userServer.maxPlayers} />
                            </div>
                            <div className="setting-item">
                                <label>Difficulty</label>
                                <select defaultValue={userServer.difficulty}>
                                    <option value="peaceful">Peaceful</option>
                                    <option value="easy">Easy</option>
                                    <option value="normal">Normal</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>
                            <div className="setting-item">
                                <label>Enable PvP</label>
                                <button className="toggle-button">
                                    {userServer.pvpEnabled ? <ToggleOnIcon fontSize='large' /> : <ToggleOffIcon fontSize='large' />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* World Settings Section */}
                    <div className="server-setting">
                        <div className="setting-header">
                            <PublicIcon />
                            <h3>World Settings</h3>
                        </div>
                        <div className="setting-content">
                            <div className="setting-item">
                                <label>World Name</label>
                                <input type="text" defaultValue={userServer.worldName} />
                            </div>
                            <div className="setting-item">
                                <label>Seed</label>
                                <input type="text" defaultValue={userServer.seed} />
                            </div>
                            <div className="setting-item">
                                <label>Game Mode</label>
                                <select defaultValue={userServer.gameMode}>
                                    <option value="survival">Survival</option>
                                    <option value="creative">Creative</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="spectator">Spectator</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Player Management Section */}
                    <div className="server-setting">
                        <div className="setting-header">
                            <PeopleIcon />
                            <h3>Player Management</h3>
                        </div>
                        <div className="setting-content">
                            <div className="setting-item">
                                <label>Whitelist</label>
                                <button className="toggle-button">
                                    {userServer.whitelistEnabled ? <ToggleOnIcon fontSize='large' /> : <ToggleOffIcon fontSize='large' />}
                                </button>
                            </div>
                            <div className="setting-item">
                                <label>OP Players</label>
                                <input type="text" defaultValue={userServer.opPlayers.join(', ')} />
                            </div>
                        </div>
                    </div>

                    {/* Backup Settings Section */}
                    <div className="server-setting">
                        <div className="setting-header">
                            <BackupIcon />
                            <h3>Backup Settings</h3>
                        </div>
                        <div className="setting-content">
                            <div className="setting-item">
                                <label>Auto Backup</label>
                                <button className="toggle-button">
                                    {userServer.autoBackupEnabled ? <ToggleOnIcon fontSize='large' /> : <ToggleOffIcon fontSize='large' />}
                                </button>
                            </div>
                            <div className="setting-item">
                                <label>Backup Frequency</label>
                                <select defaultValue={userServer.backupFrequency}>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}