import backTop from '../../../components/content/backTop/backTop.vue'
export const backTopMixin = {
    components: {
        backTop
    },
    data() {
        return {
            isbackTop: false
        }
    },
    methods: {
        scroll(pos) {
            this.isbackTop = (-pos.y) > 1000
        },
        scrollTo() {
            this.$refs.scroll.scrollTo(0, 0, 1000)
        }
    },
}