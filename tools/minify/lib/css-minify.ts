export const unminify = (code: string, tab: string | number) => {
    let defaultTab = 4,
        space = '';

    if (typeof tab == 'string')
        tab = /^\d+$/.test(tab) ? parseInt(tab) : defaultTab;

    if (typeof tab == 'undefined')
        tab = defaultTab;

    if (tab < 0)
        tab = defaultTab;

    code = code
        .split('\t').join('    ')
        .replace(/\s*{\s*/g, ' {\n    ')
        .replace(/;\s*/g, ';\n    ')
        .replace(/,\s*/g, ', ')
        .replace(/[ ]*}\s*/g, '}\n')
        .replace(/\}\s*(.+)/g, '}\n$1')
        .replace(/\n    ([^:]+):\s*/g, '\n    $1: ')
        .replace(/([A-z0-9\)])}/g, '$1;\n}');

    if (tab != 4) {
	    for (;tab != 0;tab--) { space += ' '; }
	    code = code.replace(/\n    /g, '\n'+space);
    }

    return code;
}