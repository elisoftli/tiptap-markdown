import { Node } from "@tiptap/core";


const Text = Node.create({
    name: 'text',
});

export default Text.extend({
    /**
     * @return {{markdown: MarkdownNodeSpec}}
     */
    addStorage() {
        return {
            markdown: {
                serialize(state, node) {
                    state.text(node.text);
                },
                parse: {
                    // handled by markdown-it
                },
            }
        }
    }
});
