import React from 'react';
import dynamic from 'next/dynamic';

import { Button, Input } from '@material-ui/core';

import styles from './WriteForm.module.scss';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: any;
}

export const WriteForm: React.FC<WriteFormProps> = () => {
  const [title, setTitle] = React.useState<string>('');
  const [blocks, setBlocks] = React.useState([]);

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleFiled }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
