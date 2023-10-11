import React from 'react';

import { Button, Input } from '@material-ui/core';

import styles from './AddCommentForm.module.scss';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';

interface AddCommentFormProps {
  postId: number;
  onSuccessAddComment: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onSuccessAddComment }) => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [text, setText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onAddComment = async () => {
    try {
      setIsLoading(true);
      const comment = await Api().comment.create({
        postId,
        text,
      });
      onSuccessAddComment(comment);
      setClicked(false);
      setText('');
    } catch (err) {
      console.warn('AddComment', err);
      alert('Ошибка при отправке комментария');
    } finally {
      setIsLoading(false);
    }
  };

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
