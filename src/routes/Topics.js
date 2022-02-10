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
    <div className="Topics">
      <ul className="topic-list">
        {topics.map((topic, index) => {
          return (
            <li key={index} className="topic-li">
              <h2>
                <NavLink to={`/topics/${topic.slug}`} className="capitalize">
                  {topic.slug}
                </NavLink>
              </h2>
              <p>{topic.description}</p>
            </li>
          );
        })}
      </ul>
      {topic ? (
        <div>
          <h2 className="topic-header capitalize">Topic: {topic}</h2>
          <Articles query={`?topic=${topic}`} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
