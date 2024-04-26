// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import React, { useState } from "react";
// // class MyUploadAdapter {
// //     constructor(loader) {
// //         this.loader = loader;
// //     }

// //     upload() {
// //         return this.loader.file
// //             .then(file => new Promise((resolve, reject) => {
// //                 const data = new FormData();
// //                 data.append('upload', file);
// //                 fetch('/api/posts', {
// //                     method: 'POST',
// //                     body: data
// //                 })
// //                 .then(response => response.json())
// //                 .then(data => resolve({ default: data.url }))
// //                 .catch(reject);
// //             }));
// //     }

// //     abort() {
// //         // Handle the abort request in your code. For example, you could cancel the
// //         // upload request if it's still in progress.
// //     }
// // }

// function Editor() {
    
//     //   const [selectedFile, setSelectedFile] = useState(null);
//     //   const [editorData, setEditorData] = useState("");
    
//     //   const handleFileChange = (e) => {
//         //     setSelectedFile(e.target.files[0]);
//         //   };
        
//         //   const handleSubmit = async (e) => {
//             //     e.preventDefault();
//             //     const formData = new FormData();
//             //     formData.append("file", selectedFile);
//             //     formData.append("content", editorData);
//             //     const response = await fetch("/api/editor/", {
//                 //       method: "POST",
//                 //       body: formData,
//                 //     });
//                 //   };
                
//                 const submitHandler = async (e) => {
//                   e.preventDefault();
//                   const file = e.target.files[0];
//                   const formData = new FormData();
//                   formData.append("image", file);
//                   formData.append("board_name", "test");
//                   console.log(formData);
//                 //   setUploading(true);
              
//                   const config = {
//                     method: "POST",
              
//                     body: formData,
//                   };
//                   const res = await fetch("/api/products/upload/", config);
//                   const data = await res.json();
//                 };
//   return (
//     <>
//       <CKEditor
//         editor={ClassicEditor}
//         // data={editorData}
//         onChange={(e) =>submitHandler(e)}
//         // ...rest of your CKEditor props
//       />

//       <button type="submit" onClick={submitHandler}>
//         Save Post
//       </button>
//     </>
//   );
// }

// export default Editor;
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState } from "react";

function Editor() {
  const [editorData, setEditorData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEditorChange = (event, editor) => {
    setEditorData(editor.getData());
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("board_name", "test");

    const config = {
      method: "POST",
      body: formData,
    };
    const res = await fetch("/api/createBoard/", config);
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={handleEditorChange}
      />
      <button type="submit" onClick={submitHandler}>
        Save Post
      </button>
    </>
  );
}

export default Editor;