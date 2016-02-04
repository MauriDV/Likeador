// ==UserScript==
// @name         Likeador
// @version      0.1
// @description  likear todo el contenido del Mi
// @author       @Mauri934
// @match        https://www.taringa.net/*
// @match      http://www.taringa.net/*

// @grant        none
// ==/UserScript==
/* jshint -W097 */
//'use strict';

$("#Feed-controls-mi ul").append("<li><a onclick=\"$('.require-login.button-action-s.action-vote.hastipsy').click()\">Likear</a></li>")
