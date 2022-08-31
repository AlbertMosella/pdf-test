import { useState } from "react";
// import {Document, Page} from 'react-pdf';
import { mockFiles } from "../mockFiles/mockFiles";
import FilePreViewer from "react-file-previewer";
import "./DocumentViewer.scss";
import { CrossIcon } from "./CrossIcon";
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
        <div className="Viewer__Title">Document Viewer</div>
        <div className="Viewer__Cross" onClick={handleCloseDocument}>
          <CrossIcon />
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
