import axios from 'axios';
import { GetServerSidePropsContext, NextPageContext } from 'next/types';
import Cookies, { parseCookies } from 'nookies';
import { UserApi } from './user-api';
import { PostApi } from './post-api';
import { CommentApi } from './comment-api';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  comment: ReturnType<typeof CommentApi>;
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

  const apis = {
    user: UserApi,
    post: PostApi,
    comment: CommentApi,
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiReturnType);

  return result;
};
