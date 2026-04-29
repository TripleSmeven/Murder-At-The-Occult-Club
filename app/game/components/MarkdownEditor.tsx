"use client";
// https://mdxeditor.dev/editor/docs/getting-started

import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
} from "@mdxeditor/editor";
import { FC } from "react";
import "@mdxeditor/editor/style.css";

interface EditorProps {
  markdown: string;
  onChange?: (markdown: string) => void;
  editorRef?: React.RefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const MarkdownEditor: FC<EditorProps> = ({ markdown, editorRef, onChange }) => {
  return (
    <MDXEditor
      onChange={onChange}
      ref={editorRef}
      markdown={markdown}
      placeholder="This is your notepad. Use it to take notes!"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        thematicBreakPlugin(),
      ]}
    />
  );
};

export default MarkdownEditor;
