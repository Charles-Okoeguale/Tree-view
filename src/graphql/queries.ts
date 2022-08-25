import {gql} from '@apollo/client'

export const GET_FILES = gql `
       {
        ls(directory: "folder") {
            name
            isFolder
            href
          }
       }
`