<template>
    <div id="rule" class="relative overflow-hidden bg-transparent">
        <div class="relative py-20">
            <div class="mx-auto myAbout">
                <div class="alert shadow-lg w-[500px] absolute right-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h3 class="font-bold">New message!</h3>
                        <div class="text-xs">You have 1 unread message</div>
                    </div>
                    <button type="button" class="min-w-[25px] min-h-[25px] bg-white/10 text-sm rounded-full transition duration-300 hover:bg-white/20"><i class="far fa-times"></i></button>
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