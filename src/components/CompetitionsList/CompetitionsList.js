import React from 'react'
import { Table } from 'antd';
const CompetitionsList = ({leagues}) => {
    const columns = [
        {
          title: 'Лига',
          dataIndex: 'name',
          key: 'name',
        }
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
                onRow={(record, rowIndex) => {
                    return {
                      onClick: event => {console.log(record)},
                    };
                }}
            />
        </div>
    )
}

export default CompetitionsList
