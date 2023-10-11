import React from 'react';
import clsx from 'clsx';

import { CommentItem } from './CommentItem';
import data from '../../data';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);
  const { comments } = useComments();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
