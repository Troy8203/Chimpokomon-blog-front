function CardBlog() {
  return (
    <div className="container-card flex flex-col items-center">
      <div className="relative w-10/12">
        <div className="card py-4 px-10 m-3 border rounded-md flex items-center justify-center flex-col gap-2 lg:flex-row min-h-40 bg-card-foreground text-card">
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Adnawlidah dhauwhdau
            </h3>
          </div>
          <p className="w-full lg:w-2/3 text-sm md:text-base text-justify text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo
            recusandae atque itaque distinctio ullam! Accusamus dolore
            distinctio sapiente optio rem laboriosam, beatae pariatur maiores,
            sed, expedita harum quos voluptatibus.
          </p>
        </div>
        <div className="size-16 md:size-24 lg:size-32 absolute bottom-0 -right-8 md:-right-16 lg:-right-20">
          <img
            src="https://i.postimg.cc/X7F3D5cv/image.png"
            alt="chimpokomon logo"
            className="h-full w-auto"
          />
        </div>
      </div>

      <div className="relative w-10/12">
        <div className="card py-4 px-10 m-3 border rounded-md flex items-center justify-center flex-col gap-2 lg:flex-row min-h-40 bg-card text-card-foreground">
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Cheroadj Kisdhadi
            </h3>
          </div>
          <p className="w-full lg:w-2/3 text-sm md:text-base text-justify text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero
            neque nam expedita magnam odit temporibus velit saepe voluptatibus
            maxime cum aspernatur amet nemo natus dolorum enim, praesentium
            laudantium suscipit!
          </p>
        </div>
        <div className="size-16 md:size-24 lg:size-32 absolute bottom-0 -left-8 md:-left-16 lg:-left-20">
          <img
            src="https://i.postimg.cc/26kcfsZ6/image.png"
            alt="chimpokomon logo"
            className="h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CardBlog;
