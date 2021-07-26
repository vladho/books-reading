import React from 'react';

import LibraryListPlan from '../LibraryListPlan/LibraryListPlan';
import LibraryListRead from '../LibraryListRead.jsx/LibraryListRead';
import LibraryListDone from '../LibraryListDone/LibraryListDone';

const LibraryList = () => {
  return (
    <>
      <LibraryListDone />
      <LibraryListRead />
      <LibraryListPlan />
    </>
  );
};

export default LibraryList;
