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
        <div className="my-4">
            <h3 className="text-3xl">{renderTableName(tableName)}</h3>
            <p className="text-base">{timeline}</p>
            <table {...getTableProps()} className="border-white shadow-xl bg-white">
                <thead className="bg-blue-600 text-white shadow-md">
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
                                <tr {...headerGroup.getHeaderGroupProps()} className="text-left border-b-2">
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
                                                <th {...column.getHeaderProps()} className="px-8 py-2">
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
                                                        className={`px-8 py-2`}
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
