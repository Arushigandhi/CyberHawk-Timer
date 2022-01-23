import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styles from "./timer.module.css";
import 'reactjs-popup/dist/index.css'


const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (
        <div>
            <button type="button" className={styles.pop} onClick={() => setOpen(o => !o)}>Rules</button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal} className={styles.popup_content} position="top center" modal>
                <div className ={styles.modal}>
                <a className={styles.close} onClick={closeModal}>&times;</a>
                <h1 className = {styles.rules}>Rules</h1>
                <div className={styles.content}>
                    <ol>
                    <li>Register at <a href='/'>techtatva.in</a></li>
                    <li>Enter the user ID obtained after registering.</li>
                    <li>Participants will only be eligible for prizes if they have a valid user ID. </li>
                    <li>The validity of the user ID will be checked at the time of declaration of winners.</li>
                    </ol>
                </div>
            </div>
            </Popup>
        </div>
    );
};
export default ControlledPopup;