import axios from 'axios'
import { objOf } from 'ramda'
import React, { useEffect, useRef, useState } from 'react'
import { useTable } from 'react-table'
import { useAppDispatch } from '../redux/hooks'
import { updateHomeCalculationsTable } from '../redux/reducers/baseball/calculation-table/home/home-calculation-table'
import { getImpliedProbability } from '../utils/calculation-table-utils'
import ReadOnly from './table/ReadOnly'

interface Props {
    columns: any
    data: any
    defaultColumn?: any
}

const CalculationsTable: React.FC<Props> = ({ data, columns }) => {
    const defaultColumn = {
        Cell: ReadOnly,
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
        defaultColumn,
    })

    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axios.get('http://localhost:3030/test')
    //         return data.data.message
    //     }
    //     const message = getData()
    //     console.log(message)
    // const interval = setInterval(async () => {
    //     // console.log('This will run every second!');
    //     const message = await getData()
    //     console.log(message)
    // }, 4000)
    // return () => clearInterval(interval)
    // }, [])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:3030/draft-kings/test-get-data')
            const calculatedArr = data.map((obj: any) => {
                const impliedOverProbability = getImpliedProbability(obj.over_odds)
                return { ...obj, implied_over_probability: impliedOverProbability }
            })
            dispatch(updateHomeCalculationsTable(calculatedArr))
        }

        getData()
        // const interval = setInterval(async () => {
        //     getData()
        // }, (1000 * 60) * .5)
        // return () => clearInterval(interval)
    }, [])

    return (
        <div className="my-5 flex flex-col items-center">
            <div className="w-full">
                <div className="w-full overflow-x-auto block">
                    <table
                        {...getTableProps()}
                        className="inline-block overflow-x-auto table-fixed border-b-4 border-b-black"
                    >
                        <thead className="bg-white text-sky-500 text-sm shadow-md whitespace-nowrap">
                            {
                                // Loop over the header rows
                                headerGroups.map(
                                    (headerGroup: {
                                        getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                                            React.ClassAttributes<HTMLTableRowElement> &
                                            React.HTMLAttributes<HTMLTableRowElement>
                                        headers: any[]
                                    }) => (
                                        // Apply the header row props
                                        <>
                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                {
                                                    // Loop over the headers in each row
                                                    headerGroup.headers.map(
                                                        (column: {
                                                            getHeaderProps: () => JSX.IntrinsicAttributes &
                                                                React.ClassAttributes<HTMLTableHeaderCellElement> &
                                                                React.ThHTMLAttributes<HTMLTableHeaderCellElement>
                                                            render: (
                                                                arg0: string
                                                            ) =>
                                                                | boolean
                                                                | React.ReactChild
                                                                | React.ReactFragment
                                                                | React.ReactPortal
                                                                | null
                                                                | undefined
                                                        }) => (
                                                            // Apply the header cell props
                                                            <>
                                                                <th
                                                                    {...column.getHeaderProps()}
                                                                    className={`text-left p-3 min-w-fit`}
                                                                >
                                                                    {
                                                                        // Render the header
                                                                        column.render('Header')
                                                                    }
                                                                </th>
                                                            </>
                                                        )
                                                    )
                                                }
                                            </tr>
                                        </>
                                    )
                                )
                            }
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                // Loop over the table rows
                                rows.map((row: any) => {
                                    // Prepare the row for display
                                    prepareRow(row)
                                    return (
                                        // Apply the row props
                                        <tr {...row.getRowProps()} className="text-left border-b-2">
                                            {
                                                // Loop over the rows cells
                                                row.cells.map(
                                                    (cell: {
                                                        getCellProps: () => JSX.IntrinsicAttributes &
                                                            React.ClassAttributes<HTMLTableDataCellElement> &
                                                            React.TdHTMLAttributes<HTMLTableDataCellElement>
                                                        render: (
                                                            arg0: string
                                                        ) =>
                                                            | boolean
                                                            | React.ReactChild
                                                            | React.ReactFragment
                                                            | React.ReactPortal
                                                            | null
                                                            | undefined
                                                    }) => {
                                                        // Apply the cell props
                                                        return (
                                                            <td
                                                                {...cell.getCellProps()}
                                                                className="px-3 py-2 text-sm min-w-fit whitespace-nowrap"
                                                            >
                                                                {
                                                                    // Render the cell contents
                                                                    cell.render('Cell')
                                                                }
                                                            </td>
                                                        )
                                                    }
                                                )
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CalculationsTable
