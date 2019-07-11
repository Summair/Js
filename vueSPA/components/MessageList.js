import MessageListItem from './MessageListItem.js';
import lifecyleLogger from '../mixins/lifecycle-logger.mixin.js'
export default {
    name:'MessageList',
    mixins: [lifecyleLogger],
    template: `<ul>
        <message-list-item v-for="item in items" :item="item" :key="item.id" @delete="deleteMessage(item)">`,
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