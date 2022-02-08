import './App.css';
import "antd/dist/antd.css";
import { Layout } from 'antd';
import {HeaderComponent} from './components/Header/Header.tsx'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {Home} from './components/Home/Home.tsx'
import {Docs} from './components/Docs/Docs.tsx'
import {Download} from './components/Download/Download.tsx'
import {Development} from './components/Development/Development.tsx'

const { Content, Footer } = Layout;


function App() {
  return (
          <Router>
    <Layout>
<HeaderComponent />
        <Content style={{ padding: '0 300px', minHeight: 'calc(100vh - 137px)' }}>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/download" element={<Download />} />
      <Route path="/development" element={<Development />} />
    </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sberbank ©2022 Created by LabRnD</Footer>
      </Layout>
                  </Router>
  );
}

export default App;
