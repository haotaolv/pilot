import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Operate, SliceEdit } from './components/Slice';

const $ = window.$ = require('jquery');
var popupEl = render(<SliceEdit />, document.getElementById('popup_root'));

$(".slice-edit-popup").on('click',function () {
	if(popupEl) {
		popupEl.showDialog();	
	}
});

$(function(){
    let url = '/slicemodelview/listJson/';
//    const $all = $('#j_all');
//    const $fav = $('#j_fav')
//    const $search = $('#j_search');

    const operate = new Operate({
        btnAll: '.j_all',
        btnFav: '.j_fav',
        form: '.j_searchForm'
    });


//    $.getJSON(url, function (response) {

//        let table = render( <Operate {...response.data}  />, document.querySelector('.table-responsive') );

//        console.log('Operate:', operate.fetchOptions() );
//    });

});
