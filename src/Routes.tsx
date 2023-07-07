import { Routes, Route } from 'react-router-dom';
import { useGetProductsQuery } from './graphql/generated';

import Loading from './components/Loading';
import About from './pages/About';
import Home from './pages/Home';
import Work from './pages/Work';
import ListProducts from './pages/ListProducts';
import ProductOverview from './pages/ProductOverview';
import SpecialConditions from './pages/SpecialConditions';
import SpareParts from './pages/SpareParts';
import FinalClient from './pages/FinalClient';

export default () => {

  const { data } = useGetProductsQuery();

  return(
    <Routes>
      <Route path='/' element={ data ? <Home/> : <Loading/>}/>
      <Route path='/historia' element={ data ? <About/> : <Loading/>}/>
      <Route path='/seja-revenda' element={ data ? <Work/> : <Loading/>}/>
      <Route path='/onde-comprar' element={ data ? <FinalClient/> : <Loading/>}/>
      <Route path='/condicoes-especiais' element={ data ? <SpecialConditions/> : <Loading/>}/>
      <Route path='/:line' element={ data ? <ListProducts/> : <Loading/>}/>
      <Route path='/:category/:slug' element={ data ? <ProductOverview/> : <Loading/>}/>
      <Route path='/:category/:slug/pecas-de-reposicao' element={ data ? <SpareParts/> : <Loading/>}/>
    </Routes>
  );
}