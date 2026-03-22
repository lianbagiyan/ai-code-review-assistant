import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <div className="panel editor-panel">
      <div className="panel-header">
        <h2>Code Editor</h2>
        <span className="panel-subtitle">
          Paste your React or TypeScript code
        </span>
      </div>

      <div className="editor-wrapper">
        <Editor
          height="70vh"
          defaultLanguage="typescript"
          theme="vs-dark"
          value={value}
          onChange={(v) => onChange(v ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            padding: { top: 16 },
          }}
        />
      </div>
    </div>
  );
}
