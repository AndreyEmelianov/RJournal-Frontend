import { FC } from 'react';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          <CreateIcon />
        </Button>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className="ml-15"
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
        />
      </div>
    </Paper>
  );
};
export default Header;
