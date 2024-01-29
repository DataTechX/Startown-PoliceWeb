<template>
    <div id="dev" class="relative overflow-hidden bg-[#23262e]">
        <div class="relative py-20"  style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.9), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.6) 67%, rgba(255,115,36,0.9));">
            <div class="mx-auto myAbout">
                <h1 class="text-center text-2xl sm:text-3xl font-semibold mb-16 text-white">
                    Managers & Support
                </h1>
                <div class="relative w-full sm:w-[940px] mx-auto p-6 bg-black/10 rounded-2xl">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 mb-16 mt-5">
                        <div class="card w-full sm:w-[250px] bg-black/10 shadow-xl mt-10 " v-for="res in 5">
                            <figure><img class="rounded-full absolute z-0" src="https://cdn.discordapp.com/avatars/1186752694237532273/a_f909715509a8eb77ac48a276a266d2e7.webp?size=80" width="128" alt="Shoes" /></figure>
                                <div class="card-body mt-10 text-center">
                                    <h2 class="text-2xl font-semibold">ทดสอบ</h2>
                                    <p>ผบ ตร</p>
                                    <div class="card-actions justify-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400&display=swap');
.myAbout {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}

</style>