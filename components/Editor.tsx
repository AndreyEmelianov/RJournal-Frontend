import React, { useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

export const Editor: React.FC = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
    });
  }, []);

  return <div id="editor" />;
};
