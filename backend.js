const express = require("express");
const { createServer } = require("graphql-yoga");
const cors = require("cors")
const fs = require("fs");

const typeDefs = `
  type Entry {
    name: String!
    isFolder: Boolean!
    href: String!
  }
  type Query {
    ls(directory: String!): [Entry!]!
    lsBatch(directories: [String!]!): [[Entry!]!]!
  }
  type Mutation {
    write(href: String!, contents: String!): Boolean
  }
`;

const ls = (directory) => {
  try {
    const dir = fs.opendirSync("data/" + directory);
    let results = [];
    let entry;
    while ((entry = dir.readSync())) {
      results.push({
        name: entry.name,
        isFolder: !entry.isFile(),
        href: `/files/${directory}/${entry.name}`.replace(/\/+/g, "/"),
      });
    }
    dir.closeSync();
    return results;
  } catch (e) {
    return [];
  }
};

const write = (href, contents) => {
  try {
    const file = fs.openSync(
      "data/" + href.replace(/^\/?files\/?/, ""),
      fs.constants.O_RDWR
    );
    fs.ftruncateSync(file);
    fs.writeFileSync(file, contents);
    fs.closeSync(file);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const resolvers = {
  Query: {
    ls: (_, args) => ls(args.directory),
    lsBatch: (_, args) => args.directories.map(ls),
  },
  Mutation: {
    write: (_, args) => write(args.href, args.contents),
  },
};

function main() {
  const app = express();
  const yoga = createServer({ schema: { typeDefs, resolvers } });

  app.use(cors()); // Allow all origins
  app.use("/graphql", yoga);
  app.use("/files", express.static("data"));
  app.listen(4000);
  
  console.log("GraphQL endpoint started at http://localhost:4000/graphql")
  console.log("Static file server started at http://localhost:4000/files", "\n")
}

main();
