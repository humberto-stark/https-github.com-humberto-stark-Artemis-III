import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function ColorSwatch({ nome, hex, racional }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={copyToClipboard}
        className="group relative w-full aspect-square rounded-xl shadow-inner flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ backgroundColor: hex }}
        title="Clique para copiar o HEX"
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 p-2 rounded-full backdrop-blur-sm">
          {copied ? <Check className="text-white w-5 h-5" /> : <Copy className="text-white w-5 h-5" />}
        </div>
      </button>
      <div>
        <h4 className="font-bold text-sm text-white">{nome}</h4>
        <p className="text-xs font-mono text-gray-400 uppercase">{hex}</p>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{racional}</p>
      </div>
    </div>
  );
}
