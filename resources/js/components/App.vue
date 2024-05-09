
<template>
    <h1>This is some testing</h1>
    <!-- <pre>{{ responseData }}</pre> -->
    <div v-for="test in responseData" :key="test.id">
        <p>{{ test.title }}</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
export default {

    setup(){
    // Define reactive variables
        const responseData = ref(null);
        const error = ref(null);

        // Make API request on component mount
        onMounted(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
            // Handle successful response
            responseData.value = response.data;
            })
            .catch(err => {
            // Handle error
            error.value = err;
            });
        });

        // Expose variables to the template
        return {
            responseData,
            error
        };
    }
}
</script>

<style>

</style>