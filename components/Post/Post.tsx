import { FC } from 'react';
import { Paper, Typography } from '@material-ui/core';

import Image from 'next/image';
import styles from './Post.module.scss';

const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о
        «гигантском пушистом захватчике» 🐈
      </Typography>
      <Typography className="mt-10 mb-15">
        Пока одни не могли соотнести размеры животного и окружения, другие начали создавать
        апокалиптические сюжеты с котом в главной роли. На самом деле кот на снимке вполне
        стандартного размера, а всё вокруг — миниатюрная модель улицы Royal Crescent («Королевский
        полумесяц») английского города Бат.
      </Typography>
      <Image src="/static/img/cat.jpg" height={500} width={600} />
    </Paper>
  );
};
export default Post;
