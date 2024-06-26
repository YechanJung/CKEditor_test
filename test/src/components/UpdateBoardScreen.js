import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function UpdateBoardScreen() {
  const [editorData, setEditorData] = useState("");
  const [fileName, setFileName] = useState(null);
  class CustomUploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }
    
    upload() {
      return this.loader.file.then((file) => {
        localStorage.setItem("file", file.name)
        setFileName(file.name);
        
        return new Promise((resolve, reject) => {
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);
          data.append("pk", 1)

          fetch("/api/updateBoarddImage/", {
            method: "POST",
            body: data,
          })
            .then((response) => response.json())
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
useEffect(() => {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(editorData, "text/html");
        const figures = parsedHtml.querySelectorAll("figure");
        figures.forEach(figure => {
            const img = figure.querySelector("img");
            if (img) {
                img.src = "/images/"+fileName;
            }
          figure.src = "/images/"+fileName;
        }
        )
        const serializer = new XMLSerializer();
        const updatedData = serializer.serializeToString(parsedHtml);
          setEditorData(updatedData )
          console.log(editorData);
}, [fileName, editorData])
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new CustomUploadAdapter(loader);
    };
  }
//   function handleEditorChange(data) {
//     console.log(data);
//   }
  function submithandler() {
    const res = fetch("/api/updateBoardd/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: editorData }),
    })
    console.log("fetch "  + editorData);
     
  }
  return (
    <>
      <CKEditor
      data= {"<p>Hello from CKEditor 5!</p>"}
      
        editor={ClassicEditor}
        config={{
          extraPlugins: [uploadPlugin],
        }}
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          setEditorData(data);
      } }
      />
      <Button onClick={submithandler}>Submit</Button>
    </>
  );
}

export default UpdateBoardScreen;
