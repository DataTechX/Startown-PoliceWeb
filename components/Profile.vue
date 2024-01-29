<template>
    <div class="flex w-full pl-4 2xl:pl-0 2xl:pr-8">
        <div class="mx-auto myProfile myProfileFade">
            <div class="flex w-full pl-4 pr-4 2xl:pl-0 2xl:pr-8">
                <div class="mx-auto myProfile">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-10">
                        <div class="relative bg-white/10 p-5 rounded-2xl overflow-hidden border border-white/10" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.2), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.3));">
                            <a class="block w-fit bg-white/10 text-xs py-1 px-3 rounded-full mb-4">WOKR ALL</a>
                            <h1 class="relative text-1xl">11111&nbsp;<span class="text-1xl">ครั้ง</span></h1>
                        </div>
                        <div class="relative bg-white/10 p-5 rounded-2xl overflow-hidden border border-white/10" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.2), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.3));">
                            <a class="block w-fit bg-white/10 text-xs py-1 px-3 rounded-full mb-4">WOKR ALL</a>
                            <h1 class="relative text-1xl">11111&nbsp;<span class="text-1xl">ครั้ง</span></h1>
                        </div>
                        <div class="relative bg-white/10 p-5 rounded-2xl overflow-hidden border border-white/10" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.2), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.3));">
                            <a class="block w-fit bg-white/10 text-xs py-1 px-3 rounded-full mb-4">WOKR ALL</a>
                            <h1 class="relative text-1xl">11111&nbsp;<span class="text-1xl">ครั้ง</span></h1>
                        </div>
                        <div class="relative bg-white/10 p-5 rounded-2xl overflow-hidden border border-white/10" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.2), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.3));">
                            <a class="block w-fit bg-white/10 text-xs py-1 px-3 rounded-full mb-4">WOKR ALL</a>
                            <h1 class="relative text-1xl">11111&nbsp;<span class="text-1xl">ครั้ง</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols lg:grid-cols gap-3 mb-10 items-center justify-center ">
                <div class="w-[700px]  relative mt-12 p-10 border border-white/10 rounded-2xl" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.2), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.2) 67%, rgba(255,115,36,0.3));">
                    <div class="relative -mt-20 justify-center mb-8">
                        <div class="relative w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] mx-auto mb-10">
                            <img src="https://cdn.discordapp.com/avatars/827530462675075102/67776aaee6508de47889cb3e25e4fa11.webp" class="bg-yellow-200/10 w-full h-full object-cover rounded-full" alt="">
                            <div class="absolute bottom-3 right-4"></div>
                        </div>

                        <div class="flex justify-center items-center space-x-2">
                            <h1 class="text-3xl font-semibold w-fit mb-1 border border-transparent bg-gradient-to-tr from-yellow-100 to-yellow-300 bg-clip-text text-transparent">TTTTTTTT</h1>
                            <!-- <i class="fad fa-check text-green-500 text-2xl border border-green-600 rounded-2xl p-1"></i> -->
                            <i class="absolute right-20 fal fa-check-circle bg-white/10 rounded-lg text-xs text-gray-200 whitespace-nowrap px-2.5"><span class="text-sm ml-2 ">ยืนยันแล้ว</span></i>
                        </div>
                        <p class="text-lg font-bold text-white text-center">ตำแหน่ง: ผบตร</p>

                    </div>
                    <div class="absolute w-full h-full"></div>
                    <div class="relative grid grid-cols-1 sm:grid-cols-2">
                        <div class="text-center py-6 lg:py-0 boder-b sm:border-b-0 sm:border-r border-white/10">
                            <p class="text-xs text-white/40 mb-2">Verify</p>
                            <div class="flex flex-col items-center space-y-1">
                                <a class="block w-fit bg-white/10 transition duration-300 px-4 rounded-lg">HASH: <span id="hidehash">gawegawe</span></a>
                                <a class="block w-fit bg-white/10 transition duration-300 px-4 rounded-lg">UUID: 1234567989</a>
                            </div>
                        </div>

                        <div class="text-center">
                            <p class="text-xs text-white/40 mb-2">Join Work Day</p>
                            <div class="flex flex-col items-center space-y-1">
                                <a class="block w-fit bg-white/10 transition duration-300 px-4 rounded-lg">JOIN: <span id="hidehash">gawegawe</span></a>
                                <a class="block w-fit bg-white/10 transition duration-300 px-4 rounded-lg">DAY: 1234567989</a>
                            </div>
                        </div>
                    </div>


                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script setup>

onMounted(() => {
    let hidehash = document.getElementById("hidehash")


    //blur text
    hidehash.innerHTML = hidehash.innerHTML.replace(/./g, "•")
    
})

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400&display=swap');
.myProfile {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}

.myProfileFade {
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    -moz-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    -ms-animation: fadeIn 1s;
}
</style>