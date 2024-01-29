<template>
    <div class="flex w-full pl-4 2xl:pl-0 2xl:pr-8">
        <div class="mx-auto myProfile myProfileFade">
            gawegawe
            <div class="bg-white/10 border border-white/10 p-6 rounded-2xl">

                <!-- <canvas id="myChart" role="img" height="446" width="900" class="max-h-[480px]" style="display: block; box-sizing: border-box; height: 446px; width: 900px;">
                    
                </canvas> -->

                <canvas id="myChart" class="max-h-[480px]" height="446" width="900" style="display: block; box-sizing: border-box; height: 446px; width: 900px;"></canvas>

            </div>

        </div>

    </div>
</template>

<script setup>

import Chart from 'chart.js/auto';

onMounted(() => {
    const ctx = document.getElementById('myChart');
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'จำนวนการเข้าใช้งานระบบ',
            data: [1, 2],
            fill: false,
            borderColor: 'rgb(255, 255, 255)',
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            transitions: {
                show: {
                    animations: {
                        x: {
                            from: 0
                        },
                        y: {
                            from: 0
                        }
                    }
                },
                hide: {
                    animations: {
                        x: {
                            to: 0
                        },
                        y: {
                            to: 0
                        }
                    }
                }
            }
        }
    };

    const myChart = new Chart(ctx, config);

});




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