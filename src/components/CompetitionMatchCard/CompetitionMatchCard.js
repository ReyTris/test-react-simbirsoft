import React from 'react'
import moment from 'moment'

import styles from './CompetitionMatchCard.module.css'

const CompetitionMatchCard = ({nameLeague, match}) => {
    const {awayTeam, homeTeam, utcDate} = match

    let dateFormat = moment.utc(utcDate).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.title}>
                {nameLeague}
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

export default CompetitionMatchCard
