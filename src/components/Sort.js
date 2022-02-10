import {
  CalendarIcon,
  SpeakerphoneIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";

export function Sort(props) {
  const { setSort } = props;

  const sortOrder = (order) => {
    setSort((current) => {
      const newSortOrder = `?sort_by=${order}`;
      if (current === newSortOrder) return current + "&order=asc";
      return newSortOrder;
    });
  };

  return (
    <div className="Sort">
      <button onClick={() => sortOrder("created_at")}>
        <CalendarIcon className="icons" />
        Date
      </button>
      <button onClick={() => sortOrder("comment_count")}>
        <SpeakerphoneIcon className="icons" />
        Comment Count
      </button>
      <button onClick={() => sortOrder("votes")}>
        <ThumbUpIcon className="icons" />
        Votes
      </button>
    </div>
  );
}
