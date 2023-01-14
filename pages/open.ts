import { useRoute, useRouter } from "vue-router";

// http://localhost:3000/open?to=https://game.aoe.top



export default defineComponent({
    setup() {
        let route = useRoute();
        let router = useRouter();
        let link = route.query.to as string;
        if (link) {
            open(link);
        }
        console.log(route);
        console.log(router);

        // 获取来源
        let back = route.query.back
        if (back) {
            // router.push(from);
            console.log(back);

        }
    },
    render() {
        return `<div />`
    }
})
