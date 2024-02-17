const APIClient = async (query: string) => {
  const response = await fetch(`${process.env.EVENTSPOT_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: /* GraphQL */ query }),
  });
  const { data } = await response.json();

  return data;
};

export default APIClient;
