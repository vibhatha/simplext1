import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the simplext1 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simplext1:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension simplext1 is activated!');
  }
};

export default plugin;
