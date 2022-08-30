import { useState } from "react";
// import {Document, Page} from 'react-pdf';
import { mockFiles } from "../mockFiles/mockFiles";
import FilePreViewer from "react-file-previewer";
import "./DocumentViewer.scss";
interface Props {
  setShowDocument?: (value: boolean) => void;
  fileToShow: any;
}

export const DocumentViewer = (props: Props): JSX.Element => {
  const handleCloseDocument = () => {
    props.setShowDocument && props.setShowDocument(false);
  };

  return (
    <div className="Viewer">
      <div className="Viewer__Header">
        <div>Document Viewer</div>
        <div className="Viewer__Cross" onClick={handleCloseDocument}>
          X
        </div>
      </div>
      <div>{props.fileToShow.name}</div>
      <FilePreViewer
        file={{
          data: props.fileToShow.attach,
          mimeType: props.fileToShow.mimeType,
          name: props.fileToShow.name,
        }}
      />
    </div>
  );
};
