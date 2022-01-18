import React from 'react'
import { Card, Col, Row } from 'antd';

const CompetitionMatchCard = ({nameLeague, matches}) => {
    return (
        <Row gutter={[24, 24]}>
                {
                    matches.map(match => {
                        return (
                            <Col xs={24} md={{span: 12}}>
                                <Card title={nameLeague} bordered={false} key={match.id}>
                                    {match.id}
                                </Card>
                            </Col>
                        )
                    })
                }
        </Row>
    )
}

export default CompetitionMatchCard
