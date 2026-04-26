"use client";

import { useState } from "react";

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function BibtexBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">BibTeX</h3>
      <div className="relative group">
        <pre className="bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm leading-relaxed overflow-x-auto font-mono text-gray-700">
          {bibtex}
        </pre>
        <button
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy to clipboard"}
          className={`absolute top-2.5 right-2.5 p-1.5 rounded transition-all duration-150 ${
            copied
              ? "text-green-600 bg-green-50 border border-green-200"
              : "text-gray-300 border border-transparent hover:text-gray-600 hover:bg-white hover:border-gray-200"
          }`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}
