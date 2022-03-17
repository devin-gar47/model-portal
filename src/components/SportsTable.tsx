import React from 'react'
import { Column, TableOptions, useTable } from 'react-table'
import { BASEBALL_TABLE_NAMES } from '../utils/enums'
import { getCellBackgroundColor } from '../utils/table'
import { ColumnType } from '../utils/types/types'
import EditableCell from './table/EditableCell'

interface Props {
    columns: Column<ColumnType>[]
    data: readonly ColumnType[]
    tableName: string
    timeline: string
}

function renderTableName(tableName: string): string {
    switch (tableName) {
        case BASEBALL_TABLE_NAMES.baseballHomeNonDivision:
            return 'O/U 2.5 1H RUNS - HOME TEAM'
        case BASEBALL_TABLE_NAMES.baseballHomeDivision:
            return 'DIVISION GAMES - O/U 2.5 1H RUNS - HOME TEAM'
        case BASEBALL_TABLE_NAMES.baseballHomeNonDivision2022:
            return '2022 O/U 2.5 1H RUNS - HOME TEAM'
        case BASEBALL_TABLE_NAMES.baseballHomeDivision2022:
            return 'DIVISION GAMES - 2022 O/U 2.5 1H RUNS - HOME TEAM'
        default:
            return ''
    }
}

const SportsTable: React.FC<Props> = ({ columns, data, tableName, timeline }) => {
    const defaultColumn = {
        Cell: EditableCell,
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
        defaultColumn,
        tableName,
    })

    return (
        <div className="my-4 flex flex-col items-center">
            <h3 className="text-left font-semibold text-2xl w-0 min-w-full">{renderTableName(tableName)}</h3>
            <p className="text-left w-0 min-w-full text-base">{timeline}</p>
            <table {...getTableProps()} className="inline-block overflow-x-auto border-t-4 border-b-4 border-black">
                <thead className="bg-white text-sky-500 text-sm shadow-md">
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
                                <tr {...headerGroup.getHeaderGroupProps()} className="border-b-2">
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
                                                <th {...column.getHeaderProps()} className="text-left p-3">
                                                    {
                                                        // Render the header
                                                        column.render('Header')
                                                    }
                                                </th>
                                            )
                                        )
                                    }
                                </tr>
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
                                                        className="px-3 py-2 text-sm"
                                                        style={{
                                                            backgroundColor: `rgba(${getCellBackgroundColor(
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
    )
}

export default SportsTable
