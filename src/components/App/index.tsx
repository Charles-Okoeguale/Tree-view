import React, {useEffect} from "react";
import { Box, Container } from '@mui/material';
import { TreeView } from '@mui/lab';
import { TreeItem } from '@mui/lab';
import {useQuery} from '@apollo/client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { GET_FILES } from "../../graphql/queries";


const App = () => {
  const {error, loading, data} = useQuery(GET_FILES)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
        <Container sx={{width: '100%', height: '100%', padding: 0, display: 'flex', flexDirection: 'row'}}>
          <Box sx={{width: '30%', height: '100vh', borderRadius:'1rem', border: '1px solid teal', padding: '1rem'}}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            <TreeItem nodeId="books" label="books">
              <TreeItem nodeId="b1" label="donquijote.txt" />
              <TreeItem nodeId="b2" label="mobydick.txt" />
            </TreeItem>
            <TreeItem nodeId="shakespeare" label="shakespeare">
            <TreeItem nodeId="s-etc" label="etc">
                <TreeItem nodeId="s-etc1" label="beemovie.txt"/>
              </TreeItem>
              <TreeItem nodeId="s1" label="macbeth.txt" />
              <TreeItem nodeId="s2" label="romeo.txt" />
            </TreeItem>
            <TreeItem nodeId="lorem" label="lorem.txt" />
          </TreeView>
          </Box>
          <Box sx={{width: '70%', height: '100vh', borderRadius:'1rem', border: '1px solid teal', padding: '1rem', marginLeft: '1rem'}}>
            text editor
          </Box>
        </Container>
  )
};

export default App;






// DevTools failed to load source map: Could not load content for webpack://radix-frontend-interview/node_modules/@apollo/client/index.js.map: Fetch through target failed: 
// Unsupported URL scheme; Fallback: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME