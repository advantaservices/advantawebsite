import { Fragment, type ReactNode } from "react";

type LegalMarkdownProps = {
  markdown: string;
};

/** Renders inline markdown: **bold** and plain text. */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let part = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={`${keyPrefix}-t-${part++}`}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }
    parts.push(
      <strong key={`${keyPrefix}-b-${part++}`} className="font-semibold text-foreground">
        {match[1]}
      </strong>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<Fragment key={`${keyPrefix}-t-${part++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return parts;
}

export function LegalMarkdown({ markdown }: LegalMarkdownProps) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3 key={`h3-${key++}`} className="text-lg font-semibold text-foreground">
          {renderInline(line.slice(4), `h3-${key}`)}
        </h3>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${key++}`} className="text-2xl font-bold tracking-tight text-brand-primary">
          {renderInline(line.slice(3), `h2-${key}`)}
        </h2>,
      );
      i += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2).trim());
        i += 1;
      }

      blocks.push(
        <ul key={`ul-${key++}`} className="list-disc space-y-2 pl-5 text-[var(--text-muted)]">
          {listItems.map((item, itemIndex) => (
            <li key={`li-${key++}`}>{renderInline(item, `li-${key}-${itemIndex}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (i < lines.length) {
      const nextLine = lines[i].trim();
      if (!nextLine || nextLine.startsWith("## ") || nextLine.startsWith("### ") || nextLine.startsWith("- ")) {
        break;
      }
      paragraphLines.push(nextLine);
      i += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push(
        <p key={`p-${key++}`} className="leading-8 text-[var(--text-muted)]">
          {renderInline(paragraphLines.join(" "), `p-${key}`)}
        </p>,
      );
    }
  }

  return <Fragment>{blocks}</Fragment>;
}
