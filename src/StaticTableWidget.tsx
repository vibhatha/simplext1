import React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';
import StaticTableComponent from './StaticTable';

export class StaticTableWidget extends ReactWidget {

    constructor() {
        super();
        // this.addClass('jp-react-widget');
    }

    render(): JSX.Element {
        return <StaticTableComponent />;
    }
}