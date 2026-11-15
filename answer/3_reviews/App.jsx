import './App.css';
import Typography from '@mui/material/Typography';
import ProductList from './components/ProductList';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Typography variant="h4" sx={{ my: 3 }}>ふしぎ菓子店</Typography>
      <ProductList />
      <Reviews />
    </div>
  );
}

export default App;
