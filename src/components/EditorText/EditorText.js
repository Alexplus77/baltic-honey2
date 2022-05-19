import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const EditorText = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState(
    "<p>This is the initial content of the editor.</p>"
  );
  const log = () => {
    if (editorRef.current) {
      //console.log(editorRef.current.getContent());
      setContent(editorRef.current.getContent());
    }
  };
  console.log(content);
  return (
    <div>
      <Editor
        apiKey="2kgtc3yizooqk6vrgspu437raj4qk1tia9puu03nbdk7abxm"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
};
