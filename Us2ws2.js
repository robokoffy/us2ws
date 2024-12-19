function showme() {
    const stop = -1;
    let input = document.formi.wanhasuomi.value.toLowerCase();

    const replacements = [
        { from: 'k', to: 'c' },
        { from: 'v', to: 'w' },
        { from: 'cc', to: 'ck' },
        { from: 'cs', to: 'x' },
        { from: 'uo', to: 'oo' },
        { from: 'uu', to: 'w' },
        { from: 'hd', to: 'dh' },
        { from: 'ii', to: 'ij' },
        { from: 'ts', to: 'tz' },
        { from: 'ht', to: 'ct' },
        { from: 'lt', to: 'ld' },
        { from: 'mp', to: 'mb' },
        { from: 'rt', to: 'rdh' },
        { from: 'oi', to: 'oj' },
        { from: 'aua', to: 'auua' },
        { from: 'iva', to: 'iua' },
        { from: 'dä', to: 'dhe' },
        { from: 'da', to: 'dha' },
        { from: 'de', to: 'dhe' },
        { from: 'ää', to: 'ie' },
        { from: 'rce', to: 'rche' },
        { from: 'ncui', to: 'nqui' },
        { from: 'cristi', to: 'christi' },
        { from: 'ja ', to: 'ia ' },
        { from: 'ä', to: 'e' },
        { from: 'soom', to: 'som' },
        { from: 'ttaa', to: 'tta' },
        { from: 'ntee', to: 'nde' },
        { from: 'toom', to: 'dom' }
    ];

    replacements.forEach(replacement => {
        while (input.search(replacement.from) !== stop) {
            input = input.replace(replacement.from, replacement.to);
        }
    });

    document.write(`
        <html>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
                    font-family: 'UnifrakturMaguntia', cursive;
                </style>
            </head>
            <body>
                ${input.fontcolor('black')}
                <br><br>
                <a href="muunna.htm">Tacaisin</a>
            </body>
        </html>
    `);
}
