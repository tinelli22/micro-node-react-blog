import { ThemeProvider } from "styled-components"
import PostForm from "./components/PostForm/PostForm"
import themes from './global/styles/themes.json';
import GlobalStyles from "./global/styles/global";

function App() {
  
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <PostForm />
    </ThemeProvider>
  )
}

export default App
