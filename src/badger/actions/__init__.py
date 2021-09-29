from pkg_resources import get_distribution
from ..factory import BADGER_PLUGIN_ROOT, BADGER_EXTENSIONS
from ..utils import yprint


def show_info(args):
    info = {
        'name': 'Badger the optimizer',
        'version': get_distribution('badger-opt').version,
        'plugin root': BADGER_PLUGIN_ROOT,
    }

    extensions = list(BADGER_EXTENSIONS.keys())
    if extensions:
        info['extensions'] = extensions

    yprint(info)
    # print(f'Badger the optimizer')
    # print('====================')
    # print(f'version      : {version}')
    # print(f'plugins root : {BADGER_PLUGIN_ROOT}')