<template>
    <div class="m-2" style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div>

    <div class="bg-black text-white ">
        <div class=" min-h-full">
            <div class="fixed w-full top-0 z-50 text-white #bg-white/10 backdrop-blur-md">
                <nav class="relative sm:h-[75px]">
                    <button @click="toggleMenu()" type="button"
                        class="block sm:hidden absolute right-4 top-3 w-[42px] h-[42px] rounded-lg bg-white/10 text-white/80 border border-white/10 transition duration-500 hover:bg-white/30">
                        <i class="far fa-bars"></i>
                    </button>

                    <div class="h-full mx-auto myNavber flex flex-col sm:flex-row justify-between items-center">
                        <a  class="py-4 sm:py-0 transition duration-300 hover:scale-105" href="/">
                            <span class="text-2xl tracking-tighter font-inter-bold"><span class="text-[#facc15]">Star&nbsp;</span>Town</span>
                            <span class="text-xs text-white/40 ml-2">1.2</span>
                        </a>

                        <div id="xnxnx" class="hidden pb-4 sm:pb-0 sm:flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto items-center sm:items-center">
                            <a class="w-full text-center sm:w-auto px-6 py-3 sm:py-1 bg-white/10 border border-white/10 sm:bg-transparent sm:border-none rounded-xl sm:rounded-full transition duration-300 hover:bg-white/20 sm:hover:bg-white/10 sm:hover:border-white/10" href="#rule">Rules</a>
                            <a class="w-full text-center sm:w-auto px-6 py-3 sm:py-1 bg-white/10 border border-white/10 sm:bg-transparent sm:border-none rounded-xl sm:rounded-full transition duration-300 hover:bg-white/20 sm:hover:bg-white/10 sm:hover:border-white/10" href="#dev">Support</a>
                            <a href="#" class="w-full sm:w-auto text-center bg-white text-black rounded-xl sm:bg-white/10 px-6 py-3 sm:py-1 sm:border sm:border-white/10 sm:text-white sm:rounded-full transition duration-300 hover:bg-white/60 sm:hover:bg-white/20">Login</a>
    
                            <div  class="flex-none gap-2">
                                <div class="dropdown dropdown-end">
                                    <!-- <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                        <div class="w-10 rounded-full">
                                            <img src="https://discord.mx/hcvOiDRmYc.jpg" alt="">

                                        </div>
                                    </label> -->
                                    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </div>

                </nav>
            </div>
        </div>
    </div>
</template>


<script setup>

function toggleMenu() {
    const mb = document.getElementById("xnxnx");
    if (mb.classList.contains("hidden")) {
        mb.classList.remove("hidden");
        mb.className += " flex pb-4 sm:pb-0 sm:flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto items-center sm:items-center";
    } else {
        mb.classList.add("hidden");
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400&display=swap');
.myNavber {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}

</style>