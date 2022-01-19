import React from 'react'
import moment from 'moment'

import styles from './TeamMatchCard.module.css'

const TeamMatchCard = ({match}) => {
    const {awayTeam, homeTeam, utcDate, competition} = match

    let dateFormat = moment.utc(utcDate).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.title}>
                {competition.name}
            </div>
            <div className={styles.block}>
                <div className={styles.away}>
                    {awayTeam.name}
                </div>
                <div className={styles.vs}>vs</div>
                <div className={styles.home}>
                    {homeTeam.name}
                </div>
            </div>
            <div className={styles.date}>
                {dateFormat}
            </div>
        </div>
    )
}

export default TeamMatchCard