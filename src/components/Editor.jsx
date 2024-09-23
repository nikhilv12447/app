import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { editor } from "../Store/actions"
import { io } from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom"
import { validateEditor } from "./editorApiCalls";
import { Sapling } from "@saplingai/sapling-js/observer";
let socket
let timeout

function Editor() {
    const text = useSelector(state => state.editor.text)
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const editorRef = useRef()
    function handelOnChange(e) {
        timeout && clearTimeout(timeout)

        timeout = setTimeout(() => {
            dispatch(editor.setText(editorRef.current.value))
        }, 400)
    }
    useEffect(() => {
        validateEditor(dispatch, id).then((isValid) => {
            !isValid && navigate("/dashboard")
            if (isValid) {
                Sapling.init({
                    key: 'DG2HF9MGOZCHKFIHOC7KE2W4KVO1Q0ZK',
                    endpointHostname: 'https://api.sapling.ai',
                    editPathname: '/api/v1/edits',
                    statusBadge: true,
                    mode: 'dev',
                    autocomplete: true

                });
                Sapling.observe(document.getElementById('editor'));

                socket = io(`http://localhost:8080?editorId=${id}`);
                socket.on("connect", () => {
                });

                socket.on("disconnect", () => {
                    console.log(socket.id); // undefined
                });

                socket.on("editor-text", (text) => {

                    dispatch(editor.setText(text))
                })
            }
        })
    }, [])

    useEffect(() => {
        editorRef.current.value = text
        socket && socket.emit("update-text", text);
    }, [text])

    return <div>
        <h1>Editor</h1>
        <textarea
            ref={editorRef}
            id="editor"
            sapling-ignore="true"
            contentEditable="true" style={{
                margin: '40px auto',
                padding: '10px',
                border: '2px solid black',
                width: '500px',
                height: '200px'
            }}
            rows="500"
            cols="500"
            onChange={handelOnChange}
        >
        </textarea>
    </div>
}

export default Editor