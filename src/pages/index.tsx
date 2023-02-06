import Link from 'next/link';

export const Home = () => (
  <main>
    <p>Index page</p>
    <Link href="/episode">Episode page</Link>
    <br />
    <Link href="/character">Character page</Link>
  </main>
);
  
export default Home;
