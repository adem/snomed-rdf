# snomed-rdf
Link SNOMED CT terminology using RDF for semantic data integration.

# Usage
- Run `git clone https://github.com/adem/snomed-rdf.git && cd snomed-rdf && docker compose up -d`
- Perform an example query: `curl -X POST http://localhost:8000/api/snomed-ct -H 'Content-Type: application/sparql-query' -d @examples/ct-of-thorax-synonyms.sparql`
