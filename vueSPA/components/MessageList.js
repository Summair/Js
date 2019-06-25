import MessageListItem from './MessageListItem.js';
export default {
    name:'MessageList',
    template: `<ul>
        <message-list-item v-for="item in items" :item="item" @delete="deleteMessage(item)">`,
    prop: {
        items: {
            type: Array,
            required: true
        }
    },
    components:{
        MessageListItem
    },
    methods: {
        deleteMessage (message) {
            this.$emit('delete', message);
        }
    }
};