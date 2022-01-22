import type { NextPage } from 'next'
import { useMemo } from 'react'
import { Column, useTable } from 'react-table'
import SideNav from '../components/SideNav'
import SportsTable from '../components/SportsTable'
import { ColumnType, DataType } from '../utils/types/types'

const Home: NextPage<{}, {}> = () => {

  const data = useMemo<DataType[]>(
    () => [
      {
        ou: 'Hello',
        record: 'World',
        winPercentage: '0%',
        favRecord: '0-0 / 0%',
        overFavs: '0-0 / 0%',
        dogRecord: '0-0 / 0%',
        notes: ''
      },
      {
        ou: 'Hello',
        record: 'World',
        winPercentage: '0%',
        favRecord: '0-0 / 0%',
        overFavs: '0-0 / 0%',
        dogRecord: '0-0 / 0%',
        notes: ''
      },
      {
        ou: 'Hello',
        record: 'World',
        winPercentage: '0%',
        favRecord: '0-0 / 0%',
        overFavs: '0-0 / 0%',
        dogRecord: '0-0 / 0%',
        notes: ''
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

      <div className="flex flex-col items-center h-screen w-screen overflow-y-auto mb-8">

        <SportsTable columns={columns} data={data} />
        <SportsTable columns={columns} data={data} />
        <SportsTable columns={columns} data={data} />
        <SportsTable columns={columns} data={data} />

      </div>
    </div>
  )
}

export default Home
