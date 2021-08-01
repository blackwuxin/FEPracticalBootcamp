<template>
    <div class="home">
        <div>{{ msg }}</div>
    </div>
</template>

<script>
// @ is an alias to /src
import { data } from "@/data.js";
export default {
    name: "home",
    components: {},
    data() {
        return {
            msg: "这是一篇默认文章",
        };
    },
    methods: {
        update() {
            let urlString = location.href;
            let urlObj = new URL(urlString);
            let [postid] = urlObj.searchParams.values();
            console.log(postid);
            data["T1348647853363"].forEach((element) => {
                if (element["postid"] == postid) {
                    this.msg = element["digest"];
                }
            });
        },
    },
    mounted: function() {
        this.update();
    },

    watch: {
        $route: {
            handler: function(val, oldVal) {
                debugger;
                this.update();
            },
            // 深度观察监听
            deep: true,
        },
    },
};
</script>

<style>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
