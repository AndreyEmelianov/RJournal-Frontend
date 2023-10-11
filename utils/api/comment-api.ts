import { AxiosInstance } from 'axios';
import { CommentItem, CreateCommentDto, CreatePostDto, PostItem } from './types';

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<CommentItem[]>('/comments');
    return data;
  },

  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<CreatePostDto, { data: CommentItem }>('/comments', dto);
    return data;
  },
});
