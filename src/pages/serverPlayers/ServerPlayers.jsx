import React, { useState, useEffect } from 'react';
import SideNavbar from '../../components/sideNavbar/SideNavbar'; // Import SideNavbar
import { useParams } from 'react-router-dom';
import './serverPlayers.scss';

export default function ServerPlayers() {
    const { serverId } = useParams(); // Get serverId from URL
    const [players, setPlayers] = useState([]); // Stores the list of players

    // Simulate fetching player data (for demonstration purposes)
    useEffect(() => {
        const fetchPlayers = () => {
            const mockPlayers = [
                { id: 1, name: 'Player1', status: 'Online', role: 'Member' },
                { id: 2, name: 'Player2', status: 'Online', role: 'OP' },
                { id: 3, name: 'Player3', status: 'Offline', role: 'Member' },
                { id: 4, name: 'Player4', status: 'Online', role: 'Member' },
            ];
            setPlayers(mockPlayers);
        };

        fetchPlayers();
    }, [serverId]);

    // Handle player actions (kick, ban, promote)
    const handlePlayerAction = (playerId, action) => {
        console.log(`Action: ${action} on Player ID: ${playerId}`);
        // Add logic to handle the action (e.g., API call)
    };

    return (
        <div className='server-players'>
            {/* Sidebar */}
            <div className='side-navbar-container'>
                <SideNavbar serverId={serverId} />
            </div>

            {/* Main Content */}
            <div className='players-container'>
                <h2>Server Players</h2>

                {/* Players List */}
                <div className='players-list'>
                    {players.map((player) => (
                        <div key={player.id} className='player-card'>
                            <div className='player-info'>
                                <span className='player-name'>{player.name}</span>
                                <span className={`player-status ${player.status.toLowerCase()}`}>
                                    {player.status}
                                </span>
                                <span className='player-role'>{player.role}</span>
                            </div>
                            <div className='player-actions'>
                                <button
                                    onClick={() => handlePlayerAction(player.id, 'kick')}
                                    className='action-button kick'
                                >
                                    Kick
                                </button>
                                <button
                                    onClick={() => handlePlayerAction(player.id, 'ban')}
                                    className='action-button ban'
                                >
                                    Ban
                                </button>
                                <button
                                    onClick={() => handlePlayerAction(player.id, 'promote')}
                                    className='action-button promote'
                                >
                                    Promote to OP
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}