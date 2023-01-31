const DiaryItem = ({ author, content, emotion, create_date, id, onDelete }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          author : {author} | emotion : {emotion}
        </span>
        <br />
        <span className="date">{new Date(create_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (
            window.confirm(`Are you sure you want to delete ${id}'s diary?`)
          ) {
            onDelete(id);
          }
        }}
      >
        delete
      </button>
    </div>
  );
};

export default DiaryItem;
