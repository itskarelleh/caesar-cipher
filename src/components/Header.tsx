import React from 'react';

export default function Header({ title, subtitle }:any) {
    return (
        <div className="h-100 w-100 d-flex align-items-center">
            <header className="mb-3 mb-sm-0 w-100" style={{ textAlign: "center"}}>
                <h2 className="h2">{title}</h2>
                <h4 className="h4">{subtitle}</h4>
            </header>
        </div>
        
    )
}