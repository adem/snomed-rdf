# snomed-rdf
Link SNOMED CT terminology using RDF for semantic data integration.

# Usage via Docker
- Clone this repository:
```
git clone https://github.com/adem/snomed-rdf.git && cd snomed-rdf
```
- Run the Docker container:
```
docker compose up -d
```
- Perform an example query:
```
curl -X POST http://localhost:8000/api/snomed-ct \
     -H 'Content-Type: application/sparql-query' \
     -d @examples/ct-of-thorax-synonyms.sparql
```
- Perform queries via the locally running [web UI](http://localhost:3000).

# Caveats
The input data provided in `data/snomed-ct.csv` is a very small subset of the file `sct2_Description_Full-en_INT_20240501.txt` terminology dataset, converted to be comma-separated, provided in the SNOMED CT International Edition release.

The full version can be obtained at https://mlds.ihtsdotools.org via an MLDS license. You may place the full version of the file in `data/snomed-ct.csv` instead.

# To-dos
- [ ] Extend RML mapping to more fields such as description
- [ ] Investigate [snomed-owl-toolkit](https://github.com/IHTSDO/snomed-owl-toolkit)
- [x] Provide a basic web UI
