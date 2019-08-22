import React from 'react';

export function ProfileContainer({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}
    style={{paddingTop: 20, position: 'fixed', paddingBottom: 20, height: "auto", width: "950px", alignContent: 'center', left: '10%', opacity: "100%"}}>{children}</div>
}