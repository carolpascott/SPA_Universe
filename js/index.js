import { Router } from './router.js'

//mapeamento das rotas
const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
// router.add(404, "/pages/404.html")

router.handle()

//evento onpopstate é disparado após uma ação no navegador
//como ao clicar no botão de voltar
//ao disparar o popstate, dispara tbm a função handle p/ atualizar a página
window.onpopstate = () => router.handle()
//chamar a função route
window.route = () => router.route()
