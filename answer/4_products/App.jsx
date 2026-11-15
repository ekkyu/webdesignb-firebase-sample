import './App.css';
import Typography from '@mui/material/Typography';
import ProductList from './components/ProductList';
import Reviews from './components/Reviews';
import UploadProducts from './components/UploadProducts'; // ★1回使ったら消す

function App() {
  return (
    <div className="App">
      <Typography variant="h4" sx={{ my: 3 }}>ふしぎ菓子店</Typography>
      <UploadProducts /> {/* ★1回押したら消す */}
      <ProductList />
      <Reviews />
    </div>
  );
}

export default App;
