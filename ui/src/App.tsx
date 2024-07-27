import { useState } from 'react'

const sparqlQuery = (keyword: string) => `\
PREFIX ex: <http://example.com/ns#>
SELECT ?term WHERE {
	?subject ex:term ?inputTerm .
	FILTER(CONTAINS(LCASE(?inputTerm), LCASE("${keyword}")))
	?subject ex:conceptId ?conceptId .
	?otherSubject ex:conceptId ?conceptId .
	?otherSubject ex:term ?term .
}
LIMIT 10`

const makeRequest = (payload: string): Promise<unknown> => {
  return fetch('http://localhost:8000/api/snomed-ct', {
    method: 'POST',
    body: payload,
    headers: { 'Content-Type': 'application/sparql-query' },
  }).then((response) => response.json())
}

export function App() {
  const [response, setResponse] = useState<unknown | null>(null)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // TODO: Cancel ongoing request for new input.
    if (event.target.value.length === 0) {
      setResponse(null)
    } else {
      makeRequest(sparqlQuery(event.target.value)).then(setResponse)
    }
  }

  return (
    <div className="App">
      <input
        placeholder="e.g. &ldquo;Thorax&rdquo;&hellip;"
        onChange={handleChange}
      />
      {response !== null && (
        <pre className="response">{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  )
}
