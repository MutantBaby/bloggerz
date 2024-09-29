import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { useAuth } from "../store/auth";

export default function Travel() {
  const { SERVER_URI } = useAuth();
  const [blogs, setBlogs] = useState([]);

  const travel = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/travel`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const response = await request.json();

    if (request.status === 200) setBlogs(response);
    else console.log(response);
  };

  useEffect(() => {
    travel();
  }, []);

  return (
    <section className="container individual">
      <h1>Travel &gt;&gt;</h1>
      <div className="individuals">
        {blogs.length > 0 ? (
          blogs.map(({ _id, title, body, createdAt, author, category }) => {
            return (
              <Blog
                key={_id}
                title={title.slice(0, 45) + "..."}
                body={body.slice(0, 150) + "..."}
                date={String(createdAt).slice(0, 10)}
                author={author}
                category={category}
                id={_id}
              />
            );
          })
        ) : (
          <p>No blogs found in this category</p>
        )}
      </div>
    </section>
  );
}
