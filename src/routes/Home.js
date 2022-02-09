import { useState } from "react";
import { Articles } from "../components/Articles";
import { PostArticle } from "../components/PostArticle";
import { Sort } from "../components/Sort";

export function Home() {
  const [sort, setSort] = useState();

  return (
    <div className="Home">
      <PostArticle />
      <Sort setSort={setSort} />
      <Articles query={sort} />
    </div>
  );
}
