import React, { useContext, useEffect, useState } from 'react'
import "./Editor.css"
import MonacoEditor from '@monaco-editor/react';
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from 'react-icons/io';
import { RiFullscreenFill, RiFullscreenExitLine } from "react-icons/ri"
import LanguageContext from '../../context/LanguageContext/LanaugeContext';
import ThemeContext from '../../context/ThemeContext/ThemeContext';

export default function Editor() {

    const { html, setHtml, setCss, setJavascript } = useContext(LanguageContext);
    const values = useContext(LanguageContext);
    const [language, setLanguage] = useState("html");
    const languages = [
        { language: "html", label: "HTML", icon: <DiHtml5 size={20} /> },
        { language: "css", label: "CSS", icon: <IoLogoCss3 size={20} /> },
        { language: "javascript", label: "Javascript", icon: <IoLogoJavascript size={20} /> }
    ]

    const [isFullScreen, setIsFullScreen] = useState(false);
    const { isDark} = useContext(ThemeContext)

    //Editor value change handler
    const handleEditorChange = (editorValue, event) => {
        if (language === "html") {
            setHtml(editorValue);
        } else if (language === "css") {
            setCss(editorValue);
        } else {
            setJavascript(editorValue)
        }
    }

    //Full Screen Handling
    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        const editor = document.querySelector(".editor");
        editor.classList.toggle("full-screen")
    }


    return (
        <div className='editor'>
            <div className='editor-menu'>
                {
                    languages.map((singleLanguage, i) =>
                        <div
                            key={i}
                            className='editor-menu-item'
                            style={{ backgroundColor: `${singleLanguage.language === language ? "#1E1E1E" : "transparent"}` }}
                            onClick={() => setLanguage(singleLanguage.language)}
                        >
                            {singleLanguage.icon}
                            <span>{singleLanguage.label}</span>
                        </div>
                    )
                }
                <div
                    className='is-full-screen-icon'
                    onClick={handleFullScreen}
                >
                    {
                        isFullScreen
                            ? <RiFullscreenExitLine z={-1} size={20} />
                            : <RiFullscreenFill size={20} />
                    }
                </div>
            </div>
            <div style={{ height: "100%" }}>
                <MonacoEditor
                    height="100%"
                    width="100%"
                    defaultLanguage="html"
                    language={language}
                    defaultValue={html}
                    value={values[language]}
                    theme={isDark ? 'vs-dark' : ''}
                    onChange={handleEditorChange}
                />
            </div>
        </div>
    )
}
