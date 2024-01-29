<template>
    <div class="animatePage">
        <div class="relative min-h-screen #bg-black/10 overflow-hidden flex items-center bg-cover bg-center myHomeFade" style="background-image: linear-gradient(rgb(0,0,0)10%,rgba(0,0,0,0.7)),url(&quot;https://cdn.discordapp.com/attachments/1124401426513272842/1168641106364334211/330901501_5934253953289132_2009142086505393728_n.png&quot;);">
            <div class="absolute w-full h-full backdrop-blur-sm"></div>
            <div class="z-10 relative myHome mx-auto flex items-center justify-center sm:justify-between">
                <div>
                    <h1 class="text-base sm:text-lg xl:text-xl mb-4">STARTOWN POLICE DEPARTMENT</h1>
                    <h1 class="text-6xl sm:text-5xl xl:text-6xl tracking-tighter font-inter-bold mb-12"><span class="text-[#facc15]">STAR TOWN </span>POLICE</h1>
                </div>
                <div class="hidden sm:block LeftPages">
                    <img class="LeftPage w-[300px]  h-[200px] md:w-[200px] md:h-[200px] xl:w-[400px] xl:h-[360px] rounded-2xl bg-white/10" src="https://cdn.discordapp.com/attachments/1155553449988079616/1156619263352766614/STAR_TOWN.png" alt="">
                </div>
            </div>
        </div>
        <About />
    </div>
</template>

<style scoped>
.myHomeFade {
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    -moz-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    -ms-animation: fadeIn 1s;
}
.animatePage {
    animation-name: animatePage;
    animation-duration: .5s;
}

.LeftPage {
    transform: rotateY(-35deg);
    animation-name: homemxx;
    animation-duration: 1s;
}
.LeftPages {
    perspective: 1000px;
    perspective-origin: 50% 50%;
}
@keyframes LeftPage {
    0% {
        opacity: 0;
        transform: translate(-100px) rotateY('50deg');
    }
}
.myHome {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}


</style>