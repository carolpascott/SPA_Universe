//orientação a objetos - classe
//num objeto, não necessita usar a palavra"function", "const" ...

//função dentro de uma classe => método
//variáveis => atributo
export class Router {

    routes = {}

    //rotas adicionadas no index.js
    add(routeName, page) {
        //propriedade: valor
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event //evento passado ou o da janela
        event.preventDefault() //não fazer o padrão
    
        //incluir o estado no histórico - página (href)
        window.history.pushState({}, "", event.target.href)
        
        //dentro da classe, usar o "this" antes da função
        this.handle()
    }
    
    handle() {
        //destructuring => pegar o pathname de location e incluir numa variável de mesmo nome        
        const { pathname }  = window.location //pathname = página
        const route = this.routes[pathname] || this.routes[404]        

        //obter conteúdo de outra página html
        fetch(route) //buscar a rota (assíncrono, não trava a aplicação)
        .then(data => data.text()) //transformar em texto
        .then(html => {
            this.page(pathname, html)
        })
    }
      
      page(pathname, html) {

        const body = document.querySelector('body')           
        body.removeAttribute('class')

        if(pathname == '/') {
            body.classList.add("home")
        }
        else if(pathname == "/universo") {
            body.classList.add("universo")
        }
        else if(pathname == "/exploracao") {
            body.classList.add("exploracao")
        }
        else {
            body.classList.add("_404")
        }
        
        //passar o conteúdo p/ a div app (no index.html)
        document.querySelector('#app').innerHTML = html
      }
}
