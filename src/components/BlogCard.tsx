import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  description: string;
  contend: string;
  image_url: string;
  tags: [{ id: string; name: string; status: string }];
}

const date = new Date();
const autor = "Jhon Doe";

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
        <p className="w-full text-sm md:text-base text-justify text-muted-foreground">
          {props.contend}
        </p>
        <span className="w-full text-xs text-justify text-muted-foreground flex justify-end">
          {`${autor} · ${date.toLocaleDateString()}`}
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
