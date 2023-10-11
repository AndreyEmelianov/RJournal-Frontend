import React from 'react';

import data from '../../data';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';

interface PostCommentsProps {
  postId: number;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [comments, setComments] = React.useState<CommentItem[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll();
        setComments(arr);
      } catch (err) {
        console.warn('fetchComments', err);
      }
    })();
  }, []);

  const onAddComment = (obj: CommentItem) => {
    setComments((prev) => [...prev, obj]);
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm onSuccessAddComment={onAddComment} postId={postId} />
        <div className="mb-20" />
        {comments.map((obj) => (
          <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} />
        ))}
      </div>
    </Paper>
  );
};
