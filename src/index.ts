import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';

// import { Widget } from '@lumino/widgets';
// import { CounterWidget } from './widget';
// import { StaticTableWidget } from './StaticTableWidget';
import { DataTableWidget } from './DataTableWidget';

/**
 * Initialization data for the simplext1 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simplext1:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension simplext1 is activated!');

    // Define a widget creator function,
    // then call it to make a new widget
    const newWidget = () => {
      // Create a blank content widget inside of a MainAreaWidget
      const content = new DataTableWidget();
      const widget = new MainAreaWidget({ content });
      widget.id = 'simplext1:widget';
      widget.title.label = 'Simplext 1 Label';
      widget.title.closable = true;
      return widget;
    }
    let widget = newWidget();

    // Add an application command
    const command: string = 'simplext1:open';
    app.commands.addCommand(command, {
      label: 'Open Simplext1',
      execute: () => {
        // Regenerate the widget if disposed
        if (widget.isDisposed) {
          widget = newWidget();
        }
        if (!widget.isAttached) {
          // Attach the widget to the main work area if it's not there
          app.shell.add(widget, 'main');
        }
        // Activate the widget
        app.shell.activateById(widget.id);
      }
    });

    // Add the command to the palette.
    palette.addItem({ command, category: 'Tutorial' });
  }
};

export default plugin;
