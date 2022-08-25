import {gql} from '@apollo/client'

export const GET_FOLDER = gql `
       {
            ls(directory: "folder") {
                name
                isFolder
                href
            }

            lsBatch (directories: ["folder/books", "folder/shakespeare", "folder/shakespeare/etc"] ) {
                name
                isFolder
                href
            }

       }
`
