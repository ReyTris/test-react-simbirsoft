
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CompetitionMatchCard from '../../components/CompetitionMatchCard/CompetitionMatchCard'
import { useFetching } from '../../components/hooks/useFetching'
import Loader from '../../components/UI/Loader/Loader'
import ApiService from '../../http/api'
import { Pagination } from 'antd';

import styles from './CompetitionMatches.module.css'

const CompetitionMatch = () => {
    const params = useParams()
    const [matches, setMatches] = useState([])
    const [nameLeague, setNameLeague] = useState([])
    const [fetchCompetitionsMatches, isLoading, error] = useFetching( async() => {
        const response = await ApiService.getCompetitionMatches(params.id)
        setMatches(response.data.matches)
        setNameLeague(response.data.competition.name) 
    })
    
    useEffect(() => {
        fetchCompetitionsMatches()
        console.log(matches)
    }, [])
    return ( 
        <div>
            {error && <h1>Error ${error}</h1>}
            {isLoading 

                ?   <div style={{display:'flex', justifyContent: 'center'}}>
                        <Loader/>
                    </div>

                :   <div className="">
                        <div className={styles.cardsBlock}>
                            {
                                matches.map(match => {
                                    return (
                                        <div key={match.id}>
                                            <CompetitionMatchCard nameLeague={nameLeague} match={match}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Pagination defaultCurrent={1} defaultPageSize={9} total={50} />
                    </div>
            }
        </div>
    )
}

export default CompetitionMatch
