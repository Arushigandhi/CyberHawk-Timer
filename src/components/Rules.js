import React from 'react'
import styles from './rules.module.css'

function Rules() {
    return (
        <div>
            <div className ={styles.rules_body}>
                <button className={styles.close}>X</button>
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
            
        </div>
    )
}

export default Rules
