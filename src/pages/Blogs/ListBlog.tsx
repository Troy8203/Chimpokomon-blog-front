import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Import components
import Card from "../../components/Card";
import Loading from "@/components/Loading";

//Import types
import { Blog } from "../../types/blog.types";

function ListBlog() {
  const { id } = useParams();

  const [blogs, setBlogs] = useState<Blog[]>([]);
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

  const listAllBlogs = async () => {
    const url =
      "https://mp76469b475e2abc2239.free.beeceptor.com/api/posts?includeTags=true&includeCategory=true&paginate=true";
    try {
      const response = await axios.get(url);
      setBlogs(response.data.data);
      console.log(blogs);
    } catch (error) {
      setErrors(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Id: " + id);
    if (!id) {
      listAllBlogs();
      console.log("List all blogs");
      console.log(blogs);
    }
  }, []);

  return (
    <div className="container-card flex flex-col items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          {blogs.map((blog, index) => (
            <div key={blog.id} className="relative w-10/12">
              <Card
                title={blog.title}
                contend={blog.content}
                index={index}
                image_url={images[index % images.length].url}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ListBlog;
