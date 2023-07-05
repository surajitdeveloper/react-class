import React from 'react';
// import axios from 'axios';
import apiService from './Api';
function Content() {
  const [products, setProducts] = React.useState([]);
  const [todo, setTodo] = React.useState([]);
  const callProduct = async () => {
    // const products = await axios.get("https://dummyjson.com/products");
    // console.log("1")
    // const productData = products.data.products
    // console.log("product --->", productData)
    // setProducts(productData)
    const productData = await apiService.products()
    console.log("productData --->", productData)
    setProducts(productData)
  }
  React.useEffect(() => {
    callProduct()

    apiService.todo().then(e => {
      console.log("todo data --->", e)
      setTodo(e)
    })
    
    
    // axios.get("https://dummyjson.com/products")
    //   .then(e => {
    //     // console.log("responswe product --->", e.data.products)
    //     console.log("1")
    //     setProducts(e.data.products)
    //   })
    
      // axios.get("https://dummyjson.com/todos")
      // .then(e => {
      //   console.log("responswe todo --->", e.data.todos)
      //   console.log("2")
      //   setTodo(e.data.todos)
      // })
    
    
      
  }, [])
  return (
    <div className='parent'>
      <table>
        <tbody>
        <tr>
          <td>
          <div className='clild'>
      <div>
      {/* Content Component */}
      {products.map(({title, description},index)=>{
       return <div key={title+index}>
        <h2>{title} </h2>
        <p>{description}</p>
      </div>
    })}
    </div>
      </div>
      
          </td>
            <td>
          <div className='child'>
            {todo.map(({todo},index)=>{
            return <div key={todo+index}>
              <p>{todo}</p>
            </div>
          })}
      </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Content;