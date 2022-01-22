import React from 'react'
import { Column, useTable } from 'react-table'
import { ColumnType, DataType } from '../utils/types/types'

interface Props {
    columns: Column<ColumnType>[];
    data: readonly ColumnType[];
}

const SportsTable: React.FC<Props> = ({columns, data}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })
    
    return (
        <div className="mt-4">
          <table {...getTableProps()} className='border-white shadow-xl bg-white-200'>
            <thead className='bg-blue-600 text-white shadow-md'>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()} className='text-left border-b-2'>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th {...column.getHeaderProps()} className='px-8 py-2'>
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
                    <tr {...row.getRowProps()} className='text-left border-b-2'>
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <td {...cell.getCellProps()} className="px-8 py-2">
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

export default SportsTable;