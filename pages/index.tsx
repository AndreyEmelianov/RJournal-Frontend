import { GetServerSideProps } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { parseCookies } from 'nookies';
import { wrapper } from '../redux/store';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  const { rjAuthToken } = parseCookies(ctx);
  return { props: {} };
});
