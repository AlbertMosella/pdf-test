import {useNavigate} from 'react-router-dom';
import {DocumentViewer} from '../components/DocumentViewer';

interface Props {
  setShowDocument?: (value: boolean) => void;
  showDocument: boolean;
}

export const DocumentsPage = (props: Props) => {
  const handleShowDocument = () => {
    props.setShowDocument && props.setShowDocument(true);
  };

  return (
    <>
      <div>
        <h3>Documents</h3>
        <button onClick={handleShowDocument}>Mostrar PDF</button>
        <button onClick={handleShowDocument}>Mostrar Imatge</button>
        <button onClick={handleShowDocument}>Mostrar Text/Html</button>
      </div>
      {props.showDocument && <DocumentViewer setShowDocument={props.setShowDocument} />}
    </>
  );
};
