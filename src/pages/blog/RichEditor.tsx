import React, { useRef, useEffect } from "react";
import { EditorContent, useEditor, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface RichTextEditorProps {
  setContent: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (editor) {
      editorRef.current = editor;
    }
  }, [editor]);

  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.chain().focus().run();
    }
  };

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div onClick={focusEditor}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
