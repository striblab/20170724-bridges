!function e(t,r,o){function a(n,c){if(!r[n]){if(!t[n]){var l="function"==typeof require&&require;if(!c&&l)return l(n,!0);if(i)return i(n,!0);throw new Error("Cannot find module '"+n+"'")}var s=r[n]={exports:{}};t[n][0].call(s.exports,function(e){var r=t[n][1][e];return a(r||e)},s,s.exports,e,t,r,o)}return r[n].exports}for(var i="function"==typeof require&&require,n=0;n<o.length;n++)a(o[n]);return a}({1:[function(e,t,r){$.urlParam=function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.href);return null!=t?t[1]||0:null};var o=$.urlParam("chart");null!=o&&($(".slide").hide(),$("#"+o).show()),d3.json("./data/bridges.geojson",function(e,t){d3.json("./data/bridges2006.geojson",function(e,r){mapboxgl.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiS3pwY1JTMCJ9.pTSXx_LFgR3XBpCNNxWPKA";var o=new mapboxgl.Map({container:"before",style:"mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n",center:[-94.6859,46.729553],zoom:5,minZoom:5,hash:!1}),a=new mapboxgl.Map({container:"after",style:"mapbox://styles/shadowflare/ciqznymjs0009btm891qyu49n",center:[-94.6859,46.729553],zoom:5,minZoom:5,hash:!1});new mapboxgl.Compare(a,o,{});a.addControl(new mapboxgl.NavigationControl),o.addControl(new mapboxgl.NavigationControl),a.scrollZoom.disable(),o.scrollZoom.disable();var i=new MapboxGeocoder({accessToken:mapboxgl.accessToken});document.getElementById("geocoder").appendChild(i.onAdd(a));var i=new MapboxGeocoder({accessToken:mapboxgl.accessToken});o.on("load",function(){o.addSource("bridges2006",{type:"geojson",data:r}),o.addLayer({id:"bridges2006-fine",type:"circle",source:"bridges2006",paint:{"circle-radius":3,"circle-color":"rgba(150, 150, 150, 0.8)"},filter:["!=","STAT","1"]}),o.addLayer({id:"bridges2006",type:"circle",source:"bridges2006",paint:{"circle-radius":3,"circle-color":"rgba(0,191,255, 1)"},filter:["==","STAT","1"]}),o.addLayer({id:"bridges2006-fo",type:"circle",source:"bridges2006",paint:{"circle-radius":3,"circle-color":"rgba(66, 134, 244, 0)"},filter:["==","STAT","2"]})}),a.on("load",function(){a.addSource("bridges",{type:"geojson",data:t}),a.addLayer({id:"bridges-fine",type:"circle",source:"bridges",paint:{"circle-radius":3,"circle-color":"rgba(150, 150, 150, 0.8)"},filter:["!=","nbi_rating","1"]}),a.addLayer({id:"bridges",type:"circle",source:"bridges",paint:{"circle-radius":3,"circle-color":"rgba(0,191,255, 1)"},filter:["==","nbi_rating","1"]}),a.addLayer({id:"bridges-fo",type:"circle",source:"bridges",paint:{"circle-radius":3,"circle-color":"rgba(66, 134, 244, 0)"},filter:["==","nbi_rating","2"]})})})}),function(){var e={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#trafficChart",padding:e,data:{columns:[["2006",.11,.09,.08,.04,.05,.05,.07,.08],["2017",.06,.07,.05,.03,.04,.02,.01,0]],type:"bar",labels:{format:{}}},legend:{show:!1},color:{pattern:["#aaa","#333"]},axis:{y:{max:.12,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.03,.06,.09,.12],format:d3.format("%")}},x:{type:"category",tick:{rotate:-60,multiline:!1},categories:["<100","100-499","500-999","1k-4k","5k-9k","10k-49k","50k-99k","100k+"],height:40}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}(),function(){var e={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#lengthChart",padding:e,data:{columns:[["% 2006",.09,.11,.08,.07,.03,.06],["% 2017",.06,.09,.06,.03,.02,.03]],type:"bar",labels:{format:{}}},legend:{show:!1},color:{pattern:["#aaa","#333"]},axis:{y:{max:.12,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.03,.06,.09,.12],format:d3.format("%")},label:""},x:{type:"category",tick:{rotate:-60,multiline:!1},categories:["20-49ft","50-74ft","75-99ft","100-199ft","200-499ft","500ft+"],height:40}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}(),function(){var e={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#bigChart",padding:e,data:{columns:[["% deficient",.05,.03],["% F.O.",.08,.07],["% fracture critical",.1,.06]],type:"bar",labels:{format:{"% deficient":d3.format("%"),"% F.O.":d3.format("%"),"% fracture critical":d3.format("%")}}},legend:{show:!1},color:{pattern:["#085388","#8F120B","#d34A44"]},axis:{y:{max:.12,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,.03,.06,.09,.12],format:d3.format("%")},label:""},x:{type:"category",categories:["2006","2017"]}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}(),function(){var e={top:20,right:60,bottom:20,left:40};c3.generate({bindto:"#decadeChart",padding:e,data:{columns:[["2006",915,736,505,1090,1984,2457,2188,2081,1370,0],["2017",513,520,319,650,1593,2307,2147,2066,2086,1195]],type:"bar"},legend:{show:!1},color:{pattern:["#aaa","#333"]},axis:{y:{max:3e3,min:0,padding:{bottom:0,top:0},tick:{count:4,values:[0,1e3,2e3,3e3]},label:""},x:{type:"category",tick:{rotate:-60,multiline:!1},categories:["Pre 1930s","1930s","1940s","1950s","1960s","1970s","1980s","1990s","2000s","2010s"],height:40}},grid:{y:{lines:[{value:.5,text:"",position:"start",class:"powerline"}]}}})}()},{}]},{},[1]);