<template>
    <div>
        <router-view />
    </div>
</template>

<style lang="scss">
</style>
<script>
import { useWebsocket } from "./hooks/index";
export default {
    mounted() {
        // console.log(process.env.VUE_APP_BASE_URL);
    },
    beforeCreate() {
        var that = this;
        console.log(this);
        const ws = useWebsocket(handleMessage);
        function handleMessage(e) {
            let data = JSON.parse(e.data);
            if (data.message == "ipad1" || data.message == "body1") {
                that.$router.push("/");
            } else if (data.message == "ipad2" || data.message == "body2") {
                that.$router.push("/pagetwo");
            } else if (data.message == "ipad3" || data.message == "body3") {
                that.$router.push("/pagethree");
            }
        }
    },
};
</script>