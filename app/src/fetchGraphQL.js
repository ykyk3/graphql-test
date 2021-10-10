async function fetchGraphQL(gqlQuery, params) {
    const response = await fetch('http://localhost:4000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            query: gqlQuery,
            variables: params,
        }),
    });
    return await response.json();
}

export default fetchGraphQL;
