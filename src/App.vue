<script setup lang="ts">
import { onLaunch } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("start");
  console.log("VITE_BASE_URL: ", import.meta.env.VITE_BASE_URL);
});
</script>
<style></style>
