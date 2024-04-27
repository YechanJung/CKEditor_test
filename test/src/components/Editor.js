import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React, { useState } from 'react';

function Editor() {
    class CustomUploadAdapter {
        constructor(loader) {
          this.loader = loader;
        }
      
        upload() {
          return new Promise((resolve, reject) => {
            this.loader.file.then((file) => {
              const data = new FormData();
              data.append("name", file.name);
              data.append("file", file);
      
              // 데이터를 서버로 전송하는 부분을 여기에 작성해야 합니다.
              // 아래 코드는 Blob URL을 생성하며 이를 사용하여 이미지를 삽입합니다.
              resolve({ default: window.URL.createObjectURL(file) });
            });
          });
        }
      
        abort() {
          // 파일 전송이 중단될 때 처리하는 로직을 작성해야 합니다.
        }
      }
      
      function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return new CustomUploadAdapter(loader);
        };
      }
      function handleEditorChange(data) {
        console.log(data);
      }
    // const [editorData, setEditorData] = useState('');
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //       const res = await fetch('/api/editor/', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json', // This line is crucial
    //         },
    //         body: JSON.stringify({ content: editorData }),
    //     });
        
    //     const data = await res.text();
    //     console.log(data);
    //     console.log(editorData)
    // }
    return (<>
        {/* <CKEditor
            editor={ ClassicEditor }
            data={editorData}
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                setEditorData(data);
            } }
            />
        <button type="submit" onClick={handleSubmit}>Save Post</button> */}
        <CKEditor
          editor={ClassicEditor}
          config={{
            extraPlugins: [uploadPlugin],
          }}
          _onChange={handleEditorChange}
          _onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />;
        </>
        );
}

export default Editor;
  
  // CKEditor 컴포넌트