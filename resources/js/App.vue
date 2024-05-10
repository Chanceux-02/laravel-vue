
<template>
    <div>
        <nav>
            <router-link to="/home">Home</router-link> |
            <router-link to="/jobs">Jobs</router-link> |
            <router-link to="/about">About</router-link> |
        </nav>

        <router-view/>

    </div>
  
</template>

<script>

</script>

<style @scope>

div{
    text-align: center;
}

</style>