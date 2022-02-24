import React from 'react'
import { Column, useTable } from 'react-table'
import { getCellBackgroundColor } from '../utils/table'
import { ColumnType } from '../utils/types/types'
import EditableCell from './table/EditableCell'

interface Props {
    columns: Column<ColumnType>[]
    data: readonly ColumnType[]
    name: string
    timeline: string
}
const defaultColumn = {
    Cell: EditableCell,
}

const SportsTable: React.FC<Props> = ({ columns, data, name, timeline }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
        defaultColumn,
    })

    return (
        <div className="my-4">
            <h3 className="text-3xl">{name}</h3>
            <p className="text-base">{timeline}</p>
            <table {...getTableProps()} className="border-white shadow-xl bg-white">
                <thead className="bg-blue-600 text-white shadow-md">
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()} className="text-left border-b-2">
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()} className="px-8 py-2">
                                            {
                                                // Render the header
                                                column.render('Header')
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        rows.map((row) => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()} className="text-left border-b-2">
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className={`px-8 py-2`}
                                                    style={{
                                                        backgroundColor: `rgba(${getCellBackgroundColor(cell)}, 0.6)`,
                                                        opacity: 0.9,
                                                    }}
                                                >
                                                    {
                                                        // Render the cell contents
                                                        cell.render('Cell')
                                                    }
                                                </td>
                                            )
                                        })
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
