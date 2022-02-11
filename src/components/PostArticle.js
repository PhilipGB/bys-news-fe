import { useState } from "react";

import { PencilAltIcon, XIcon } from "@heroicons/react/solid";

export function PostArticle() {
  const [modalClass, setModalClass] = useState("hidden-modal");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const showNewPostForm = () => {
    if (modalClass === "modal") setModalClass("hidden-modal");
    else setModalClass("modal");
    console.log(modalClass);
  };

  return (
    <div>
      <div className={modalClass + " fade-in"}>
        <form className="create-post-form" name="create-post">
          <h3 className="modal-header">
            <PencilAltIcon className="icons" />
            Create a post{" "}
            <button onClick={showNewPostForm} className="x-button">
              <XIcon className="icons" />
            </button>
          </h3>
          <hr />
          <label></label>
          <h2>topic</h2>
          <input
            className="post-title-box"
            placeholder="Title"
            name="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className="post-textarea"
            name="post article"
            placeholder="Article Text"
            spellCheck={true}
            value={body}
            rows={16}
            maxLength={1000}
            onChange={(event) => setBody(event.target.value)}
            wrap="hard"
          />
          <hr />
          <button onClick={showNewPostForm}>Submit</button>
        </form>
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
