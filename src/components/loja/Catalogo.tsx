import produtos from '@/data/constants/produto';
import Area from '../template/Area';
import ProdutoCard from './ProdutoCard';
import { useContext } from 'react';
import CatalogoContext, { CatalogoProvider } from '@/context/CatalogoContext';

export default function Catalogo() {
    const { produtos } = useContext(CatalogoContext);
    
    function renderizar() {
        return produtos.map((prod) => {
            return <ProdutoCard key={prod.id} produto={prod}/>
        });
    }

  return (
    <Area titulo="Catálogo" cor="purple">
      <div className="flex gap-4 flex-wrap justify-around">
        {renderizar()}
      </div>
    </Area>
  );
}
