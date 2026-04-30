import './polyfills.server.mjs';
import{a as i}from"./chunk-SEYVKUHA.mjs";import{y as n}from"./chunk-CPB7XVWR.mjs";import{M as r,R as o}from"./chunk-7AKRAL3X.mjs";var a=class t{httpClient=o(n);getAllProducts(e=1){return this.httpClient.get(i.baseUrl+`products?page=${e}`)}static \u0275fac=function(p){return new(p||t)};static \u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"})};export{a};
