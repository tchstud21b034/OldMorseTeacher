<template>
    <div>
        <img style="width: 65vw" :src="Chart" >
    </div>
</template>

<script>
import Chart from "../assets/chart.jpg"

export default {
    data() {
        return {
            Chart
        }
    }
}
</script>