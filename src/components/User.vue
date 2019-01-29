<template>
    <p>UserContent {{$route.params.userId}} end</p>
</template>

<script>
    export default {
        name: "UserContent",
        watch:{
          '$route'(to,from){
            console.log(to);
            console.log(from);
            console.log(this.$route.params);
          }
        }
    }
</script>

<style scoped>

</style>
