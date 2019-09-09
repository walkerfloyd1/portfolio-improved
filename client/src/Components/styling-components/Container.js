import React from 'react';

export function Container({
    children
}) {
    return <div className="container"
    style={{ 
        paddingTop: 20, 
        top: '20%', 
        left: '40%', 
        position: 'absolute', 
        paddingBottom: 20,
        backgroundColor: 'white'}}>{children}</div>
}

