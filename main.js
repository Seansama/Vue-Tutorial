Vue.createApp({
data(){
    return{
        message: "Shopping list app",
        newItem: '',
        newItemPriority: false,
        items: [
            {id: 1, label: '10 party hats'},
     {id: 2, label: 'A jug of milk'},
     {id: 3, label: 'A house'}
        ]
    }
}
}).mount('#shopping-list')