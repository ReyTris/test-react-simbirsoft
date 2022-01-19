
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CompetitionMatchCard from '../../components/CompetitionMatchCard/CompetitionMatchCard'
import { useFetching } from '../../components/hooks/useFetching'
import Loader from '../../components/UI/Loader/Loader'
import ApiService from '../../http/api'
import { Pagination, Button } from 'antd';

import styles from './CompetitionMatches.module.css'

const CompetitionMatch = () => {
    const params = useParams()
    const goBack = useNavigate()
    const [matches, setMatches] = useState([])
    const [nameLeague, setNameLeague] = useState([])
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(12)
    const [fetchCompetitionsMatches, isLoading, error] = useFetching(async () => {
        const response = await ApiService.getCompetitionMatches(params.id)
        setMatches(response.data.matches)
        setNameLeague(response.data.competition.name)
    })

    const numEachPage = 12

    function handleChange(value) {
        setMinValue((value - 1) * numEachPage)
        setMaxValue(value * numEachPage)
    }

    useEffect(() => {
        fetchCompetitionsMatches()
        console.log(matches)
    }, [])
    return (
        <div>
            {error && <h1>Error ${error}</h1>}
            {isLoading

                ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>

                : <div className="">
                    <Button
                        type="text"
                        style={{ marginBottom: '30px', color: '#1890ff' }}
                        onClick={() => goBack('/competitions')}
                    >
                        Назад
                    </Button>
                    <div className={styles.cardsBlock}>
                        {
                            matches.slice(minValue, maxValue).map(match => {
                                return (
                                    <div key={match.id}>
                                        <CompetitionMatchCard nameLeague={nameLeague} match={match} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        total={matches.length}
                        onChange={handleChange}
                        showSizeChanger={true}
                    />
                </div>
            }
        </div>
    )
}

export default CompetitionMatch
