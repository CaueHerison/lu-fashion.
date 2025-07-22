import style from './ProdutosPage.module.scss'
import { useState } from 'react';
import shortJens from '../../assets/produtos-img/short-jens.png' 
import shortAlf from '../../assets/produtos-img/short-alf.png' 
import vestidoFlorido from '../../assets/produtos-img/vestido-florido.png' 
import vestidoPoliamida from '../../assets/produtos-img/vestido-poliamida.png' 
import conjuntoAzul from '../../assets/produtos-img/conjunto-azul.png' 
import conjuntoPraia from '../../assets/produtos-img/conjunto-praia.png' 


const produtos = [
  { id: 1, nome: 'Short jeans', preco: '159,90', categoria: 'Shorts', imagem: shortJens },
  { id: 2, nome: 'Beigee', preco: '79,90', categoria: 'Shorts', imagem: shortAlf },
  { id: 3, nome: 'Jeans', preco: '199,90', categoria: 'Vestidos', imagem: vestidoFlorido },
  { id: 4, nome: 'Vestidess', preco: '199,90', categoria: 'Vestidos', imagem: vestidoPoliamida },
  { id: 5, nome: 'Guantré', preco: '39,90', categoria: 'Acessórios', imagem: conjuntoAzul},
  { id: 5, nome: 'Guantré', preco: '39,90', categoria: 'Acessórios', imagem: conjuntoPraia}
];

const categorias = ['Todas', 'Blusas', 'Calças', 'Vestidos', 'Shorts'];

export default function ProdutosPage() {
  const [filtro, setFiltro] = useState('Todas');

  const produtosFiltrados = filtro === 'Todas'
    ? produtos
    : produtos.filter((p) => p.categoria === filtro);

  return (
    <div className={style.page}>
      <h1>Nossos Produtos</h1>

      <div className={style.filter}>
        {categorias.map((cat) => (
          <button
            key={cat}
            className={filtro === cat ? 'filtro ativo' : 'filtro'}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={style.produtos}>
        {produtosFiltrados.map((p) => (
          <div key={p.id} className={style.card}>
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>R$ {p.preco}</p>
            <button className={style.btn}><a href="https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=558589526144&text" target='_blank'>Ver detalhes</a></button>
          </div>
        ))}
      </div>
    </div>
  );
}
