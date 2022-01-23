import {React} from 'react'
import { Image, Table } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input'


const TeamsList = ({teams}) => {

    const router = useNavigate()
    const columns = [
        {
            title: 'Лого',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <Image style={{height: '50px'}} src={image}/>
        },
        {
            title: 'Название Лиги',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Страна',
            dataIndex: 'area',
            key: 'area',
            responsive: ["md"]
        },
        {
            title: 'Стадион',
            dataIndex: 'venue',
            key: 'venue',
            responsive: ["md"]
        },
        {
            title: 'Просмотр игр',
            key: 'operation',
            fixed: 'right',
            width: 200,
            onCell:(record, rowIndex) => {
                return {
                  onClick: event => {router(`/teams/${record.key}/matches`)}
                };
            },
            render: () => <div><Button style={{marginLeft: '25%'}} type="primary" shape="circle" icon={<SearchOutlined />} /></div>
        },
      ];
    const nameLeague = teams.map(team => {
        return {
            key: team.id,
            name: team.name,
            image: team.crestUrl,
            area: team.area.name,
            venue: team.venue
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

export default TeamsList
