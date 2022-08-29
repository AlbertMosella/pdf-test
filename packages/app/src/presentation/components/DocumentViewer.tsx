interface Props {
  setShowDocument?: (value: boolean) => void;
}

export const DocumentViewer = (props: Props): JSX.Element => {
  const handleCloseDocument = () => {
    props.setShowDocument && props.setShowDocument(false);
  };
  return (
    <>
      <div>Document Viewer</div>
      <div onClick={handleCloseDocument}>X</div>
    </>
  );
};
