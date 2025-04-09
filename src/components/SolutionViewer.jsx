import React, { useState, useEffect } from "react";

const SolutionViewer = ({ filePath }) => {
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      fetch(`http://localhost:5000/${filePath}`)
        .then(res => res.text())
        .then(setCode)
        .catch(err => setCode("// Unable to load solution"));
    }
  }, [show, filePath]);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="mt-6">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Solution" : "Show Solution"}
      </button>

      {show && (
        <div className="mt-4 relative">
          <pre className="bg-gray-900 text-green-300 p-4 rounded-md overflow-x-auto text-sm">
            <code>{code}</code>
          </pre>
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default SolutionViewer;
