import type { NextPage } from 'next'
import { useMemo } from 'react'
import { Column } from 'react-table'
import SideNav from '../components/SideNav'
import SportsTable from '../components/SportsTable'
import { store } from '../redux/store'
import { ColumnType, DataType } from '../utils/types/types'
import { Provider } from 'react-redux'
import { useAppSelector } from '../utils/types/reduxHookTypes'
import App from '../components/App'

const Home: NextPage<{}, {}> = () => {


  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Home
