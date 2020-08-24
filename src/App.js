import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayOk = ['RajIb', 'JapOr', 'kajOl', 'rohIm', 'manna']
  const products =[
    {name :'PhotoShop', price :'$99.99'},
    {name :'DEll Laptop', price:"$1500.00"},
    {name :'Samsung S10 lite', price:'$1350.00'},
    {name :'Iphone 7plus', price:'$3000.00'}
  ];
  // const productsName = products.map(pd => pd.name);
  // console.log(productsName);
  return (
    <div className="App">
      <header className="App-header">
        <h1>It is a DaiNamIk Work</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayOk.map(nk => <li>{nk}</li>)
          }
          {
            products.map(pd => <li>{pd.price}</li>)
          }
        </ul>
        {
          products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
        }
        
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <ProductTwo product={products[2]}></ProductTwo>
        <ProductTwo product={products[3]}></ProductTwo> */}
        {
          products.map(pd => <ProductTwo product={pd}></ProductTwo>)
        }
        {/* <Person name="SakiB Khan" job="Player"></Person>
        <Person name="SahAruP Khan" job="Actor"></Person> */}
        <Person></Person>
      </header>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () =>{setCount(count - 1);}   //first way event handler
  return(
    <div>
      <h3>Count : {count}</h3>
      <button onClick={handleIncrease}>Decrease</button>
      <button onMouseEnter={() =>{setCount(count + 1);}}>Increase</button>   {/*2nd way event handler */}
    </div>
  );
};

function Users() {
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.name} : {user.phone}</li>)
      }
      </ul>
    </div>
  );
};

function Product(props) {
  const ProductStyle ={
    border : '2px solid gray',
    margin:"15px",
    height : '250px',
    width : "250px",
    float : 'left',
    backgroundColor : 'lightgray',
    borderRadius : '5px',
    color : 'green'
  };
 
  return(
    <div style={ProductStyle}>
        <h3>name: {props.name}</h3>
        <h5>price: {props.price}</h5>
        <button>buy now</button>
    </div>
  );
};

function ProductTwo(props) {
  const ProductTwoStyle ={
    border : '2px solid gray',
    margin:"15px",
    height : '250px',
    width : "250px",
    float : 'left',
    backgroundColor : 'gray',
    borderRadius : '5px',
    color : 'green'
  };
  const {name, price} = props.product;
  return(
    <div style={ProductTwoStyle}>
        <h3>name: {name}</h3>
        <h5>price: {price}</h5>
        <button>buy now</button>
    </div>
  );
};

function Person(props) {
  const PersonStyle ={
    border :'2px solid red',
    margin : '10px',
    width : '300px',
  };
  return(
    <div style={PersonStyle}>
      <h3>Name : {props.name}</h3>
      <h6>He is a {props.job}</h6>
    </div>
  );
};

export default App;
