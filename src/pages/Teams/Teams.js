import React, { useEffect } from 'react'
import { useState } from 'react';
import { useFetching } from '../../components/hooks/useFetching';
import TeamsList from '../../components/TeamsList/TeamsList';
import Loader from '../../components/UI/Loader/Loader';
import ApiService from '../../http/api';

const Teams = () => {
    const [teams, setTeams] = useState([])
    const [fetchTeams, isLoading, error] = useFetching(async () => {
        const response = await ApiService.getAllTeams()
        setTeams(response.data.teams)
        console.log(response.data.teams)
    })

    useEffect(() => {
        fetchTeams()
    }, [])

    return (
        <div>
            {error && <h1>Error ${error}</h1>}
            {isLoading
                ?   <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Loader />
                    </div>

                :   <div>
                        <TeamsList teams={teams} />
                    </div>
            }

        </div>
    )
}

export default Teams
