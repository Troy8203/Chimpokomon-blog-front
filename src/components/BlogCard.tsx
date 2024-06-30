import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "./CopyButton";

interface BlogCardProps {
  title: string;
  description: string;
  contend: string;
  image_url: string;
  tags: [{ id: string; name: string; status: string }];
  date: Date;
  autor: string;
}

const test = `
# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]


Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
`;

function BlogCard(props: BlogCardProps) {
  return (
    <>
      <div className="card py-4 px-10 sm:m-3 sm:border sm:rounded-md flex flex-col items-start justify-center gap-2 min-h-40 bg-card text-card-foreground">
        <div className="w-full">
          <h3 className="capitalize text-base md:text-xl font-extrabold text-center md:text-left text-primary-foreground dark:text-primary">
            {props.title}
          </h3>
        </div>
        <div className="w-full flex justify-start items-center flex-wrap gap-1">
          {props.tags.map((tag) => (
            <Badge
              key={tag.id}
              variant="secondary"
              className="text-xs lowercase bg-primary dark:bg-muted dark:text-muted-foreground"
            >
              #{tag.name}
            </Badge>
          ))}
        </div>
        <div className="w-full text-sm md:text-base text-justify text-muted-foreground">
          <Markdown
            remarkPlugins={[remarkGfm]}
            disallowedElements={["Paragraph"]}
            components={{
              h1: ({ node, ...props }) => (
                <h6
                  className="text-3xl font-bold text-primary-foreground  dark:text-primary underline"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h6
                  className="text-2xl font-bold text-primary-foreground  dark:text-primary underline"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h6
                  className="text-xl font-bold text-primary-foreground  dark:text-primary"
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <h6
                  className="text-base font-bold text-primary-foreground  dark:text-primary"
                  {...props}
                />
              ),
              h5: ({ node, ...props }) => (
                <h6
                  className="text-sm font-bold text-primary-foreground  dark:text-primary"
                  {...props}
                />
              ),
              h6: ({ node, ...props }) => (
                <h6
                  className="text-xs font-bold text-primary-foreground  dark:text-primary"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside py-2" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-sm text-justify" {...props} />
              ),
              p: ({ node, ...props }) => {
                if (
                  node &&
                  node.children &&
                  node.children.some(
                    (child) =>
                      child.type === "element" &&
                      (child.tagName === "img" || child.tagName === "pre")
                  )
                ) {
                  return <>{props.children}</>;
                }
                return <p {...props} />;
              },
              img: ({ node, ...props }) => (
                <div className="w-full flex items-center justify-center py-3">
                  <img
                    className="w-full h-auto max-w-80 rounded-sm md:rounded-lg shadow-2xl bg-white border-muted-foreground border-2 p-1 sm:p-2"
                    key={`image-${props.src}`}
                    {...props}
                  />
                </div>
              ),
              pre: ({ node, ...props }) => {
                return (
                  <div className="my-3 mx-0 md:mx-5 rounded-md overflow-hidden border-muted-foreground border-2">
                    <div className="hidden sm:flex gap-1 bg-[#e5e6e8] dark:bg-[#221e1f] px-2 py-2">
                      <div className="circle bg h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="circle bg h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="circle bg h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="blog-pre relative">
                      <CopyButton>{props.children}</CopyButton>
                      {props.children}
                    </pre>
                  </div>
                );
              },
              code({ node, className = "blog-code", children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={a11yLight}
                    language={match[1]}
                    PreTag={"div"}
                    showLineNumbers
                  >
                    {Array.isArray(children) ? children : [children]}
                  </SyntaxHighlighter>
                ) : (
                  <span
                    className={`${className} px-2 rounded bg-muted-foreground text-muted`}
                    {...props}
                  >
                    {children}
                  </span>
                );
              },
            }}
          >
            {atob(props.contend)}
          </Markdown>
          <div className="divider border-t-2"></div>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-2xl font-bold text-primary" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-bold text-primary" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-lg font-bold text-primary" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-base font-bold text-primary" {...props} />
              ),
              h5: ({ node, ...props }) => (
                <h5 className="text-sm font-bold text-primary" {...props} />
              ),
              h6: ({ node, ...props }) => (
                <h6 className="text-xs font-bold text-primary" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-sm text-justify" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-sm text-justify text-muted" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-primary" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="w-full h-auto" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="text-sm text-justify text-muted"
                  {...props}
                />
              ),
              hr: ({ node, ...props }) => (
                <hr className="divider border-t-2" {...props} />
              ),
              pre: ({ node, ...props }) => (
                <pre className="text-sm text-justify text-muted" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code className="text-sm text-justify text-muted" {...props} />
              ),
            }}
          >
            {test}
          </Markdown>
        </div>
        <span className="w-full text-xs text-justify text-muted-foreground flex justify-end">
          {`${props.autor} · ${props.date.toLocaleDateString()}`}
        </span>
      </div>
      <div className="size-16 md:size-24 lg:size-32 hidden md:block md:absolute bottom-0 md:-right-16 ">
        <img
          src={props.image_url}
          alt="chimpokomon logo"
          className="h-full w-auto"
        />
      </div>
    </>
  );
}

export default BlogCard;
