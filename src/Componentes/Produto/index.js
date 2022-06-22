import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import CadastrarProdutos from '../CadastrarProduto';
import Card from '../Card';


const Produto = () => {
    const [nomeProduto, setNomeProduto] = useState("")
    const [custo, setCusto] = useState("")
    const [precoUnitario, setPrecoUnitario] = useState("")
    const [descricaoProduto, setDescricaoProduto] = useState("")
    const [quantidadeEstoque, setQuantidadeEstoque] = useState("")
    const [categoria, setCategoria] = useState({ "idCategoria": 1 })
    const [idProduto, setIdProduto] = useState(0)
    const [editando, setEditando] = useState({ edit: false, id: null })
    const { tasks } = useAxiosGet('/produtos')
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        if (!tasks) return
        setProdutos(tasks)
       // setIdProduto(tasks.length)
    }, [tasks])

    const adicionarProduto = async () => {
        if (nomeProduto === "" || custo === "" || precoUnitario === "" ||
            descricaoProduto === "" || quantidadeEstoque === "" || categoria === null) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoProduto = {

            nomeProduto: nomeProduto,
            custo: custo,
            precoUnitario: precoUnitario,
            descricaoProduto: descricaoProduto,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria

        }
        console.log(novoProduto)
        const { data } = await api.post('/produtos/adicionar', novoProduto)

        setProdutos([
            ...produtos,
            data
        ])

        setIdProduto("")
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({"idCategoria": 1  })
    }

    const editarProduto = (produto) => {
        setEditando({ edit: true, idProduto: produto.idProduto })
        setNomeProduto(produto.nomeProduto)
        setCusto(produto.custo)
        setPrecoUnitario(produto.precoUnitario)
        setDescricaoProduto(produto.descricaoProduto)
        setQuantidadeEstoque(produto.quantidadeEstoque)
        setCategoria(produto.categoria)
    }
    
    const excluirProduto = async (idProduto) => {
        const produtosFiltrados = produtos.filter(produto => produto.idProduto !== idProduto)
        setProdutos(produtosFiltrados);
        const { data: produtoExcluido } = await api.delete(`/produtos/${idProduto}`)
        console.log("problema de back end, culpa do pessoal que fez a api")
    }

    const cancelar = () => {
        setEditando({ edit: false, idProduto: null })
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({ "idCategoria": 1  })
    }

    const salvar = async () => {
        const produtoEditado = {
            nomeProduto: nomeProduto,
            custo: custo,
            precoUnitario: precoUnitario,
            descricaoProduto: descricaoProduto,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria
        }

        const { data } = await api.put(`/produtos/${editando.idProduto}`, produtoEditado)
        console.log(data)
        console.log(idProduto)
        const produtoseditados = produtos.map(produto => {
            if (produto.idProduto === data.idProduto) {
                console.log("dentro do if")
                
                return {
                    idProduto: produto.idProduto,
                    ...produtoEditado
                }
            }
            return produto
        })
        
        console.log("depois de produtos editads")
        setProdutos(produtoseditados)
        setEditando({ edit: false, idProduto: null })
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({ "idCategoria": 1  })

    }

    return (
        <div className="container">
            <h1 className='titulo text-center'>GERENCIAMENTO DE PRODUTOS</h1>

            <CadastrarProdutos editar={editarProduto} adicionarProduto={adicionarProduto} salvar={salvar} cancelar={cancelar} nome={nomeProduto} setNome={setNomeProduto} custo={custo} setCusto={setCusto}
                preco={precoUnitario} setPreco={setPrecoUnitario} descricao={descricaoProduto} setDescricao={setDescricaoProduto}
                quantidade={quantidadeEstoque} setQuantidade={setQuantidadeEstoque} categoria={categoria} setCategoria={setCategoria} editando={editando} />

            {produtos.map((produto) => <Card key={produto.idProduto} produto={produto} editarProduto={editarProduto} excluirProduto={excluirProduto} />)}
        </div>
    );
}

export default Produto;