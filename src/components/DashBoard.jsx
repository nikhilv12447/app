import React from "react";
import { createTextEditor } from "./DashBoardFetch"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function DashBoard() {
    const link = useSelector(state => state.editor.editorLink)
    const dispatch = useDispatch()
    function createEditorLink() {
        createTextEditor(dispatch)
    }
    console.log(link)
    return <div>
        <button onClick={createEditorLink} style={{marginRight: "10px"}}>Create Editor</button>
        {link && <Link to={link}>editor</Link>}
    </div>
}

export default DashBoard