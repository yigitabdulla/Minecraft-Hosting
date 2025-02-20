import React, { useState, useEffect, useRef } from 'react';
import SideNavbar from '../../components/sideNavbar/SideNavbar'; // Import SideNavbar
import './serverConsole.scss';
import { useParams } from 'react-router-dom';

export default function ServerConsole() {
    const { serverId } = useParams(); // Get serverId from URL
    const [consoleOutput, setConsoleOutput] = useState([]); // Stores console logs
    const [command, setCommand] = useState(''); // Stores the current command input
    const consoleEndRef = useRef(null); // Ref for auto-scrolling to the bottom of the console

    // Simulate receiving console logs (for demonstration purposes)
    useEffect(() => {
        const initialLogs = [
            "[INFO] Starting Minecraft server...",
            "[INFO] Loading properties...",
            "[INFO] Default game type: SURVIVAL",
            "[INFO] Generating keypair...",
            "[INFO] Preparing level 'world'",
            "[INFO] Done (5.123s)! For help, type 'help'",
        ];
        setConsoleOutput(initialLogs);

        // Simulate real-time logs (optional)
        const interval = setInterval(() => {
            setConsoleOutput((prevLogs) => [
                ...prevLogs,
                `[INFO] ${new Date().toLocaleTimeString()} - New log entry`,
            ]);
        }, 5000); // Add a new log every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Auto-scroll to the bottom of the console when new logs are added
    useEffect(() => {
        if (consoleEndRef.current) {
            consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [consoleOutput]);

    // Handle command submission
    const handleCommandSubmit = (e) => {
        e.preventDefault();
        if (command.trim()) {
            // Simulate sending the command to the server
            setConsoleOutput((prevLogs) => [
                ...prevLogs,
                `[COMMAND] > ${command}`,
            ]);
            setCommand(''); // Clear the input field
        }
    };

    return (
        <div className='server-console'>
            {/* Sidebar */}
            <div className='side-navbar-container'>
                <SideNavbar serverId={serverId} />
            </div>

            {/* Main Console Content */}
            <div className='console-container'>
                <h2>Server Console</h2>

                {/* Console Output */}
                <div className='console-output'>
                    {consoleOutput.map((log, index) => (
                        <div key={index} className='log-entry'>
                            {log}
                        </div>
                    ))}
                    <div ref={consoleEndRef} /> {/* Auto-scroll anchor */}
                </div>

                {/* Command Input */}
                <form onSubmit={handleCommandSubmit} className='command-input'>
                    <input
                        type='text'
                        placeholder='Enter a command...'
                        value={command}
                        onChange={(e) => setCommand(e.target.value)}
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
}