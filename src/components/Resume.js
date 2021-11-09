import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import LResume from '../assets/Resume.pdf'

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={LResume}
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