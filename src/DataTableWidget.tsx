import React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';

import DataTable from './DataTable';
import DataObject from './DataObject';


export class DataTableWidget extends ReactWidget {
    private data: DataObject[] = [];
    constructor() {
        super();
        this.addClass('')
        this.loadData();
    }

    async loadData() {
        const response = await fetch('/v2/pip-list');
        if (!response.ok) {
            console.log("Error occurred in retrieving data!");
        }
        const result = await response.json();
        this.data = result.map((pkg: any, index: number) => ({
            id: index + 1,
            name: pkg.name,
            version: pkg.version
        }));
        console.log("Data loaded");
        console.log(this.data)
    }

    render(): JSX.Element {
        return <DataTable data={this.data} />;
    }

}