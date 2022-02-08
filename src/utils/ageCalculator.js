export const ageCalculator = (date) => {
  const now = new Date(Date.now());
  const then = new Date(date).valueOf();
  const age = Math.floor((now - then) / 60000);

  switch (true) {
    case age >= 1051200:
      return `${Math.floor(age / 525600)} years ago`;
    case age > 87600:
      return `${Math.floor(age / 43800)} months ago`;
    case age > 10080:
      return `${Math.floor(age / 10080)} weeks ago`;
    case age > 1440:
      return `${Math.floor(age / 1440)} days ago`;
    case age > 60:
      return `${Math.floor(age / 60)} hours ago`;
    default:
      return `${age} Minutes ago`;
  }
};
