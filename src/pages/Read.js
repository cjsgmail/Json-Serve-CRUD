import React from "react";
import { useState } from "react";
import "./Read.css";

export default function Read({ readData, setMode }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [createdAt, setCreatedAt] = useState(readData[0].createdAt);
  const [content, setContent] = useState(readData[0].content);
  const [title, setTitle] = useState(readData[0].title);
  const [username, setUserName] = useState(readData[0].username);

  const id = readData[0].id;

  const handleClose = () => {
    setMode(false);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: content,
        title: title,
        username: username,
        createdAt: new Date(),
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
  return (
    <>
      {!updateMode ? (
        <div className="readContainer">
          <div className="readContent">{content}</div>
          <div className="readDate">
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className="buttonGroup">
            <button className="deleteBtn" onClick={handleDelete}>
              삭제하기
            </button>
            <button className="updateBtn" onClick={handleUpdate}>
              수정하기
            </button>
            <button className="closeBtn" onClick={handleClose}>
              글 닫기
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUpdate}>
          <textarea
            name="content"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <input
            className="inputTitle"
            name="title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            className="username"
            name="username"
            type="text"
            placeholder="닉네임을 입력하세요"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <button className="submitBtn">수정</button>
        </form>
      )}
    </>
  );
}
