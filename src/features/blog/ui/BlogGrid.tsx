import { Clock3 } from "lucide-react";
import { posts } from "../data/posts.data";

export function BlogGrid() {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <a className="blog-card" href="#blog" key={post.title}>
          <small>{post.category}</small>
          <h3>{post.title}</h3>
          <span>
            <Clock3 size={14} style={{ display: "inline", verticalAlign: "-2px" }} /> {post.readingTime}
          </span>
        </a>
      ))}
    </div>
  );
}
