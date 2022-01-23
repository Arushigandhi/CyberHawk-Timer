import React, { useState } from 'react';
import styles from "./timer.module.css";
import CountdownTimer from './CountdownTimer';
import logo from './Vector.png';
import Rules from './Rules';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import ControlledPopup from './ControlledPopup'

function Timer() {
    const DayshoursMinSecs = {days :1,hours:1, minutes: 20, seconds: 40}
    return (
        <div className={styles.bg}>
        <div className={styles.hero}>
            <div className={styles.img}>
                <img src ={logo}></img>
            </div>
            <div className={styles.title}>
                <div className={styles.cyber}>CYBER</div>
                <div className={styles.hawk}>HAWK</div>
            </div>
            <div className={styles.tagline}>The Hawk Lands In</div>
            <CountdownTimer DayshoursMinSecs={DayshoursMinSecs}/>
            <div className={styles.units}>
                <div className={styles.day}>Days </div>
                <div className={styles.hour}>Hours </div>
                <div className={styles.min}>     Minutes </div>
                <div className={styles.second}>     Seconds</div>
            </div>
            <button type="button" className={styles.pop}>Rules</button>
            {/* <Popup open={open} closeOnDocumentClick onClose={closeModal} className={styles.popup_content} position="top center" modal> */}
                <div className ={styles.rules_body}>
                <a className={styles.close}>&times;</a>
                <h1 className = {styles.rules}>Rules</h1>
                <div className={styles.content}>
                    <ul>
                    <li>1.Register at <a href='/'>techtatva.in</a></li>
                    <li>2.Enter the user ID obtained after registering.</li>
                    <li>3.Participants will only be eligible for prizes if they have a valid user ID. </li>
                    <li>4.The validity of the user ID will be checked at the time of declaration of winners.</li>
                    </ul>
                </div>
            </div>
            {/* </Popup> */}
            
            
        </div>
        </div>
    )
}

export default Timer
