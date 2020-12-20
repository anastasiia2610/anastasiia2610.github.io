'use strict';

String.prototype.reverse = function () {
    return this.split("")
        .reverse()
        .join("");
}



Array.prototype.sorted = Array.prototype.sort;

Array.prototype.sort = function () {
    let array = [...this];
    return array.sorted();
}
 


NodeList.prototype.map = Array.prototype.map;

NodeList.prototype.find = Array.prototype.find;

NodeList.prototype.reduce = Array.prototype.reduce;