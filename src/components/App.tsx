import React, { useMemo } from 'react'
import { ColumnType, DataType } from '../utils/types/types'
import SportsTable from './SportsTable'
import { useAppSelector } from '../redux/hooks'
import { BASEBALL_TABLE_NAMES } from '../utils/enums'
import { Column } from 'react-table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ReadOnly from './table/ReadOnly'

const App: React.FC = () => {
    const baseballHomeNonDivisionData = useAppSelector((store) => store.baseballHomeNonDivision2017)
    const baseballHomeDivisionData = useAppSelector((store) => store.baseballHomeDivision2017)
    const baseballHomeNonDivision2022Data = useAppSelector((store) => store.baseballHomeNonDivision2022)
    const baseballHomeDivision2022Data = useAppSelector((store) => store.baseballHomeDivision2022)

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

    return (
        <div className="flex flex-col">
            <nav className="flex justify-between p-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
                <h2 className="text-xl">Model Project</h2>

                <div>
                    <span>Baseball</span> <span>Football</span>
                </div>
            </nav>
            {/* <SideNav /> */}

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
                    </TabPanel>
                    <TabPanel>
                        <h2>Coming soon!</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default App
