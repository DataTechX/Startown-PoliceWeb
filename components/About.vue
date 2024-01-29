<template>

    <div id="rule" class="relative overflow-hidden bg-[#23262e]" style="background-position: bottom left; background-repeat: no-repeat; background-size: contain; background: linear-gradient(208deg, rgba(35,38,46,0.9), rgba(35,38,46,0.2) 40%, rgba(255,115,36,0.6) 67%, rgba(255,115,36,0.9));">
        <div class="relative py-20">
            <div class="mx-auto myAbout">
                <h1 class="text-center text-2xl sm:text-3xl font-semibold mb-16 text-white">
                    Police Department Rules
                </h1>
                <div class="relative w-full sm:w-[740px] mx-auto p-6 bg-black/10 rounded-2xl">
                    <div class="text-white">
                        <p class="text-2xl font-semibold text-center">กฏตำรวจ</p>
                        <p class="text-lg mt-4 text-center underline">สามารถอ่านกฏหมายเพิ่มเติมได้ที่ <i class="fas fa-hand-point-down animate-pulse underline text-red-600"></i></p>
                    </div>
                    <div class=" grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 mb-16 mt-5 ">
                        <button class="btn btn-outline btn-info hover:btn-outline"><a href="https://docs.google.com/spreadsheets/d/1SXJBxqwBOMixNRxLzkQx9wWqdzlG_f2U/edit#gid=1616062838">กฏหมายตำรวจ</a></button>
                        <button class="btn btn-outline btn-info hover:btn-outline"><a href="https://docs.google.com/spreadsheets/d/1SXJBxqwBOMixNRxLzkQx9wWqdzlG_f2U/edit#gid=2102478903">รูปแบบการปฏิบัติหน้าที่ของตำรวจ</a></button>
                        <button class="btn btn-outline btn-info hover:btn-outline"><a href="https://docs.google.com/spreadsheets/d/1SXJBxqwBOMixNRxLzkQx9wWqdzlG_f2U/edit#gid=435452751">กฏพื้นฐานกรมตำรวจ</a></button>
                        <button class="btn btn-outline btn-info hover:btn-outline"><a href="https://docs.google.com/spreadsheets/d/1SXJBxqwBOMixNRxLzkQx9wWqdzlG_f2U/edit#gid=2126884545">การใช้วิทยุสื่อสารของกรมตำรวจ</a></button>
                        <button class="btn btn-outline btn-info hover:btn-outline"><a href="https://docs.google.com/spreadsheets/d/1SXJBxqwBOMixNRxLzkQx9wWqdzlG_f2U/edit#gid=1318813511">ค่าปรับอาวุธ และ การยึดอาวุธ</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Dev />

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;400&display=swap');
.myAboutSlidFade {
    animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    -moz-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    -ms-animation: fadeIn 1s;
}
.myAbout {
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    max-width: 1280px;
    font-family: 'Playpen Sans', cursive;
}
</style>