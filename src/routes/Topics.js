import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Articles } from "../components/Articles";
import { fetchTopics } from "../utils/Api";

export function Topics() {
  const [topics, setTopics] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <div className="CommentCard">
      <ul>
        {topics.map((topic, index) => {
          return (
            <li key={index}>
              <h2>
                <NavLink to={`/topics/${topic.slug}`}>{topic.slug}</NavLink>
              </h2>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
      <h2>Topic: {topic}</h2>
      {topic ? <Articles query={`?topic=${topic}`} /> : <></>}
    </div>
  );
}
