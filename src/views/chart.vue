<template>
    <div>
        <img style="width: calc(120px + 45vw)" :src="Chart" >
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