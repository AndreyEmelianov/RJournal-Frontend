import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next/types';
import Cookies, { parseCookies } from 'nookies';
import { UserApi } from './user-api';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
};

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.rjtoken;

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    user: UserApi(instance),
  };
};
