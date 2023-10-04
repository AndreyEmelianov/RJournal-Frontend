import { GetServerSideProps } from 'next';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { parseCookies } from 'nookies';
import { wrapper } from '../redux/store';
import { UserApi } from '../utils/api';
import { setUserData } from '../redux/slices/user-slice';

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

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
//   try {
//     const { rjAuthToken } = parseCookies(ctx);

//     const userData = await UserApi.getMe(rjAuthToken);

//     store.dispatch(setUserData(userData));

//     return { props: {} };
//   } catch (err) {
//     console.log(err);
//     return { props: {} };
//   }
// });
