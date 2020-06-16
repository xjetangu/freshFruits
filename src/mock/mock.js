const Mock = require('mockjs');
const tabs = require('./json/tabs.json')
const swiper = require('./json/swiper.json')
const goodsItem = require('./json/goods0Item.json')
const goodsTime = require('./json/goodsTime.json')
Mock.mock('/tabs', 'get', tabs)
Mock.mock('/swiper', 'get', swiper)
Mock.mock('/goodsItem', 'get', goodsItem)
Mock.mock('/goodTime', 'get', goodsTime)