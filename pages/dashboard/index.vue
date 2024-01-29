<template>

    <div class="min-h-screen relative overflow-hidden pt-40 pb-24 2xl:pt-24 2xl:pb-24 bg-[#303134]">
        <div>
            <nav class="block 2xl:hidden flex bg-white/5 h-[60px] border-y border-white/10 overflow-x-auto">
                <button id="click" @click="menu = 1" class="px-6 pt-4 pb-2 transition duration-300 rounded-xl hover:bg-white/5 whitespace-nowrap">บัญชีผู้ใช้<div id="change1"  class="mx-auto w-[20px] h-[4px] transition duration-300 rounded-full"></div></button>
                <button id="click2" @click="menu = 2" class="px-6 pt-4 pb-2 transition duration-300 rounded-xl hover:bg-white/5 whitespace-nowrap">เวลาผู้ใช้<div id="change2" class="mx-auto w-[20px] h-[4px] transition duration-300 rounded-full"></div></button>
            </nav>
        </div>

        <div class="flex relative">
            <div class="hidden 2xl:block min-w-[400px] px-8">
                <div class="bg-white/5 border border-white/10 rounded-xl">
                    <p class="text-center text-xs text-white/40 pt-4 pb-2">การตั้งค่า / Settings</p>
                    <div class="relative text-white">
                        <button id="click3" @click="menu = 1" class="block w-full px-6 py-2 rounded-2xl transition duration-300  hover:bg-white/5"><h1>บัญชีผู้ใช้</h1><p class="text-white/40 text-[10px]">Account</p></button>
                        <div id="change3"  class="absolute bg-[#facc15] left-0 top-1/2 -translate-y-1/2 w-[6px] h-[20px] transition duration-300  rounded-full"></div>
                    </div>
                    <div class="relative text-white">
                        <div id="change4" class="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[20px] transition duration-300  rounded-full"></div>
                        <button id="click4" @click="menu = 2" class="block  w-full px-6 py-2 rounded-2xl transition duration-300 hover:bg-white/5"><h1>เวลาผู้ใช้</h1><p class="text-white/40 text-[10px]">Time User</p></button>
                    </div>
                </div>
            </div>
            <Profile v-if="menu == 1" />
            <Graphs v-if="menu == 2" />
        </div>
    </div>


</template>

<script setup>
let menu = ref(1)

onMounted(() => {

    const change1 = document.getElementById('change1');
    const click = document.getElementById('click');

    const change3 = document.getElementById('change3');
    const click3 = document.getElementById('click3');

    const change4 = document.getElementById('change4');
    const click4 = document.getElementById('click4');

    const change2 = document.getElementById('change2');
    const click2 = document.getElementById('click2');

    click.addEventListener('click', () => {
        change1.classList.add('bg-[#facc15]');
        change2.classList.remove('bg-[#facc15]');
    })

    click2.addEventListener('click', () => {
        change2.classList.add('bg-[#facc15]');
        change1.classList.remove('bg-[#facc15]');
    })

    click3.addEventListener('click', () => {
        change3.classList.add('bg-[#facc15]');
        change4.classList.remove('bg-[#facc15]');
    })

    click4.addEventListener('click', () => {
        change4.classList.add('bg-[#facc15]');
        change3.classList.remove('bg-[#facc15]');
    })

    
    

    

})

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400&display=swap');
.myDashboard {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}

</style>