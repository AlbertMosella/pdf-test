import {Route, Routes} from 'react-router-dom';
import {DocumentsPage} from '../pages/DocumentsPage';
import {DOCUMENT_VIEWER_ROUTE} from './routes';
import React, {useState} from 'react';
import {PageNotFound} from '../pages/PageNotFound';

export const AppRouter = () => {
  const [showDocument, setShowDocument] = useState(false);

  return (
    <Routes>
      <Route
        path={DOCUMENT_VIEWER_ROUTE}
        element={<DocumentsPage showDocument={showDocument} setShowDocument={setShowDocument} />}
      />
      <Route
        path="/"
        element={<DocumentsPage showDocument={showDocument} setShowDocument={setShowDocument} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
