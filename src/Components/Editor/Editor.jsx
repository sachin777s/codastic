import React, { useContext, useState } from 'react'
import "./Editor.css"
import MonacoEditor from '@monaco-editor/react';
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from 'react-icons/io';
import LanguageContext from '../../context/LanguageContext/LanaugeContext';
import { Resizable } from 're-resizable';

export default function Editor() {

    const { value, setValue } = useContext(LanguageContext);
    const [language, setLanguage] = useState("html");
    const languages = [
        { language: "html", label: "HTML", icon: <DiHtml5 size={20} /> },
        { language: "css", label: "CSS", icon: <IoLogoCss3 size={20} /> },
        { language: "javascript", label: "Javascript", icon: <IoLogoJavascript size={20} /> }
    ]

    //Editor value change handler
    const handleEditorChange = (editorValue, event) => {
        const temp = value;
        temp[language] = editorValue;
        setValue(temp);
    }

    return (
        <Resizable
            defaultSize={{
                width: "50%",
                height: "calc(100vh - 95px)",
            }}
            className='editor'
        >
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
            </div>
            <div>
                <MonacoEditor
                    height="calc(100vh - 95px)"
                    width="100%"
                    defaultLanguage="html"
                    language={language}
                    defaultValue={value[language]}
                    value={value[language]}
                    theme='vs-dark'
                    onChange={handleEditorChange}
                />
            </div>
        </Resizable>
    )
}
