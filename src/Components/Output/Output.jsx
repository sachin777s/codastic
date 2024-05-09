import React, { useEffect, useState } from 'react'
import "./Output.css"
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext/LanaugeContext';

export default function Output() {

    const { html, css, javascript } = useContext(LanguageContext);
    const [srcDoc, setSrcDoc] = useState(``);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(`
        <html>
            <style>${css}</style>
            <body>${html}</body>
            <script>${javascript}</script>
        </html>
       `)
        }, 100)
        return () => clearTimeout(timeOut);
    }, [html, css, javascript])

    return (
        <div className="output">
            <div className='output-header'>
                Output
            </div>
            <iframe
                srcDoc={srcDoc}
                title='output'
                frameBorder={0}
                sandbox='allow-scripts'
                className='output-area' />
        </div>
    )
}
