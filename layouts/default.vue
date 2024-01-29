<template>
    
    <!-- <Annoutment /> -->

    <Navbar />
    <slot />

    <Footer />
</template>


<script setup>
    onMounted(() => {
        console.clear();
        var text = "font-size: 50px; color: #FF7961; font-weight: 500px;";
        console.log('%cHYPE SERVICE', text);
    })
</script>