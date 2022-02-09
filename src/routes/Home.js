import { Articles } from "../components/Articles";
import { PostArticle } from "../components/PostArticle";

export function Home() {
  return (
    <div className="Home">
      <PostArticle />
      <Articles />
    </div>
  );
}
