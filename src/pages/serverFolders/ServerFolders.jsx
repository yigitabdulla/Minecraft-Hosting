import React, { useState, useEffect } from 'react';
import SideNavbar from '../../components/sideNavbar/SideNavbar'; // Import SideNavbar
import { useParams } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import './serverFolders.scss';

export default function ServerFolders() {
    const { serverId } = useParams(); // Get serverId from URL
    const [folders, setFolders] = useState([]); // Stores the list of folders

    // Simulate fetching folder data (for demonstration purposes)
    useEffect(() => {
        const fetchFolders = () => {
            const mockFolders = [
                { id: 1, name: 'world', size: '512 MB', lastModified: '2023-10-01' },
                { id: 2, name: 'plugins', size: '128 MB', lastModified: '2023-10-02' },
                { id: 3, name: 'logs', size: '64 MB', lastModified: '2023-10-03' },
                { id: 4, name: 'config', size: '32 MB', lastModified: '2023-10-04' },
            ];
            setFolders(mockFolders);
        };

        fetchFolders();
    }, [serverId]);

    // Handle folder actions (open, download, delete)
    const handleFolderAction = (folderId, action) => {
        console.log(`Action: ${action} on Folder ID: ${folderId}`);
        // Add logic to handle the action (e.g., API call)
    };

    return (
        <div className='server-folders'>
            {/* Sidebar */}
            <div className='side-navbar-container'>
                <SideNavbar serverId={serverId} />
            </div>

            {/* Main Content */}
            <div className='folders-container'>
                <h2>Server Folders</h2>

                {/* Folders List */}
                <div className='folders-list'>
                    {folders.map((folder) => (
                        <div key={folder.id} className='folder-card'>
                            <div className='folder-info'>
                                <FolderIcon className='folder-icon' />
                                <div className='folder-details'>
                                    <span className='folder-name'>{folder.name}</span>
                                    <span className='folder-size'>{folder.size}</span>
                                    <span className='folder-modified'>Last Modified: {folder.lastModified}</span>
                                </div>
                            </div>
                            <div className='folder-actions'>
                                <button
                                    onClick={() => handleFolderAction(folder.id, 'open')}
                                    className='action-button open'
                                >
                                    Open
                                </button>
                                <button
                                    onClick={() => handleFolderAction(folder.id, 'download')}
                                    className='action-button download'
                                >
                                    <FileDownloadIcon />
                                </button>
                                <button
                                    onClick={() => handleFolderAction(folder.id, 'delete')}
                                    className='action-button delete'
                                >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}