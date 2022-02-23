import React, { useMemo } from 'react'
import { useAppSelector } from '../utils/types/reduxHookTypes'
import { ColumnType, DataType } from '../utils/types/types'
import SideNav from './SideNav'
import SportsTable from './SportsTable'
import { Column } from 'react-table'

const App: React.FC = () => {
    const baseballData = useAppSelector(
        (store) => store.baseballHomeNonDivision2017
    )
    const myData = useMemo<DataType[]>(() => baseballData, [])

    const data = useMemo<DataType[]>(
        () => [
            {
                ou: 'Hello',
                record: 'World',
                winPercentage: '0%',
                favRecord: '0-0 / 0%',
                overFavs: '0-0 / 0%',
                dogRecord: '0-0 / 0%',
                notes: '',
            },
            {
                ou: 'Hello',
                record: 'World',
                winPercentage: '0%',
                favRecord: '0-0 / 0%',
                overFavs: '0-0 / 0%',
                dogRecord: '0-0 / 0%',
                notes: '',
            },
            {
                ou: 'Hello',
                record: 'World',
                winPercentage: '0%',
                favRecord: '0-0 / 0%',
                overFavs: '0-0 / 0%',
                dogRecord: '0-0 / 0%',
                notes: '',
            },
        ],
        []
    )

    const columns = useMemo<Column<ColumnType>[]>(
        () => [
            {
                Header: 'O/U',
                accessor: 'ou', // accessor is the "key" in the data
            },
            {
                Header: 'Record',
                accessor: 'record', // accessor is the "key" in the data
            },
            {
                Header: 'Win %',
                accessor: 'winPercentage', // accessor is the "key" in the data
            },
            {
                Header: 'FAV Record / Win %',
                accessor: 'favRecord', // accessor is the "key" in the data
            },
            {
                Header: 'o3.5 for favs',
                accessor: 'overFavs', // accessor is the "key" in the data
            },
            {
                Header: 'DOG Record / Win %',
                accessor: 'dogRecord', // accessor is the "key" in the data
            },
            {
                Header: 'Notes',
                accessor: 'notes',
            },
        ],
        []
    )
    return (
        <div className="flex">
            <SideNav />

            <div className="flex flex-col items-center w-screen ml-28">
                <SportsTable
                    columns={columns}
                    data={myData}
                    name="O/U 2.5 1H RUNS - HOME TEAM"
                    timeline="since 2017 - Jul 26st, 2021"
                />
                <SportsTable
                    columns={columns}
                    data={data}
                    name="O/U 2.5 1H RUNS - HOME TEAM"
                    timeline="2021- as of July 26st"
                />
                <SportsTable
                    columns={columns}
                    data={data}
                    name="DIVISION GAMES - O/U 2.5 1H RUNS - HOME TEAM"
                    timeline="2017 - 2021 as of July 26st"
                />
                <SportsTable
                    columns={columns}
                    data={data}
                    name="DIVISION GAMES - O/U 2.5 1H RUNS - HOME TEAM"
                    timeline="2021 as of July 26th"
                />
            </div>
        </div>
    )
}

export default App
