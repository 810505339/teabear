<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {

});
onShow(() => {
  wx.cloud.init({
    env: 'test-3gszsltre96027e3',
    traceUser: true
  })
});
onHide(() => {
  console.log("App Hide");
});
</script>



<style>
</style>
