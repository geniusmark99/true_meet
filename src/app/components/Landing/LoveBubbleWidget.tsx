"use client";
import React from "react";
import styles from "./LoveBubble.module.css";

const LoveBubbleWidget: React.FC = () => {
    return (
        <div>
            <div className={styles.loveContainer}>
                {/* dreamy bubbles */}
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>

                {/* love heart svg */}
                <svg
                    className={styles.loveSvg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                >
                    <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                </svg>
            </div>
        </div>
    );
};

export default LoveBubbleWidget;
