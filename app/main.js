// import {aaa} from "./common.js";

// console.log(aaa);


// import "./a.css";
import a from "./icon.svg";

var ssss = require("./icon.svg");


// document.getElementById("svg-con").innerHTML = '<svg><use xlink:href="#icon"></use></svg>';
document.getElementById("svg-con2").innerHTML = '<svg><use xlink:href="#' + a.id + '"></use></svg>';




