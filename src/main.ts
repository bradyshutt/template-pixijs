import 'babel-polyfill';
import * as PIXI from 'pixi.js';


let renderer = PIXI.autoDetectRenderer(256, 256);

document.body.appendChild(renderer.view);

let stage = new PIXI.Container();

renderer.render(stage);

