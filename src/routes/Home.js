import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { useState } from "react";

import { Articles } from "../components/Articles";
import { PostArticle } from "../components/PostArticle";
import { Sort } from "../components/Sort";

export function Home() {
  const { user } = useContext(UserContext);
  const [sort, setSort] = useState(`?sort_by=created_at`);

  return (
    <div className="Home">
      {user ? <PostArticle /> : <></>}
      <Sort setSort={setSort} />
      <Articles query={sort} />
    </div>
  );
}
