import {React} from 'react'
import { Table } from 'antd';
import ViewButton from '../UI/Buttons/ViewButton';
import {useNavigate } from 'react-router-dom';
const CompetitionsList = ({leagues}) => {

    // const getTeams= (id) => {
    //     const [fetchCompetitionsTeams, isLoading, error] = useFetching(async () => {
    //         const competitions = await ApiService.getCompetitionTeams()
    //         setLeagues(competitions.data.competitions)
    //     })

    //     useEffect(() => {
    //         fetchCompetitionsTeams(id)
    //     })
    // }
    const router = useNavigate()
    
    const columns = [
        {
            title: 'Лига',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 200,
            onCell:(record, rowIndex) => {
                return {
                  onClick: event => {router(`/competitions/${record.key}/teams`)}
                };
            },
            render: () => 
                <ViewButton/>
        },
      ];
    const nameLeague = leagues.map(league => {
        return {
            key: league.id, 
            name: league.name
        }
    })
    return (
        <div>
            <Table
                key={nameLeague.key} 
                columns={columns} 
                dataSource={nameLeague} 
            />
        </div>
    )
}

export default CompetitionsList
