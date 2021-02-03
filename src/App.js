import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/w4.pdf',
        disabledElements: [ // https://pdfjs.express/documentation/ui-customization/hiding-elements
          // Header
          'leftPanelButton',
          'viewControlsButton',
          'freeHandToolGroupButton',
          'textToolGroupButton',
          'shapeToolGroupButton',
          'freeTextToolButton',
          'stickyToolButton',
          'miscToolGroupButton',
          // Popups
          'annotationPopup',
          'highlightToolButton',
          'freeHandToolButton',
        ]
      },
      viewer.current,
    ).then((instance) => {
      // ...
    });
  }, []);

  return (
    <div className="App">
      <div className="header">W4 Demo</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
