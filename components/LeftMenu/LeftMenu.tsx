import { FC } from 'react';
import { Button } from '@material-ui/core';

import ListIcon from '@material-ui/icons/FormatListBulletedOutlined';
import TrendingIcon from '@material-ui/icons/TrendingUpOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import FireIcon from '@material-ui/icons/WhatshotOutlined';
import styles from './LeftMenu.module.scss';

const LeftMenu: FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon /> Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon /> Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon /> Рейтинг RJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon /> Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default LeftMenu;
