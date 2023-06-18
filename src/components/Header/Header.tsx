import React from 'react'
import logoUrl from '../Header/myauto.png'

export default function Header() {
    const handleRefresh = () => {
        window.location.reload();
        console.log('click')
    };

    return (
        <header>
            <div className="container">
                <div>
                    <img
                        className="offset-10 pt-4"
                        src={logoUrl}
                        alt=""
                        onClick={handleRefresh}
                    />
                </div>
            </div>
        </header>

    )
}