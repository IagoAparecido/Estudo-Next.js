export async function Repo() {
  const response = await fetch(
    "https://api.github.com/users/iagoaparecido/repos",
    {
      cache: "no-store",
    }
  );
  const repos = await response.json();

  return (
    <div>
      <h1>Repo</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  );
}
