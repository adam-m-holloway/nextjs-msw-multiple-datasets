export const CharacterServer = () => (
  <main>
    <p>Character server-side page</p>
  </main>
);

export async function getServerSideProps() {
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
  
export default CharacterServer;
