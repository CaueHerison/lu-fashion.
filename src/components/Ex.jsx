import { useState } from 'react';

const produtos = [
  { id: 1, nome: 'Jaqueta Rosa', preco: '159,90', categoria: 'Blusas', imagem: '/images/jaqueta.png' },
  { id: 2, nome: 'Beigee', preco: '79,90', categoria: 'Blusas', imagem: '/images/beigee.png' },
  { id: 3, nome: 'Jeans', preco: '199,90', categoria: 'Calças', imagem: '/images/jeans1.png' },
  { id: 4, nome: 'Vestidess', preco: '199,90', categoria: 'Vestidos', imagem: '/images/vestido.png' },
  { id: 5, nome: 'Guantré', preco: '39,90', categoria: 'Acessórios', imagem: '/images/bolsa.png' },
];

const categorias = ['Todas', 'Blusas', 'Calças', 'Vestidos', 'Acessórios'];

export default function ProdutosPage() {
  const [filtro, setFiltro] = useState('Todas');

  const produtosFiltrados = filtro === 'Todas'
    ? produtos
    : produtos.filter((p) => p.categoria === filtro);

  return (
    <div className="pagina">
      <h1>Nossos Produtos</h1>

      <div className="filtros">
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

      <div className="grade-produtos">
        {produtosFiltrados.map((p) => (
          <div key={p.id} className="card">
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
            <p>R$ {p.preco}</p>
            <button className="botao-detalhes">Ver detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
}
