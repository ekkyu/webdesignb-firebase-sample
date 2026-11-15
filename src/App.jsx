import './App.css';
import Typography from '@mui/material/Typography';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Typography variant="h4" sx={{ my: 3 }}>ふしぎ菓子店</Typography>
      <ProductList />
    </div>
  );
}

export default App;
