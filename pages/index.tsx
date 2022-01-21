import type { NextPage } from 'next'
import { FaBaseballBall, FaFootballBall } from 'react-icons/fa'
import MyIcon from '../components/MyIcon'

const Home: NextPage<{}, {}> = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen bg-neutral-50  w-28 items-center shadow-md border-r-2">
        <MyIcon
          Icon={FaFootballBall}
          sport="Football"
          iconBackgroundColor="#78350f"
        />
        <MyIcon
          Icon={FaBaseballBall}
          sport="Baseball"
          iconBackgroundColor="#a8a29e"
        />
      </div>

      <div className="flex justify-center w-screen">
        <div>
          <table>
            <tr className="text-left border-b-2">
              <th className='p-1'>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr className="text-left border-b-2">
              <td className='p-2'>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr className="text-left border-b-2">
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
