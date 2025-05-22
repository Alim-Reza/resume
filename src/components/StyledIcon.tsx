import React from 'react';
import { IconType } from 'react-icons';

interface StyledIconProps {
    icon: IconType;
}

export const StyledIcon: React.FC<StyledIconProps> = ({ icon: IconComponent }) => {
    return (
        <IconComponent 
            style={{
                marginTop: '3px',
                marginRight: '3px',
                color: '#098bff'
            }}
        />
    );
};