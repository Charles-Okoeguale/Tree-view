## Setup Instructions

- Before getting started, you’ll want to run `npm install` or `yarn install` in your project directory in order to setup your development environment.
- Running `npm start` automatically starts a webpack dev server at [`localhost:9000`](localhost:9000). It should also start both the backend file server and GraphQL endpoint, as described below.
- An associated backend file server at [`localhost:4000/files`](localhost:4000/files) serves all files in the `data` folder statically. For instance, `data/lorem.txt` is served at [`localhost:4000/files/lorem.txt`](localhost:4000/files/lorem.txt).
- An associated backend GraphQL endpoint is automatically started at [`localhost:4000/graphql`](localhost:4000/graphql). It provides GraphQL queries to find the directory structure of the static file store. There is also an interactive web playground at the same URL, where you can test your GraphQL queries.
