import Editor from "@monaco-editor/react";
import "@/scss/component/penal.scss";

export const Penal = () => {
  return (
    <div className="penal-container">
      {/* <Editor
        height="360px"
        width="640px"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={(v) => console.log(v)}
        options={{
          tabCompletion: "off",
          contextmenu: false,
          quickSuggestions: {
            other: false,
            comments: false,
            strings: false,
          },
          parameterHints: {
            enabled: false,
          },
          suggestOnTriggerCharacters: false,
          acceptSuggestionOnEnter: "off",
          wordBasedSuggestions: false,
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          scrollbar: {
            verticalScrollbarSize: 5,
          },
          lineNumbers: "off",
        }}
      /> */}
      <textarea className="penal" />
    </div>
  );
};
