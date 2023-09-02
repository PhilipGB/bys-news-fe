import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export function My404Component() {
  return (
    <div className='My404Component'>
      <h2>Err nerr!</h2>
      <ExclamationTriangleIcon className='svg-small' />
      <h2>{"That page doesn't appear to exist"}</h2>
    </div>
  );
}
