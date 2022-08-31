import { JwkKeyExportOptions } from "crypto";
import { useState } from "react";
import { DocumentViewer } from "../components/DocumentViewer";
import { mockFiles } from "../mockFiles/mockFiles";
import "./DocumentsPage.scss";

interface Props {
  setShowDocument?: (value: boolean) => void;
  showDocument: boolean;
}

export const DocumentsPage = (props: Props): JSX.Element => {
  const [fileToShow, setFileToShow] = useState(null);

  const handleShowFile = (file) => {
    setFileToShow(file);
    props.setShowDocument && props.setShowDocument(true);
  };

  return (
    <div className="Documents">
      <>
        <div className="Documents__List">
          {mockFiles.map((f) => {
            return (
              <div
                onClick={() => handleShowFile(f)}
                className="Documents__Element"
                key={f.name}
              >
                {f.name}
              </div>
            );
          })}
        </div>
        <span>
          El component permet visualitzar arxius IMG, PDF o text/html. Els
          arxius PDF només es visualitzen a producció
        </span>
        {props.showDocument && (
          <DocumentViewer
            fileToShow={fileToShow}
            setShowDocument={props.setShowDocument}
          />
        )}
      </>
    </div>
  );
};
