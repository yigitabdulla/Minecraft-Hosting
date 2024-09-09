import React, { useEffect, useState } from 'react'
import './contact.scss'

export default function Contact() {
    const [selectedIssue, setSelectedIssue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedIssue(event.target.value);
    };

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading-screen">
                    <img src="/portal-animation.gif" alt="Loading..." />
                </div>
            ) :
                <div className='contact'>
                    <h3>Contact Us</h3>
                    <form action="">
                        <input type="text" required placeholder='Full Name' />
                        <input type="email" required placeholder='E-mail' />
                        <select id="issue-select" value={selectedIssue} onChange={handleSelectChange}>
                            <option value="" disabled selected>Select a topic</option>
                            <option value="server-problems">Server problems</option>
                            <option value="pricing">Pricing</option>
                            <option value="special-server">Special Server</option>
                            <option value="other">Other</option>
                        </select>
                        <textarea cols={50} rows={7} placeholder='Please write your question'></textarea>
                        <button>Send</button>
                    </form>
                </div>
            }


        </>
    )
}
