import React from 'react';
import Link from 'next/link';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';
import { PostActions } from '../PostActions';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({ title, description, id, imageUrl }) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        {/* <Link href="/news/test-123"> */}
        <Link href={`/news/${id}`}>
          <a>
            {title}
            {/* Кот прилёг отдохнуть в английском парке миниатюр — и стал героем шуток и фотожаб о «гигантском пушистом
            захватчике» */}
          </a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        {description}
        {/* Пока одни не могли соотнести размеры животного и окружения, другие начали создавать апокалиптические сюжеты с
        котом в главной роли. */}
      </Typography>
      {imageUrl && (
        <Image
          src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/600/-/format/webp/"
          height={500}
          width={600}
          alt={title}
        />
      )}
      <PostActions />
    </Paper>
  );
};
