
import './App.css'
import Products from './components/Products';
import { Suspense } from 'react';
function App() {

  const prodData = fetch('../data.json').then(res => res.json());
  

  return (
    <>
      <h1 className='text-3xl text-center'>Display Smart Products</h1>

      <Suspense fallback={<h1 className='text-3xl text-center'>Data is Loading....</h1>} >
        <Products prodData={prodData}></Products>
      </Suspense>

    </>
  )
}

export default App
