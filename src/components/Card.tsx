interface CardProps {
  title: string;
  contend: string;
  index: number;
  image_url: string;
}

function Card(props: CardProps) {
  return (
    <>
      {props.index % 2 === 0 ? (
        <>
          <div className="card py-4 px-10 m-3 border rounded-md flex items-center justify-center flex-col gap-2 lg:flex-row min-h-40 bg-card-foreground text-card">
            <div className="w-full lg:w-1/3">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                {props.title}
              </h3>
            </div>
            <p className="w-full lg:w-2/3 text-sm md:text-base text-justify text-muted">
              {props.contend}
            </p>
          </div>
          <div className="size-16 md:size-24 lg:size-32 absolute bottom-0 -right-8 md:-right-16 lg:-right-20">
            <img
              src={props.image_url}
              alt="chimpokomon logo"
              className="h-full w-auto"
            />
          </div>
        </>
      ) : (
        <>
          <div className="card py-4 px-10 m-3 border rounded-md flex items-center justify-center flex-col gap-2 lg:flex-row min-h-40 bg-card text-card-foreground">
            <div className="w-full lg:w-1/3">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                {props.title}
              </h3>
            </div>
            <p className="w-full lg:w-2/3 text-sm md:text-base text-justify text-muted-foreground">
              {props.contend}
            </p>
          </div>
          <div className="size-16 md:size-24 lg:size-32 absolute bottom-0 -left-8 md:-left-16 lg:-left-20">
            <img
              src={props.image_url}
              alt="chimpokomon logo"
              className="h-full w-auto"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Card;
