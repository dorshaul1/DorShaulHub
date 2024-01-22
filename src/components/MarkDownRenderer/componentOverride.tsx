import styles from "./MarkDownRenderer.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TChildrenProp } from "./types";

export const components: any = {
  h1: ({ children }: TChildrenProp) => <h1>{children}</h1>,
  img: ({ src, alt }: { src: string; alt: string }) => (
    <div
      className={styles.imageContainer}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.imageWrapper}>
        <img src={src} alt={alt} />
      </div>
    </div>
  ),
  strong: ({ children }: TChildrenProp) => (
    <span className={styles.highlight}>{children}</span>
  ),
  code: ({ inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
