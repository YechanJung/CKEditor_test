import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';

function Editor() {
    const [editorData, setEditorData] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
          const res = await fetch('/api/editor/', {
            method: 'POST',
            body: JSON.stringify( editorData ),
        });
        
        const data = await res.text();
        console.log(data);
        console.log(editorData)
    }
    return (<>
        <CKEditor
            editor={ ClassicEditor }
            data={editorData}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setEditorData(data);
            } }
        />
        <button type="submit" onClick={handleSubmit}>Save Post</button>
        </>);
}

export default Editor;