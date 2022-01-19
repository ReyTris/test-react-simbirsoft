import {React} from 'react'
import { Table } from 'antd';
import ViewButton from '../UI/Buttons/ViewButton';
import {useNavigate } from 'react-router-dom';
const CompetitionsList = ({leagues}) => {

    const router = useNavigate()
    const columns = [
        {
            title: 'Название Лиги',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Место проведения',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Начало сезона',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: 'Конец сезона',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: 'Просмотр участников',
            key: 'operation',
            fixed: 'right',
            width: 200,
            onCell:(record, rowIndex) => {
                return {
                  onClick: event => {router(`/competitions/${record.key}/matches`)}
                };
            },
            render: () => 
                <ViewButton/>
        },
      ];
    const nameLeague = leagues.map(league => {
        return {
            key: league.id, 
            name: league.name,
            area: league.area.name,
            start: league.currentSeason.startDate,
            end: league.currentSeason.endDate,
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
