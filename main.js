'use-strict';

const products = [
  {name: 'Chilli powder', price: 0.65},
  {name: 'Chilli pieces', price:0.65},
  {name: 'Curry powder', price:0.6},
  {name: 'Meat Curry powder', price:0.99},
  {name: 'Roasted Curry powder', price:0.86},
  {name: 'Mustard powder', price:0.43},
  {name: 'Peper powder', price:1.08},
  {name: 'Yellow Turmeric', price:3.44},
  {name: 'Ginger', price:0.86}
]

const createTable = () => {
  const headRows = ['Produkte', 'Euro pro 100g','Euro pro 500g', 'Euro pro 1kg'];
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
  if(index === 2) products.map(item => appendCell(row, 'cell', convertToEuro(item.price * 5)));
  if(index === 3) products.map(item => appendCell(row, 'cell', convertToEuro(item.price * 10)));
  return row;
}

const convertToEuro = num => `${num.toFixed(2)} Euro`;

createTable();
