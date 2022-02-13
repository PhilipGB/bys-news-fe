import { ExclamationIcon } from "@heroicons/react/solid";

export function My404Component() {
  return (
    <div className="My404Component">
      <h2>Err nerr!</h2>
      <ExclamationIcon className="svg-small" />
      <h2>That page doesn't appear to exist</h2>
    </div>
  );
}
