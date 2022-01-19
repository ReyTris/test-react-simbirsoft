import React, { useEffect } from 'react'
import { useState } from 'react';
import CompetitionsList from '../../components/CompetitionsList/CompetitionsList';
import { useFetching } from '../../components/hooks/useFetching';
import Loader from '../../components/UI/Loader/Loader';
import ApiService from '../../http/api';

const Competitions = () => {
    const accessLeguesList = [
        'FIFA World Cup',
        'UEFA Champions League',
        'Bundesliga',
        'Eredivisie',
        'Campeonato Brasileiro Série A',
        'Primera Division',
        'Ligue One',
        'Championship',
        'Primeira Liga',
        'European Championship',
        'Serie A',
        'Premier League',
        'Copa Libertadores'
    ]
    
    const [leagues, setLeagues] = useState([])
    const [fetchCompetitions, isLoading, error] = useFetching(async () => {
        const competitions = await ApiService.getAllCompetitions()
        setLeagues(competitions.data.competitions)
    })

    //фильтр доступных лиг с API
    const leagueName =  leagues.map(league => league.name),
          accessLeague = leagueName.filter(item => accessLeguesList.includes(item)),
          accessApiLeague = leagues.filter(item => accessLeague.includes(item.name))
    
    useEffect(() => {
        fetchCompetitions()
        console.log(leagues)
    },[])

    return (
        <div>
            {error && <h1>Error ${error}</h1>}
            { isLoading
              ? <div style={{display:'flex', justifyContent: 'center'}}>
                  <Loader/>
                </div>
              : <div>
                    <CompetitionsList leagues={accessApiLeague}/>
                </div>
            }
        </div>
    )
}

export default Competitions
