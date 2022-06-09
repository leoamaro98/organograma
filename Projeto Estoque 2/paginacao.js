var getDataArray = sessionStorage.getItem('valueTextResposta');
var getDataLenght = sessionStorage.getItem('respostaLength');

var data = JSON.parse(getDataArray)
var dataLenght = getDataLenght

console.log(dataLenght);


let perPage = 10;
const state = {  //Nao consigo alterar o valor de um atribuito dentro do objeto, por isso estou carregando perpage fora do objeto
    page: 1,
    perPage,
    totalPage: Math.ceil(dataLenght.length / perPage),  // Mathe Cell arredonda pra cima
    maxVisibleButtons: 5
}

const html = {
    get(element) {
        return document.querySelector(element)
    }
}

const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPage
        if (lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--
        if (state.page < 1) {
            state.page++
        }

    },
    goTo(page) {
        if (page < 1) {
            state.page = +1;
        }
        state.page = page;
        if (page > state.totalPage) {
            state.page == state.totalPage
        }
    },
    createListeners() {
        html.get(".first").addEventListener('click', () => {
            controls.goTo(1);
            update()
        })

        html.get(".last").addEventListener('click', () => {
            controls.goTo(state.totalPage)
            update();
        })

        html.get(".next").addEventListener('click', () => {
            controls.next();
            update();
        })

        html.get(".prev").addEventListener('click', () => {
            controls.prev();
            update();
        })

    }
}

const buttons = {
    create(number) {
        element: html.get('.pagination .numbers')
        const button = documento.create('div')
        button.innerHTML = number;

        if (state.page == number) {
            button.classList.add('active')
        }

        button.addEventListener('click', (event) => {
            const page = event.target.innerText
            controls.goTo(page)
            update()
        })


        buttons.element.appendChild(button)

    },
    update() {
        buttons.element('.pagination .numbers').innerHTML = ""
        const { maxLeft, maxRight } = buttons.calculateMaxVisible()
        for (let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page)

        }
    },
    calculateMaxVisible() {
        const { maxVisibleButtons } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
        let maxRight = (state.page - Math.floor(maxVisibleButtons / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = maxVisibleButtons
        }

        if (maxRight > state.totalPage) {
            maxLeft = state.totalPage - (maxVisibleButtons - 1)
            maxRight = state.totalPage
            if (maxLeft < 1) maxLeft = 1
        }

        return { maxLeft, maxRight }
    }
}


const list = {
    create(item) {


        const div = document.createElement('table')
        div.classList.add('item')
        div.innerHTML = item

        html.get('.list').appendChild(div);
    },

    update() {
        setTimeout(function () {
            html.get('.list').innerHTML = ""
            let page = state.page - 1
            let start = page * state.perPage
            let end = start + state.perPage

            const paginatedItem = data.slice(0, 10)
            //console.log(paginatedItem);

            paginatedItem.forEach(function (produto) {
                adicionaPacienteNaTabela(produto);
            });


        }, 5000)

    },
}

function update() {
    list.update()
    buttons
}

function init() {
    controls.createListeners()
    update()



}


init()
