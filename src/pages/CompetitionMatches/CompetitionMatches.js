
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CompetitionMatchCard from '../../components/CompetitionMatchCard/CompetitionMatchCard'
import { useFetching } from '../../components/hooks/useFetching'
import Loader from '../../components/UI/Loader/Loader'
import ApiService from '../../http/api'

const CompetitionTeam = () => {
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
    }, [])
    return ( 
        <div>
            {error && <h1>Error ${error}</h1>}
            {isLoading 

                ?   <div style={{display:'flex', justifyContent: 'center'}}>
                        <Loader/>
                    </div>
        
                :   <div>
                        <CompetitionMatchCard nameLeague={nameLeague} matches={matches}/>
                    </div>
                // :   <div>
                //         {
                //             matches.map(match => {
                //                 return (
                //                     <div>
                //                         <CompetitionMatchCard nameLeague={nameLeague} match={match}/>
                //                     </div>
                //                 )
                //             })
                //         }
                //     </div>
            }
        </div>
    )
}

export default CompetitionTeam
