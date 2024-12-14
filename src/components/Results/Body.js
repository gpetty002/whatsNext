function Body({ results }) {
  const total_results = results.length || 0;
  return (
    <>
      <p>Showing {total_results} results for ...</p>
    </>
  );
}

export default Body;
