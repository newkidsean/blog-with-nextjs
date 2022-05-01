import type { NextPage } from 'next';
import Header from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>Hello world</div>
    </>
  );
};

export default Home;
