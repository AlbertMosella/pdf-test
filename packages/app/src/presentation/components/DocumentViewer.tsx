import {useState} from 'react';
import {Document, Page} from 'react-pdf';
import {mockPdf} from '../mockFiles/mockFiles';
interface Props {
  setShowDocument?: (value: boolean) => void;
}

export const DocumentViewer = (props: Props): JSX.Element => {
  const handleCloseDocument = () => {
    props.setShowDocument && props.setShowDocument(false);
  };

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages);
  }
  return (
    <>
      <div>Document Viewer</div>
      <div onClick={handleCloseDocument}>X</div>
      <Document file="./dummy.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <Document file={mockPdf.attach} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};
