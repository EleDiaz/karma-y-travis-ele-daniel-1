webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var xregexp = __webpack_require__(2);
	var temperatura = __webpack_require__(11);
	
	(function(exports) {
	    "use strict";
	    document.getElementById('convert').addEventListener('input', main);
	    function main() {
	        var valor     = document.getElementById('convert').value,
	            elemento  = document.getElementById('converted');
	        elemento.innerHTML = temperatura.Medida.convertir(valor);
	        return false;
	    }
	})(this);


/***/ }
]);
//# sourceMappingURL=main.js.map