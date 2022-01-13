import React, { useEffect } from 'react'
import { useState } from 'react';
import CompetitionsList from '../../components/CompetitionsList/CompetitionsList';
import { useFetching } from '../../components/hooks/useFetching';
import Loader from '../../components/UI/Loader/Loader';
import ApiService from '../../http/api';

const Competitions = () => {
    const [leagues, setLeagues] = useState([])
    const [fetchCompetitions, isLoading, error] = useFetching(async () => {
        const competitions = await ApiService.getAllCompetitions()
        setLeagues(competitions.data.competitions)
    })
    
    useEffect(() => {
        fetchCompetitions()
    },[])

    return (
        <div>
            {error && <h1>Error ${error}</h1>}
            { isLoading
              ? <div style={{display:'flex', justifyContent: 'center'}}>
                  <Loader/>
                </div>
              : <div>
                    <CompetitionsList leagues={leagues}/>
                </div>
            }
            
        </div>
    )
}

export default Competitions
