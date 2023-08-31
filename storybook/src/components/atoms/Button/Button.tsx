import React, { memo } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    shape?: 'square' | 'rounded' | 'pill';
    textAlign?: 'left' | 'center' | 'right';
    onClick?: () => void;
    text?: string;
}

const getClassName = (
    size: string,
    color: string,
    shape: string,
    textAlign: string,
) => {
    return [
        styles[`btn-${size}`],
        styles[`btn-${color}`],
        styles[`btn-${shape}`],
        styles[`btn-${textAlign}`],
    ].join(' ');
};
