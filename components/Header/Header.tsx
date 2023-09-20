import { FC } from 'react';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';

import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <Paper>
      <div>
        <div>LOGO</div>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button>
          <CreateIcon />
        </Button>
      </div>

      <div>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
        />
      </div>
    </Paper>
  );
};
export default Header;
