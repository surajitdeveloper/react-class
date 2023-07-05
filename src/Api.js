import axios from "axios";

axios.defaults.headers.common['Authorization'] = "bearer";

const apiService = {
    async products()
    {
        const products = await axios.get("https://dummyjson.com/products");
        // console.log("1")
        return products.data.products
    },
    todo() {
        return new Promise((res, rej) => {
            axios.get("https://dummyjson.com/todos")
            .then(e => {
                // console.log("responswe todo --->", e.data.todos)
                // console.log("2")
                // setTodo(e.data.todos)
                res(e.data.todos)
            })
                .catch(err => { rej(err); })
        })
    }
}
export default apiService