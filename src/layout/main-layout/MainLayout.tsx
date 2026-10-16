import React from 'react';

import styles from "./MainLayout.module.scss"

import  MapView  from '../../features/map/map-ui/MapView';


interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className={styles.MainLayout}>
        <MapView/>
        </div>
    )
}