
<template>
    <div>
        <h1>Jobs Available</h1>
        <div v-if="responseData">
            <div v-for="test in responseData" :key="test.id">
                <p>{{ test.title }}</p>
            </div>
        </div>
        <div v-else>
            <p>Loading data...</p>
        </div>
       
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