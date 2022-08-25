import React, {useEffect, useState} from "react";
import { Box, Container } from '@mui/material';
import { TreeView } from '@mui/lab';
import { TreeItem } from '@mui/lab';
import {useQuery} from '@apollo/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { GET_FOLDER} from "../../graphql/queries"
import { TryRounded } from "@mui/icons-material";

const App = () => {
  const {error, loading, data} = useQuery(GET_FOLDER)
  const [folders, setFolders] = useState<any[]>([])
  const [subFolders, setSubFolders] = useState<any[]>([])

  const checkHref = () => {
    let str = 'https://jsonplaceholder.typicode.com/users/1/todos'
    let chk = 'cam'
    if (!str.includes(chk)){
      console.log('false')
    } else {
      console.log('true')
    }
   
  }

  useEffect(() => {
    if (data) {
     setFolders(data.ls)
     setSubFolders(data.lsBatch)
    //  console.log(folders)
     console.log(subFolders)

    }
  })

  return (
        <Container sx={{width: '100%', height: '100%', padding: 0, display: 'flex', flexDirection: 'row'}}> 
          <Box sx={{width: '30%', height: '100vh', borderRadius:'1rem', border: '1px solid teal', padding: '1rem'}}>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
              {folders.map((folder, index) => {
                if (!folder.isFolder) return <TreeItem key={index} nodeId={folder.name + "1"} label={folder.name} />
                if (folder.isFolder) {
                   return <TreeItem key={index} nodeId={folder.name + "19"} label={folder.name}>
                           {subFolders.map((subfolder) => subfolder.map((item : any) => {
                            if (item.href.includes(folder.name)) {
                              return <TreeItem key={index} nodeId={item.name + "70"} label={item.name} />
                            }
                           }))}
                          </TreeItem>
                }
              })}
            </TreeView>
            </Box>
            <Box sx={{width: '70%', height: '100vh', borderRadius:'1rem', border: '1px solid teal', padding: '1rem', marginLeft: '1rem'}}>
              Text Editor
            </Box>
        </Container>
  )
};

export default App;



{/* <TreeItem key={index} nodeId={folder.name + "9"} label='kill'/> */}

// BUGS FACED

// 1. DevTools failed to load source map: Could not load content for webpack://radix-frontend-interview/node_modules/@apollo/client/index.js.map: Fetch through target failed: 
// Unsupported URL scheme; Fallback: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME ... solved by adding source-map-provider dependency and adding a rule to the webpack config file




