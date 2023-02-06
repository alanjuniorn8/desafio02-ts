import { 
  ChakraProvider,
} from "@chakra-ui/react";

import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <ChakraProvider>
      <Layout>         
      </Layout>
    </ChakraProvider>
  );
}

export default App;
