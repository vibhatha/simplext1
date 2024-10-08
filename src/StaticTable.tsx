import React from 'react'
import { Table } from 'react-bootstrap'

const StaticTableComponent: React.FC = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Scipy</td>
                        <td>1.0.0</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Numpy</td>
                        <td>1.0.0</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default StaticTableComponent;