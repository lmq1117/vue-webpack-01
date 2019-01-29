<template>
    <p>UserPostContent {{$route.params.userId}} | {{$route.params.postId}}</p>
</template>

<script>
    export default {
        name: "UserPostContent",
        beforeRouteUpdate(to,from,next){
          console.log(to);
          console.log(from);
          console.log(this.$route.params);
          next();
        }
    }
</script>

<style scoped>

</style>
