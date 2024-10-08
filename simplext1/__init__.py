from .handlers import setup_handlers

try:
    from ._version import __version__
except ImportError:
    # Fallback when using the package in dev mode without installing
    # in editable mode with pip. It is highly recommended to install
    # the package from a stable release or in editable mode: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
    import warnings

    warnings.warn("Importing 'simplext1' outside a proper installation.")
    __version__ = "dev"


def _jupyter_labextension_paths():
    return [{"src": "labextension", "dest": "simplext1"}]


def _jupyter_server_extension_paths():
    return [{"module": "simplext1"}]


def _jupyter_server_extension_points():
    """
    Returns a list of dictionaries with metadata describing
    where to find the `_load_jupyter_server_extension` function.
    """
    return [{"module": "simplext1"}]


def load_jupyter_server_extension(nb_server_app):
    web_app = nb_server_app.web_app
    setup_handlers(web_app)
    nb_server_app.log.info("Simplext1 loaded successfully!")
