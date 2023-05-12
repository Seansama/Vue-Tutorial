Vue.createApp({
data(){
    return{
        message: "Shopping List App",
        editing: false,
        newItem: '',
        newItemPriority: false,
        items: []
    }
},
    computed:{
    charCount(){
        return this.newItem.length
     },
        reversedItems(){
        return [...this.items].reverse()
        }
    },

    methods:{
    saveItem(){
        this.items.push({
            id: this.items.length + 1,
            label: this.newItem, highPriority: this.newItemPriority})
        this.newItem = ''
        this.newItemPriority = ''
    },
        doEdit(editing){
        this.editing = editing
            this.newItem = ''
            this.newItemPriority = ''
        },
        togglePurchased(item){
        item.purchased = !item.purchased
        }
    }
}).mount('#shopping-list')