import React from 'react';
import Image from 'next/image';

const sparkleSizes = ['small', 'medium', 'big'];

/**
 * Returns a JSX element for the sparkle with a random size class.
 */
function getSparkle(sizeIndex: number) {
  const size = sparkleSizes[sizeIndex % sparkleSizes.length];
  return (
    <span className={`sparkle ${size}`} key={`sparkle-${sizeIndex}`}>
      <Image width={24} height={24} src="/about/sparkle.svg" alt="sparkle" />
    </span>
  );
}

/**
 * Highlights parts of a paragraph using two styles and adds a sparkle.
 * @param text The full paragraph text.
 * @param highlight1 Array of phrases to highlight with style 1.
 * @param highlight2 Array of phrases to highlight with style 2.
 */
export function getHighlightedText(
  text: string,
  highlight1: string[] = [],
  highlight2: string[] = []
): React.ReactNode {
  // Combine all highlights with a label for type
  const allHighlights = [
    ...highlight1.map(h => ({ text: h, type: 'highlight1' })),
    ...highlight2.map(h => ({ text: h, type: 'highlight2' }))
  ];

  // Sort by length descending to avoid substring issues
  allHighlights.sort((a, b) => b.text.length - a.text.length);

  // Escape special characters for regex
  const escapeRegExp = (str: string) =>
    str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');

  const pattern = allHighlights.map(h => escapeRegExp(h.text)).join('|');
  const regex = new RegExp(pattern, 'gi');

  const parts = text.split(regex);
  const matches = text.match(regex);

  if (!matches) return text;

  const result: React.ReactNode[] = [];

  parts.forEach((part, i) => {
    result.push(<React.Fragment key={`text-${i}`}>{part}</React.Fragment>);
    const match = matches[i];
    if (match) {
      const highlightType = allHighlights.find(h =>
        h.text.toLowerCase() === match.toLowerCase()
      )?.type;

      result.push(
        <span
        key={`highlight-${i}`}
        className={highlightType === 'highlight1' ? 'highlight1' : 'highlight2'}
        >
          {highlightType === 'highlight1' && getSparkle(i)}
          {match}
        </span>
      );
    }
  });

  return result;
}
