import { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    console.log(state);
    onCreate(state.author, state.content, state.emotion);
    alert("SAVE SUCCESS");

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Diary</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
          placeholder="author"
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
          placeholder="write your diary here..."
          ref={contentInput}
        />
      </div>
      <div>
        <span>Today's score : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1(happiest)</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5(saddest)</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>SAVE</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
