import React from 'react';

import { Button, Input } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';
import { Api } from '../../utils/api';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user-slice';

interface AddCommentFormProps {
  postId: number;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId }) => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [text, setText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isAuth = useAppSelector(selectUserData);

  const onAddComment = async () => {
    try {
      const comment = await Api().comment.create({
        postId,
        text,
      });
      setClicked(false);
      setText('');
    } catch (err) {
      console.warn('AddComment', err);
    }
  };

  if (!isAuth) {
    return null;
  }

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        minRows={clicked ? 5 : 1}
        disabled={isLoading}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
