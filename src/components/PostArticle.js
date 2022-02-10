import { useState } from "react";

import { PencilAltIcon } from "@heroicons/react/solid";

export function PostArticle() {
  const [modalClass, setModalClass] = useState("hidden-modal");
  const [input, setInput] = useState("");

  const showNewPostForm = () => {
    if (modalClass === "modal") setModalClass("hidden-modal");
    else setModalClass("modal");
    console.log(modalClass);
  };

  return (
    <div>
      <div className={modalClass + " fade-in"}>
        <h3>
          <PencilAltIcon className="icons" />
          Create a post
        </h3>
        <hr />
        <label></label>
        <h2>topic</h2>
        <input
          className="post-title-box"
          placeholder="Title"
          value={input}
          required
          onChange={(event) => setInput(event.target.value)}
        />
        <textarea
          className="post-textarea"
          name="post article"
          placeholder="Article Text"
          spellCheck={true}
          value={input}
          rows={15}
          maxLength={1000}
          onChange={(event) => setInput(event.target.value)}
          wrap="hard"
        />
        <hr />
        <button onClick={showNewPostForm}>Submit</button>
      </div>
      <div className="PostArticle">
        <input
          className="newpost-box"
          placeholder="Create Post"
          onFocus={showNewPostForm}
        />
      </div>
    </div>
  );
}
