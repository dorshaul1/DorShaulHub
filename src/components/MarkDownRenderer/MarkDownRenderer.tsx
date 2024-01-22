// @ts-ignore
import ReactMarkdown, { ReactMarkdownProps } from "react-markdown";
import gfm from "remark-gfm";

import { TMarkDownRendererProps } from "./types";

import styles from "./MarkDownRenderer.module.scss";
import { components } from "./componentOverride";

const MarkDownRenderer = ({ content }: TMarkDownRendererProps) => {
  return (
    <div className={styles.markdownContainer}>
      <ReactMarkdown remarkPlugins={[gfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkDownRenderer;
