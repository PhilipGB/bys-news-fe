import { useState } from "react";

export function PostArticle() {
  const [modalClass, setModalClass] = useState("hidden-modal");

  const showNewPostForm = () => {
    if (modalClass === "modal") setModalClass("hidden-modal");
    else setModalClass("modal");
    console.log(modalClass);
  };

  return (
    <div>
      <div className={modalClass + " fade-in"}>
        <label>New post popup</label>
        <button onClick={showNewPostForm}>close</button>
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
