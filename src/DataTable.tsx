import React from 'react'
import { Table } from 'react-bootstrap'
import TableDataProp from './TableDataProp'

const DataTable: React.FC<TableDataProp> = ({ data }) => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pkg) => (
                        <tr key={pkg.id}>
                            <td>{pkg.id}</td>
                            <td>{pkg.name}</td>
                            <td>{pkg.version}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default DataTable;