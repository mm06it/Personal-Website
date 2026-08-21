"use client";

import { useEffect, useState } from "react";

export type TerminalLine = {
  text: string;
  /** Renders instantly (like command output) instead of being typed out character by character. */
  instant?: boolean;
  /** Pause after this line completes, before the next one starts, in ms. */
  pause?: number;
};

/**
 * A stylized terminal window that types out a scripted sequence of
 * commands and output once, on mount.
 */
export function Terminal({
  lines,
  className = "",
}: {
  lines: TerminalLine[];
  className?: string;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];
    const isLineComplete = current.instant || charIndex >= current.text.length;

    if (isLineComplete) {
      const id = setTimeout(
        () => {
          setLineIndex((i) => i + 1);
          setCharIndex(0);
        },
        current.pause ?? (current.instant ? 200 : 500)
      );
      return () => clearTimeout(id);
    }

    const id = setTimeout(() => setCharIndex((c) => c + 1), 30);
    return () => clearTimeout(id);
  }, [charIndex, lineIndex, lines]);

  const finished = lineIndex >= lines.length;
  const activeLine = lines[lineIndex];

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-[#0d0e11] shadow-2xl shadow-black/20 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono-tight text-[11px] text-white/40">
          zsh — session
        </span>
      </div>

      <div className="min-h-[168px] p-5 font-mono-tight text-[13px] leading-relaxed text-white/85 sm:text-sm">
        {lines.slice(0, lineIndex).map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="shrink-0 select-none text-[#3ddc97]">
              {line.instant ? " " : "$"}
            </span>
            <span className={line.instant ? "text-white/55" : undefined}>{line.text}</span>
          </div>
        ))}

        {!finished && !activeLine.instant && (
          <div className="flex gap-2">
            <span className="shrink-0 select-none text-[#3ddc97]">$</span>
            <span>
              {activeLine.text.slice(0, charIndex)}
              <span className="cursor-blink" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
