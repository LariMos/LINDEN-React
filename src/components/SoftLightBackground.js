import React from 'react';
import './styles.css';  // Path to the CSS file containing your keyframe animation

function SoftLightBackground() {
    const lightPassStyle = {
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.7))',
        backgroundSize: '200% 100%',
        animation: 'lightPass 5s infinite'
    };

    return (
        <div style={lightPassStyle} className="h-screen w-full flex items-center justify-center">
            <h1 className="text-white">Soft Light Passing Effect</h1>
        </div>
    );
}

export default SoftLightBackground;
