export const splitParagraph = (body = "") => {
  const bodyArray = body.split("\n");

  return bodyArray.map((p, index) => {
    if (p === "") return <br key={index} />;
    return <p key={index}>{p}</p>;
  });
};
