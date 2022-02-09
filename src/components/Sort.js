export function Sort(props) {
  const { setSort } = props;

  const sortOrder = (order) => {
    setSort((current) => {
      const newSortOrder = `?sort_by=${order}`;
      if (current === newSortOrder) return current + "&order=asc";
      return newSortOrder;
    });
  };

  // date created
  // comment_count
  // votes

  return (
    <div className="Sort">
      <button onClick={() => sortOrder("created_at")}>Date</button>
      <button onClick={() => sortOrder("comment_count")}>Comment Count</button>
      <button onClick={() => sortOrder("votes")}>Votes</button>
    </div>
  );
}
