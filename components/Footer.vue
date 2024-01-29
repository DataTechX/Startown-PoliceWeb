<template>
    <footer class="relative py-5 overflow-hidden text-white bg-black/10" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.9), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.6));">
        <div class="absolute top-0 right-0 translate-x-1/3 w-[100vw] h-[100vw] rounded-full blur-[50vw]"></div>

        <div class="relative mx-auto myFooter grid gird-cols-1 gap-4 sm:gap-0 items-center">
            <div class="w-full text-center">
                <p class="text-sm">&copy; 2022 - {{ datecopyrigth }}<a class="hover:underline" href="https://nongjj.pages.dev/"><span>&nbsp;_x1j33j3r</span></a> All Rights Reserved.</p>
                    
            </div>
        </div>
    </footer>
</template>

<script setup>

const datecopyrigth = new Date().getFullYear();


</script>

<style scoped>
.myFooter {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
}
</style>