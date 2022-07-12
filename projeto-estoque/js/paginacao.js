var getToken = sessionStorage.getItem('valueTextToken');
let ambienteSelecionado = sessionStorage.getItem('valueText');

import { conectaEstoque } from './estoque.js'


const html = {
    get(element) {
        return document.querySelector(element)
    }
}

export const state = {
    page: 1,
    totalPage: ""
}


export const controls = {

    createListeners() {
        html.get("#first").addEventListener('click', () => {
            conectaEstoque(ambienteSelecionado, getToken, "1");
            state.page = 1;
            html.get("#divCarregando").classList.remove("invisivel");

        })

        html.get("#next").addEventListener('click', () => {
            state.page++;

            if (state.page > state.totalPage) {
                state.page--;
                conectaEstoque(ambienteSelecionado, getToken, state.page);
            } else
                conectaEstoque(ambienteSelecionado, getToken, state.page);


        })

        html.get("#prev").addEventListener('click', () => {
            state.page--;
            if (state.page <= 1) {
                state.page = 1;
                conectaEstoque(ambienteSelecionado, getToken, state.page);

            } else
                conectaEstoque(ambienteSelecionado, getToken, state.page);

        })

    }
}
