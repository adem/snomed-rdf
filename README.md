# snomed-rdf
Link SNOMED CT terminology using RDF for semantic data integration.

# Usage
- Run `git clone https://github.com/adem/snomed-rdf.git && cd snomed-rdf && docker compose up -d`
- Perform an example query:
```
curl -X POST http://localhost:8000/api/snomed-ct \
     -H 'Content-Type: application/sparql-query' \
     -d @examples/ct-of-thorax-synonyms.sparql
```

# Caveats
- The input data provided in `data/snomed-ct.csv` is a very small subset of the file `sct2_Description_Full-en_INT_20240501.txt` terminology dataset provided in the SNOMED CT International Edition release. The full version can be obtained at https://mlds.ihtsdotools.org via an MLDS license.

# To-dos
- [ ] Investigate [snomed-owl-toolkit](https://github.com/IHTSDO/snomed-owl-toolkit)
- [ ] Provide a rudimentary web interface
