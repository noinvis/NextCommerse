import { memo } from 'react';

const Loading = () => {
  return (
    <div className="Loading w-full h-[70vh] flex justify-center items-center">
      <div className='loader'></div>
    </div>
  );
};

export default memo(Loading);