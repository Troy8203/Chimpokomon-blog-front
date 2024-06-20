import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

const ParagraphRenderer: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const hasImage = !!children.find(
    (child: React.ReactNode) =>
      typeof child === "object" &&
      (child as React.ReactElement).key &&
      !!((child as React.ReactElement).key as string).match(/image/g)
  );
  return hasImage ? children : <p>{children}</p>;
};

function BlogCard(props: BlogCardProps) {
  return (
    <>
      <div className="card py-4 px-10 m-3 border rounded-md flex flex-col items-start justify-center gap-2 min-h-40 bg-card text-card-foreground">
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
            unwrapDisallowed
            components={{
              p: ({ node, ...props }) => {
                if (
                  node &&
                  node.children &&
                  Array.isArray(node.children) &&
                  node.children.some(
                    (child) =>
                      child.type === "element" && child.tagName === "img"
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
      <div className="size-16 md:size-24 lg:size-32 absolute bottom-0 -right-8 md:-right-16 lg:-right-20">
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
