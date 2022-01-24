import {React} from 'react'
import { Table, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
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
            responsive: ["md"]
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
            responsive: ["md"]
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
            render: () => <div style={{display: 'flex', justifyContent: 'center'}}><Button type="primary" shape="circle" icon={<SearchOutlined />} /></div>
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
