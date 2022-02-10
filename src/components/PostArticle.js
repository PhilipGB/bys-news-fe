import { useState } from "react";

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
        <label></label>
        <h2>Title</h2>
        <h2>topic</h2>
        <textarea
          className="post-textarea"
          name="post article"
          placeholder="Article Text"
          spellCheck={true}
          value={input}
          rows={20}
          maxLength={1000}
          onChange={(event) => setInput(event.target.value)}
          wrap="hard"
        />
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
