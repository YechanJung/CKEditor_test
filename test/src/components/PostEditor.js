import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const PostEditor = () => {
    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/posts/', post);
            alert('Post saved!');
            console.log(res.data);
        } catch (error) {
            console.error('Error saving post', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                    placeholder="Title"
                />
                <CKEditor
                    editor={ClassicEditor}
                    data={post.content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setPost({ ...post, content: data });
                    }}
                />
                <button type="submit">Save Post</button>
            </form>
        </div>
    );
};

export default PostEditor;
