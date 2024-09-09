import React, { useState } from 'react'
import './profile.scss'
import Switch from '@mui/material/Switch';



export default function Profile() {
    const [username, setUsername] = useState("John Doe")

    const [language, setLanguage] = useState('English');

    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    };


    return (
        <div className='profile'>

            <h3>My Account</h3>

            <div className="account-settings">
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input name='username' type="text" value={username} />
                    <button>Change Username</button>
                </div>
                <div className="language">
                    <label htmlFor="language">Language</label>
                    <select id="language" value={language} onChange={handleSelectChange}>
                        <option value="server-problems">English</option>
                        <option value="pricing">German</option>
                        <option value="special-server">Arabic</option>
                        <option value="other">Hindu</option>
                    </select>
                    <a href="/contact">You need help?</a>
                </div>
                <div className="delete-account">
                    <p>Deletion cannot be undone!</p>
                    <button>Delete My Account</button>
                </div>
                <div className="email-natifications">
                    <div className="email-natification-text">Send me email</div>
                    <Switch defaultChecked />
                </div>
            </div>
        </div>
    )
}
