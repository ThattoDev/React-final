
const CadastrarProdutos = ({ nome, setNome, custo, setCusto, preco, setPreco, descricao, setDescricao, quantidade, setQuantidade,
    categoria, setCategoria, adicionarProduto, editando, edit, cancelar, salvar }) => {
        /* criar um state de categorias e puxar as categoria manual , mapeando manualmente o que ta na api , fazer switch p adicionar a categoria 
        case 1 - return eletronicos
        case 2-return celulares
        */
        // const listaCategorias = ({categorias}) => {
        //     return (
        //         <>
        //             {data.map((item, index) => (
        //                 <>
        //                 <h1 key={index}>{index + 1} - {item.nomeCategoria}</h1>
        //                 <li><a class="dropdown-item" href="#">Action</a></li>
        //                 </>
        //             ))}
        //         </>
        //     );
        // }
        

    return (

        <div className="container">
            <h3 className="text-center" >Insira ou edite um produto</h3>
            <form className="row g-3 mt-2">
                <div className="col-md-4">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Ex: Iphone X" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Categoria</label>
                    <input type="text" className="form-control" placeholder="Ex: Celulares" value={categoria.idCategoria} onChange={e => setCategoria({ "idCategoria": e.target.value })} />
                </div>

                {/* <div>
                    <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              { <função que gera os lis ></função>}
                            </ul>
                        </div>
                </div> */}

                <div className="col-md-4">
                    <label className="form-label">Descrição</label>
                    <input type="text" className="form-control" placeholder="Ex: 126GB" value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Custo</label>
                    <input type="number" className="form-control" placeholder="Ex: 3000" value={custo} onChange={e => setCusto(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Preço Unitário</label>
                    <input type="number" className="form-control" placeholder="Ex: 6000" value={preco} onChange={e => setPreco(e.target.value)} />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Quantidade Estoque</label>
                    <input type="number" className="form-control" placeholder="Ex: 25" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                </div>

                {editando.edit ?
                    <div className="col-12 mt-4 mb-4">
                        <button type="button" className="btn btn-danger me-2" onClick={cancelar}>Cancelar</button>
                        <button type="button" className="btn btn-success" onClick={salvar}>Salvar</button>
                    </div>
                    :
                    <div className="col-12 mt-4 mb-4">
                        <button type="button" className="btn btn-success" onClick={adicionarProduto}  >
                            <div className='d-flex align-items-center'>Adicionar</div>
                        </button>
                    </div>
                }

            </form>
            <h3>Produtos cadastrados no seu sistema!</h3>
        </div>
    );
}

export default CadastrarProdutos;