import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import SVResume from '../assets/SVResume.pdf'

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={SVResume}
        onLoadSuccess={onDocumentLoadSuccess}
        download
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default Resume