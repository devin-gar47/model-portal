import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useTable } from 'react-table'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateHomeCalculationsTable } from '../redux/reducers/baseball/calculation-table/home/home-calculation-table'
import {
    calculateSuggestion,
    calculateTrueOverProbability,
    calculateTrueUnderProbability,
    getCalculationTableCellBackgroundColor,
    getImpliedProbability,
} from '../utils/calculation-table-utils'
import { FullCalculationTable } from '../utils/types/types'
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
    const nonDivisionTable = useAppSelector((store) => store.baseballHomeNonDivision2017)
    const divisionTable = useAppSelector((store) => store.baseballHomeDivision2017)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/draft-kings/test-get-data`)
            const calculatedArr = data.map((obj: FullCalculationTable) => {
                const impliedOverProbability = getImpliedProbability(obj.over_odds)
                const impliedUnderProbability = getImpliedProbability(obj.under_odds)
                const trueOverProbability = calculateTrueOverProbability(obj, nonDivisionTable, divisionTable)
                const trueUnderProbability = calculateTrueUnderProbability(trueOverProbability)
                const suggestion = calculateSuggestion(
                    trueOverProbability,
                    trueUnderProbability,
                    impliedOverProbability,
                    impliedUnderProbability
                )
                return {
                    ...obj,
                    implied_over_probability: impliedOverProbability,
                    implied_under_probability: impliedUnderProbability,
                    true_over_probability: trueOverProbability,
                    true_under_probability: trueUnderProbability,
                    suggestion,
                }
            })
            dispatch(updateHomeCalculationsTable(calculatedArr))
        }

        getData()
        console.log(process.env.NODE_ENV)
        // const interval = setInterval(async () => {
        //     await getData()
        // }, 3000)
        // return () => clearInterval(interval)
    }, [])

    return (
        <div className="my-5 flex flex-col items-center">
            <div className="w-full">
                <div className="w-full overflow-x-auto block">
                    <table {...getTableProps()} className="inline-block overflow-x-auto table-fixed">
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
                                                                style={{
                                                                    backgroundColor: `rgba(${getCalculationTableCellBackgroundColor(
                                                                        cell
                                                                    )}, 0.6)`,
                                                                    opacity: 0.9,
                                                                }}
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
