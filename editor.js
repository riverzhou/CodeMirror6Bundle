import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup"
import { javascript } from "@codemirror/lang-javascript"
import { html, htmlCompletion, htmlLanguage } from "@codemirror/lang-html"
import { markdown, markdownKeymap, markdownLanguage } from "@codemirror/lang-markdown"
import { oneDark } from "@codemirror/theme-one-dark";

let editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, markdown(), oneDark]
  }),
  parent: document.body
});

editor.dispatch({
  changes: { from: 0, to: editor.state.doc.length, insert: "# I am Markdown\n" }
});
