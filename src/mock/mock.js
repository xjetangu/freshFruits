const Mock = require('mockjs');
const db = require('./json/db.json')
Mock.mock('/api/db', 'get', db)