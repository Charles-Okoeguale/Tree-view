# Radix Labs Frontend Code Exercise

## Overview

- This frontend exercise will provide you with a task in Typescript and React that we’d like you to
  work on.
- We expect you to have made substantial progress on the independent portion of the
  coding exercise. The pairing interview extends the work you do on your own, so if
  you don't write enough code that can be extended, we're not able to schedule the
  code exercise.
- While it is not required that the code you write is perfect or fully complete, you will at
  least need to have enough of a solution implemented that we can build off of it.
- We're looking to see that you can develop code solutions independently, so a
  solution that's not optimal or even logically correct is better than no code.
- You have 2 days to complete this from the time we send it. Spend as much time as
  you want (within the 2 days), but don't spend too much time, you have a life.
- There is no right or wrong answer. There are better and worse approaches. We're
  mostly looking at how you approach problems.
- Keep in mind that we're looking at both your skills as well as how your skills would
  complement those of others on our team.
- We strongly recommend you read the entirety of this document. Reading the full spec is a relevant job skill!

## Your Task

- The static file store contains nested folders of text files. Your task is to use the
  provided starter code and included libraries in package.json to create a text editor
  and tree view that allows the user to view and edit these files.
- As a general guide of what we’re looking for, imagine the window of an IDE. On one
  side you have a tree view of the file structure of your project, and on the other you
  see tabs showing the contents of whatever file you select.
- Clicking on a file in the tree view should open it in a new tab on the right. Clicking on
  that same tree-view entry again should close the associated tab. Because of this,
  the tabs themselves do not need to have close buttons like the tabs of an IDE or
  web browser.
- Implement automatic saving of the edited files. Try to make changes saved as
  soon as possible without bombarding the backend with too many mutations.
- There is no specific design document for this task. Try to make the resulting
  frontend look clean and organized.
- In the pairing interview, we’ll look at how you’ve implemented this part, and then
  extend it to support other file types.

## Setup Instructions

- Before getting started, you’ll want to run `npm install` or `yarn install` in your project directory in order to setup your development environment.
- Running `npm start` automatically starts a webpack dev server at [`localhost:9000`](localhost:9000). It should also start both the backend file server and GraphQL endpoint, as described below.
- An associated backend file server at [`localhost:4000/files`](localhost:4000/files) serves all files in the `data` folder statically. For instance, `data/lorem.txt` is served at [`localhost:4000/files/lorem.txt`](localhost:4000/files/lorem.txt).
- An associated backend GraphQL endpoint is automatically started at [`localhost:4000/graphql`](localhost:4000/graphql). It provides GraphQL queries to find the directory structure of the static file store. There is also an interactive web playground at the same URL, where you can test your GraphQL queries.
- For those unfamiliar with GraphQL, we suggest using [Apollo Client](https://www.apollographql.com/docs/react/). However, any valid method to consume the GraphQL API will be accepted (though you might be asked why you chose what you did!).
- If you have any trouble with the setup or getting things to run, please let us know via email as early as possible.

## Delivery Instructions

- Please use WeTransfer to send us your code exercise. Our (hosted) email very
  unfortunately thinks that large code archive email attachments are viruses and
  silently drops them without notifying the sender or receiver.
- If you send back your
  code as an attachment to an email, we will not receive it and we'll all be sad and
  confused.

We're excited that you're interested in Radix. Good luck, and hopefully we'll get to code together soon :)
