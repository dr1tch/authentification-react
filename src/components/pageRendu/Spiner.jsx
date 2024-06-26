import React from 'react';

export default function Spiner() {
  return (
    <div
      className="flex justify-center items-center text-center h-full"
      style={{ border: '1px solid red' }}>
      <div
        className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-indigo-400 text-indigo-700"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
