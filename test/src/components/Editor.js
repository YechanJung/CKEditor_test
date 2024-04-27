import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Editor() {
  class CustomUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }

    upload() {
      return this.loader.file.then((file) => {
        return new Promise((resolve, reject) => {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          // Replace 'YOUR_BACKEND_URL' with the URL of your backend server
          fetch("/api/createBoard/", {
            method: "POST",
            body: data,
          })
            .then((response) => response.json())
            // console.log(response.json())
            .then((data) => {
              if (data.error) {
                reject(data.error);
              } else {
                resolve({
                  default: data.url, // Assuming the server responds with JSON that has a 'url' property
                });
              }
            })
            .catch((error) => {
              reject(error.message);
            });
        });
      });
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
  function submithandler() {}
  return (
    <>
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
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
      {/* <Button onClick={submithandler}>Submit</Button> */}
    </>
  );
}

export default Editor;
