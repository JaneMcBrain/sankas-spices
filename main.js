'use-strict';

const products = [
  {name: 'Chilli powder', price: 0.65},
  {name: 'Chilli pieces', price:0.65},
  {name: 'Curry powder', price:0.6},
  {name: 'Meat Curry powder', price:1.00},
  {name: 'Roasted Curry powder', price:0.90},
  {name: 'Mustard powder', price:0.50},
  {name: 'Pepper powder', price:1.10},
  {name: 'Peppercorn', price:1.95},
  {name: 'Yellow Turmeric', price:3.45},
  {name: 'Ginger', price:0.90},
  {name: 'Ginger powder', price:0.65},
  {name: 'Fenugreek', price:0.90},
  {name: 'Cinnamon', price:1.30},
  {name: 'Cardomon', price:1.95},
  {name: 'Masala', price:1.10}
]

const createTable = () => {
  const headRows = ['Produkte', 'Euro pro 100g'];
  headRows.map(appendRow);
}

const appendRow = (item, i) => document.querySelector('.spice-table').appendChild(createRow(item, i));
const appendCell = (row, type, text) => row.appendChild(generateCell(type, text));

const generateCell = (type, text) => {
  const cell = document.createElement('p');
  cell.className = `spice-table__${type}`
  cell.textContent = text;
  return cell;
}

const createRow = (text, index) => {
  const row = document.createElement('span');
  row.className = 'spice-table__row'
  appendCell(row, 'head', text);
  if(index === 0) products.map(item => appendCell(row, 'cell', item.name));
  if(index === 1) products.map(item => appendCell(row, 'cell', convertToEuro(item.price)));
  return row;
}

const convertToEuro = num => `${num.toFixed(2)} Euro`;

createTable();
