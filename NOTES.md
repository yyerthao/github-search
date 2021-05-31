### Objective
- Create a repository search application using the Github repository search API 
- https://docs.github.com/en/rest/reference/search#search-repositories 
- Must display results of a query
- The app can query the API directly

### Requirements
- Textfield for user to search GitHub
- Render on the UI, results of the search
- Results must be sorted by
    - best match (default)
    - stars
- Filter results by language
- 2 page minimum, one to render results of query
- responsive design to multiple device sizes


* Each result should display the following traits about the repository:
- default sort key(best match)
- number of stars
- filter by language


Set up
- `npx create-react-app app-name` on command line
- `cd app-name` on command line
- `npm install ` if no package.json file exists
- `npm install @material-ui/core` on command line
- `npm install axios` - this is needed for axios calls
- `npm install express` - so we can use express libraries for our server side
- `npm install redux`
- 