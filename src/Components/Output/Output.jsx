import React, { useEffect, useState } from 'react'
import "./Output.css"
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext/LanaugeContext';
import { RiFullscreenExitLine, RiFullscreenFill } from 'react-icons/ri';

export default function Output() {

    const { html, css, javascript } = useContext(LanguageContext);
    const [srcDoc, setSrcDoc] = useState(``);
    const [isFullScreen, setIsFullScreen] = useState(false)

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

    //Full Screen Handling
    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        const output = document.querySelector(".output");
        output.classList.toggle("full-screen")
    }


    return (
        <div className="output">
            <div className='output-header'>
                Output
                <div
                    className='is-full-screen-icon'
                    onClick={handleFullScreen}
                >
                    {
                        isFullScreen
                            ? <RiFullscreenExitLine color='#00000' size={20} />
                            : <RiFullscreenFill size={20} />
                    }
                </div>
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
