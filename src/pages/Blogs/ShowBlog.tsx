import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Import components
import BlogCard from "@/components/BlogCard";
import Loading from "@/components/Loading";

//Import types
import { Blog } from "../../types/blog.types";

function ShowBlog() {
  const { id } = useParams();

  const [blogs, setBlogs] = useState<Blog>();
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);
  const [links, setLinks] = useState([]);
  const [meta, setMeta] = useState([]);

  const images = [
    {
      id: 0,
      url: "https://i.postimg.cc/jdwfRY4t/image.png",
      name: "Lambtron",
    },
    {
      id: 1,
      url: "https://i.postimg.cc/X7F3D5cv/image.png",
      name: "Shoe",
    },
    {
      id: 2,
      url: "https://i.postimg.cc/26kcfsZ6/image.png",
      name: "Furrycat",
    },
    {
      id: 3,
      url: "https://i.postimg.cc/xdxjkc97/image.png",
      name: "Roidrat",
    },
    {
      id: 4,
      url: "https://i.postimg.cc/50WJQvZs/image.png",
      name: "Beetlebot",
    },
    {
      id: 5,
      url: "https://i.postimg.cc/rFk9ZmL7/image.png",
      name: "Gunrilla",
    },
    {
      id: 6,
      url: "https://i.postimg.cc/ZK4MBj09/image.png",
      name: "Poodlesaurus",
    },
    {
      id: 7,
      url: "https://i.postimg.cc/XqJBmTQG/image.png",
      name: "Pterdaken",
    },
    {
      id: 8,
      url: "https://i.postimg.cc/DzrCwXFQ/image.png",
      name: "Flowerpotamus",
    },
    {
      id: 9,
      url: "https://i.postimg.cc/wMyL3CLK/image.png",
      name: "Brocorri",
    },
    {
      id: 10,
      url: "https://i.postimg.cc/76pNk3Qn/image.png",
      name: "Biebersaurus",
    },
    {
      id: 11,
      url: "https://i.postimg.cc/BQwnQmC3/image.png",
      name: "Cosmonewt",
    },
    {
      id: 12,
      url: "https://i.postimg.cc/jdGYFmXD/image.png",
      name: "RabbiTech",
    },
    {
      id: 13,
      url: "https://i.postimg.cc/fbCFDrxj/image.png",
      name: "Sna-kat",
    },
    {
      id: 14,
      url: "https://i.postimg.cc/RCTb58LP/image.png",
      name: "Velocirapstar",
    },
    {
      id: 15,
      url: "https://i.postimg.cc/bYMSJYgd/image.png",
      name: "Roo-stor",
    },
    {
      id: 16,
      url: "https://i.postimg.cc/65MZXVSJ/image.png",
      name: "Stegmata",
    },
    {
      id: 17,
      url: "https://i.postimg.cc/0jLLMKX8/image.png",
      name: "Vamporko",
    },
    {
      id: 18,
      url: "https://i.postimg.cc/pT9vmvVJ/image.png",
      name: "Gophermon",
    },
  ];
  const background_img = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      origen: "uplash",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      origen: "uplash",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1619972898592-5de4b1c68025?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      origen: "uplash",
    },
  ];
  const url_base = process.env.URL_BACKEND;

  const ShowBlog = async (id: string) => {
    const url = `${url_base}/api/posts/${id}?includeCategory=true&includeTags=true&includeUser=true`;
    try {
      const response = await axios.get(url);
      setBlogs(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      setErrors(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Id: " + id);
    if (id) {
      ShowBlog(id);
    }
  }, []);

  return (
    <div className="container-card flex flex-col items-center relative">
      {loading ? (
        <Loading />
      ) : (
        <>
          {blogs && (
            <div className="relative w-10/12 max-w-2xl">
              <BlogCard
                title={blogs.title}
                description={blogs.description}
                contend={blogs.content}
                tags={blogs.tags}
                image_url={images[0].url}
                date={new Date(blogs.created_at)}
                autor={blogs.user.name}
              />
            </div>
          )}
        </>
      )}
      <div className="absolute top-0 -z-10 w-full h-72">
        <img
          className="block dark:hidden w-full h-full object-cover"
          src={background_img[1].url}
          alt="BannerBlog"
        />
        <img
          className="hidden dark:block w-full h-full object-cover"
          src={background_img[2].url}
          alt="BannerBlog"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background from-2%" />
      </div>
    </div>
  );
}

export default ShowBlog;
