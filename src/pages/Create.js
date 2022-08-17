import React from "react";
import { useState } from "react";
import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    /* 등록 버튼을 누르면 게시물이 등록이 되며 home으로 리다이렉트 되어야 합니다. */
    /* 작성한 내용과 useNavigate를 이용하여 작성해보세요. */

    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        title: title,
        content: content,
        createdAt: new Date(),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="content"
        placeholder="내용을 입력하세요"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <input
        className="inputTitle"
        name="title"
        type="text"
        placeholder="제목을 입력하세요"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        className="username"
        name="username"
        type="text"
        placeholder="닉네임을 입력하세요"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button className="submitBtn" type="submit">
        완료
      </button>
    </form>
  );
}

export default Create;
