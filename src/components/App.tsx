import React, { useMemo } from 'react'
import { DataType } from '../utils/types/types'
import SideNav from './SideNav'
import SportsTable from './SportsTable'
import { useAppSelector } from '../redux/hooks'
import { BASEBALL_TABLE_NAMES } from '../utils/enums'
import { Column } from 'react-table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const App: React.FC = () => {
    const baseballHomeNonDivisionData = useAppSelector((store) => store.baseballHomeNonDivision2017)
    const baseballHomeDivisionData = useAppSelector((store) => store.baseballHomeDivision2017)
    const baseballHomeNonDivision2022Data = useAppSelector((store) => store.baseballHomeNonDivision2022)
    const baseballHomeDivision2022Data = useAppSelector((store) => store.baseballHomeDivision2022)

    const columns = useMemo<Column<DataType>[]>(
        () => [
            {
                Header: 'O/U',
                accessor: 'ou', // accessor is the "key" in the data
            },
            {
                Header: 'G1 FAV o2.5',
                accessor: 'g1FavTwoPointFive', // accessor is the "key" in the data
            },
            {
                Header: 'G1 FAV o1.5/3.5',
                accessor: 'g1FavOnePointFiveThreePointFive', // accessor is the "key" in the data
            },
            {
                Header: 'G1 DOG o2.5',
                accessor: 'g1DogTwoPointFive', // accessor is the "key" in the data
            },
            {
                Header: 'G1 DOG o1.5/3.5',
                accessor: 'g1DogOnePointFiveThreePointFive', // accessor is the "key" in the data
            },
            {
                Header: 'FAV o2.5',
                accessor: 'favTwoPointFive', // accessor is the "key" in the data
            },
            {
                Header: 'FAV o1.5/3.5',
                accessor: 'favOnePointFiveThreePointFive',
            },
            {
                Header: 'DOG o2.5',
                accessor: 'dogTwoPointFive',
            },
            {
                Header: 'DOG o1.5/3.5',
                accessor: 'dogOnePointFiveThreePointFive',
            },
            {
                Header: 'HOME ML (-200+) on o2.5',
                accessor: 'homeMLTwoPointFive',
            },
            {
                Header: 'HOME ML (-200) on o3.5',
                accessor: 'homeMLThreePointFive',
            },
        ],
        []
    )
    return (
        <div className="flex">
            <SideNav />

            <div className="flex flex-col items-center w-screen ml-28">
                <Tabs>
                    <TabList className="w-full">
                        <Tab>Home</Tab>
                        <Tab>Visitor</Tab>
                    </TabList>
                    <TabPanel>
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
                        <h2>hello</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default App
