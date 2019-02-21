 
const trademanagement = require('./trade-management/trade-management_api_doc.json'); 
const usermanagement = require('./user-management/user-management_api_doc.json'); 
const stockmanagement = require('./stock-management/stock-management_api_doc.json');
 
const incompletetrademanagement = require('./trade-management/trade-management_api_doc1.json'); 
const incompleteusermanagement = require('./user-management/user-management_api_doc1.json'); 
const incompletestockmanagement = require('./stock-management/stock-management_api_doc1.json');


module.exports = {
 ...trademanagement,
 ...usermanagement,
 ...stockmanagement,
 };