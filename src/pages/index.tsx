import Link from 'next/link';

export const Home = () => (
  <main>
    <p>Index page</p>
    <Link href="/character-client">Character client-side page</Link>
    <br />
    <Link href="/character-server">Character server-side page</Link>
  </main>
);
  
export default Home;
