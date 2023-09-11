import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
// import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from "./PostPage"
import EditPost from "./EditPost"
import {Routes,Route} from 'react-router-dom'

import { DataProvider } from './context/DataContext';

// import Post from './Post';

function App() {
  
    
  

return (
    <div className="App">
      <DataProvider>
        <Header title="Social Media App" />
          <Nav 
          
          />
          <Routes>
                <Route path="/" element={<Home 
                   
                    />} />
                <Route path="/post">
                  <Route index element={<NewPost 
                      />} />
                
                  <Route path=":id" element={<PostPage />} />
                </Route> 
                  
                <Route path="/edit/:id" element={<EditPost 
                     
                  />} />   
              <Route path="/about" element={ <About />} />
              <Route path="*" element={<Missing />} />
          </Routes>     
          <Footer />
      </DataProvider>
        
    </div>
  );
}

export default App;