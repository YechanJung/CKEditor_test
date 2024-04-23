import React, { useState, useEffect, useRef } from'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = () => {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
  };

  return (
    <>
      {editorLoaded? (
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data={data}
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setData(data);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default TextEditor;