import React from 'react';
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';
import ListItemButton from '@mui/material/ListItemButton';

import styles from './Header.module.scss';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user-slice';
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState<boolean>(false);
  const [posts, setPosts] = React.useState<PostItem[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');

  const userData = useAppSelector(selectUserData);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={searchValue} onChange={handleChangeInput} placeholder="Поиск" />
          {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                <ListItem>
                  {posts.map((post) => (
                    <Link href={`/news/${post.id}`} key={post.id}>
                      <a>
                        <ListItemButton>{post.title}</ListItemButton>
                      </a>
                    </Link>
                  ))}
                </ListItem>
              </List>
            </Paper>
          )}
        </div>

        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};
