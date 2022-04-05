import React, { useEffect, useMemo } from 'react'
import { ColumnType, DataType } from '../utils/types/types'
import SportsTable from './SportsTable'
import { useAppSelector } from '../redux/hooks'
import { BASEBALL_TABLE_NAMES } from '../utils/enums'
import { Column } from 'react-table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReadOnly from './table/ReadOnly'
import Login from './page-entry/Login'
import CalculationsTable from './CalculationsTable'

const App: React.FC = () => {
    const baseballHomeNonDivisionData = useAppSelector((store) => store.baseballHomeNonDivision2017)
    const baseballHomeDivisionData = useAppSelector((store) => store.baseballHomeDivision2017)
    const baseballHomeNonDivision2022Data = useAppSelector((store) => store.baseballHomeNonDivision2022)
    const baseballHomeDivision2022Data = useAppSelector((store) => store.baseballHomeDivision2022)

    const baseballVisitorNonDivisionData = useAppSelector((store) => store.baseballVisitorNonDivision2017)
    const baseballVisitorDivisionData = useAppSelector((store) => store.baseballVisitorDivision2017)
    const baseballVisitorNonDivision2022Data = useAppSelector((store) => store.baseballVisitorNonDivision2022)
    const baseballVisitorDivision2022Data = useAppSelector((store) => store.baseballVisitorDivision2022)

    const testData = useAppSelector((store) => store.homeCalculationTable)
    const token = useAppSelector((store) => store.userInformation.token)

    const columns = useMemo<Column<ColumnType>[]>(
        () => [
            {
                Header: 'O/U',
                accessor: 'ou', // accessor is the "key" in the data
                Cell: ReadOnly,
            },
            {
                Header: 'G1 FAV o2.5',
                accessor: 'g1_fav_o2point5', // accessor is the "key" in the data
            },
            {
                Header: 'G1 FAV o1.5/3.5',
                accessor: 'g1_fav_o1point5OR3point5', // accessor is the "key" in the data
            },
            {
                Header: 'G1 DOG o2.5',
                accessor: 'g1_dog_o2point5', // accessor is the "key" in the data
            },
            {
                Header: 'G1 DOG o1.5/3.5',
                accessor: 'g1_dog_o1point5OR3point5', // accessor is the "key" in the data
            },
            {
                Header: 'FAV o2.5',
                accessor: 'fav_o2point5', // accessor is the "key" in the data
            },
            {
                Header: 'FAV o1.5/3.5',
                accessor: 'fav_o1point5OR3point5',
            },
            {
                Header: 'DOG o2.5',
                accessor: 'dog_o2point5',
            },
            {
                Header: 'DOG o1.5/3.5',
                accessor: 'dog_o1point5OR3point5',
            },
            {
                Header: 'HOME ML (-200+) on o2.5',
                accessor: 'home_mlo2point5',
            },
            {
                Header: 'HOME ML (-200) on o3.5',
                accessor: 'home_mlo3point5',
            },
            {
                Header: 'IF ROAD ML is (-200+), home dog o1.5 is:',
                accessor: 'ifRoadMLOnePointFive',
            },
        ],
        []
    )

    const calculationColumns = useMemo(
        () => [
            {
                Header: 'Game (RoadL/HomeR)',
                accessor: 'game',
            },
            {
                Header: 'ROAD ML',
                accessor: 'road_ml',
            },
            {
                Header: 'HOME ML',
                accessor: 'home_ml',
            },
            {
                Header: 'PICK',
                accessor: 'pick',
            },
            {
                Header: 'O/U',
                accessor: 'ou',
            },
            {
                Header: 'G1?',
                accessor: 'g1',
            },
            {
                Header: 'Division Game?',
                accessor: 'division_game',
            },
            {
                Header: 'Line',
                accessor: 'line',
            },
            {
                Header: 'Over Odds',
                accessor: 'over_odds',
            },
            {
                Header: 'Implied Over Probability',
                accessor: 'implied_over_probability',
            },
            {
                Header: 'Under Odds',
                accessor: 'under_odds',
            },
            {
                Header: 'Implied Under Probability',
                accessor: 'implied_under_probability',
            },
            {
                Header: 'True Over Probability',
                accessor: 'true_over_probability',
            },
            {
                Header: 'True Under Probability',
                accessor: 'true_under_probability',
            },
            {
                Header: 'Suggestion',
                accessor: 'suggestion',
            },
        ],
        []
    )

    function renderPageContent() {
        return (
            <div className="flex flex-col">
                <nav className="flex justify-between p-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
                    <h2 className="text-xl">Model Project</h2>

                    <div>
                        <span>Baseball</span> <span>Football</span>
                    </div>
                </nav>

                <div className="flex flex-col items-center justify-center p-4">
                    <Tabs className="flex flex-col items-center w-full">
                        <TabList className="w-100 flex justify-center">
                            <Tab>Home</Tab>
                            <Tab>Visitor</Tab>
                        </TabList>
                        <TabPanel className="w-full">
                            <SportsTable
                                columns={columns}
                                data={baseballHomeNonDivisionData}
                                tableName={BASEBALL_TABLE_NAMES.baseballHomeNonDivision}
                                timeline="2017-2021"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballHomeDivisionData}
                                tableName={BASEBALL_TABLE_NAMES.baseballHomeDivision}
                                timeline="2017-2021"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballHomeNonDivision2022Data}
                                tableName={BASEBALL_TABLE_NAMES.baseballHomeNonDivision2022}
                                timeline="2022 (Current Season)"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballHomeDivision2022Data}
                                tableName={BASEBALL_TABLE_NAMES.baseballHomeDivision2022}
                                timeline="2022 (Current Season)"
                            />
                            <CalculationsTable columns={calculationColumns} data={testData} />
                        </TabPanel>
                        <TabPanel className="w-full">
                            <SportsTable
                                columns={columns}
                                data={baseballVisitorNonDivisionData}
                                tableName={BASEBALL_TABLE_NAMES.baseballVisitorNonDivision}
                                timeline="2017-2021"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballVisitorDivisionData}
                                tableName={BASEBALL_TABLE_NAMES.baseballVisitorDivision}
                                timeline="2017-2021"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballVisitorNonDivision2022Data}
                                tableName={BASEBALL_TABLE_NAMES.baseballVisitorNonDivision2022}
                                timeline="2022 (Current Season)"
                            />
                            <SportsTable
                                columns={columns}
                                data={baseballVisitorDivision2022Data}
                                tableName={BASEBALL_TABLE_NAMES.baseballVisitorDivision2022}
                                timeline="2022 (Current Season)"
                            />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }

    useEffect(() => {
        if (!token) {
            window.location.assign('/login')
        }
    }, [])

    return !token ? <p>Loading...</p> : renderPageContent()
}

export default App
