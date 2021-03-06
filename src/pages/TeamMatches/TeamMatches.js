
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../../components/hooks/useFetching'
import Loader from '../../components/UI/Loader/Loader'
import ApiService from '../../http/api'
import { Pagination, Button } from 'antd';
import SearchInput, {createFilter} from 'react-search-input'

import styles from './TeamMatches.module.css'
import TeamMatchCard from '../../components/TeamMatchCard/TeamMatchCard'

const KEYS_TO_FILTERS = ['awayTeam.name', 'homeTeam.name', 'utcDate']

const TeamMatches = () => {
    const params = useParams()
    const goBack = useNavigate()
    const [matches, setMatches] = useState([])
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(12)
    const [searchTerm, setSearchTerm] = useState('')
    const [fetchCompetitionsMatches, isLoading, error] = useFetching(async () => {
        const response = await ApiService.getTeamMatches(params.id)
        setMatches(response.data.matches)
    })

    const numEachPage = 12

    function handleChange(value) {
        setMinValue((value - 1) * numEachPage)
        setMaxValue(value * numEachPage)
    }

    const filteredEmails = matches.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

    function searchUpdated(term) {
        setSearchTerm(term)
    }

    useEffect(() => {
        fetchCompetitionsMatches()
    }, [])
    return (
        <div>
            {error && <h1>Данные не удалось получить</h1>}
            {isLoading

                ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </div>

                : <div className="">
                    <Button
                        type="text"
                        style={{ marginBottom: '30px', color: '#1890ff' }}
                        onClick={() => goBack('/teams')}
                    >
                        Назад
                    </Button>
                    <SearchInput style={{marginBottom: '20px'}} onChange={searchUpdated} />
                    <div className={styles.cardsBlock}>
                        {
                            filteredEmails.slice(minValue, maxValue).map(match => {
                                return (
                                    <div key={match.id}>
                                        <TeamMatchCard match={match} />
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

export default TeamMatches
