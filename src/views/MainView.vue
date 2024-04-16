<script>

export default {
  name: 'MainView',
  methods: {
    goToModel() {
      this.$router.push({ name: "model"})
    }
  }
}
</script>

<template>
  <div class=" flex flex-col items-center justify-center text-start">

    <div class="w-full ">
      <div class="sticky top-0 bg-white flex items-end justify-between py-2 w-full z-10 border border-b-1 border-red-300 px-40">
        <div class="flex items-center">
          <img src="@/assets/dam3.png" alt="Dams Logo" class="h-12 w-auto mr-2">
          <h1 class="text-2xl font-semibold text-gray-800" style="color: #00467f">Дамбалар мен бөгеттер</h1>
        </div>
        <nav class="flex content-end text-sm font-bold navbar text-right" style="color: #00467f">
          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Басты</a>
<!--          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Біз туралы</a>-->
          <a @click="goToModel" class="mr-4 hover:text-blue-600 transition duration-300">Модель</a>
<!--          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Байланыс</a>-->
        </nav>
      </div>

      <!-- Second Section -->
      <div class="flex justify-around w-full banner-wrapper px-40 py-10 text-start px-40" style=" ; min-height: 300px">
        <div class="banner-left ">
          <h1 class="text-white font-semibold" style="font-size: 35px">Дамба мен бөгеттерді электромониторингін математикалық моделдеу есебінің нақты уақыт мезетіндегі (в реальном режиме времени) платформасы</h1>
          <p class="text-sm" style="color: #d8ffce">Бөгеттердің электромониторингі гидротехникалық құрылыстардың жай-күйін нақты уақыт режимінде бақылауға мүмкіндік береді. Деректер қауіпсіздікті қамтамасыз ету бойынша жедел шешім қабылдауға мүмкіндік береді. Электромониторинг нәтижелерін визуализациялау үшін графиктер, диаграммалар және параметрлерді бөлетін карталар қолданылады. Бұл өзгерістер динамикасын жедел бағалауға мүмкіндік береді.</p>
          <div class="btn-area pt-5">
            <a href="#" @click="goToModel" class="bg-white text-blue-600 py-1.5 px-5 rounded-full hover:text-blue-800">Жобаға өту</a>

          </div>
        </div>
        <div class="banner-right">
          <img src="@/assets/dam2.png" alt="Dams Logo" class="h-80 w-80 mr-2" >

        </div>
      </div>

      <!-- Third Section -->
      <div class="ultimate-api mx-40">
        <div class="container py-5">
          <h2 class=" text-start text-3xl font-semibold text-center">Дамба мен бөгеттердің маңыздылығы

          </h2>
          <p class="text-lg mt-4">
            Бөгеттер су ағынын реттеу, су тасқынын бақылау және суару мен ауызсу мақсатында тұрақты сумен қамтамасыз ету арқылы су ресурстарын басқаруда шешуші рөл атқарады. Бұған қоса, олар қазба отындарына тәуелділікті азайтатын жаңартылатын энергия көзі ретінде қызмет ететін су электр энергиясын өндіруге үлес қосады. Бөгеттер сонымен қатар қайықпен жүзу, балық аулау және жабайы табиғаттың мекендейтін жерлері сияқты әртүрлі рекреациялық іс-шараларды қолдайды, бұл туризмді де, жергілікті экономиканы да арттырады. Сонымен қатар, олар құрғақшылық кезінде пайдалану үшін молшылық кезеңдерінде суды сақтау арқылы құрғақшылықтың әсерін азайтуға көмектеседі, осылайша қауымдастықтардың су қауіпсіздігін қамтамасыз етеді.
          </p>

        </div>
      </div>

      <!-- Fourth Section -->
      <div class="neuronesb bg-gray">
        <div class="neuronesb-wrapper mx-40">
          <div class="left-content">
            <div class=" pb-2" >
              <h2 class="text-2xl font-semibold text-gray-800" style="color: #00467f">Бізге бөгеттер не үшін қажет?</h2>
              <p>
                Бөгеттер су ресурстарын басқаруда маңызды рөл атқарады, суару, ауыз су және өнеркәсіптік пайдалану сияқты әртүрлі мақсаттар үшін тұрақты сумен қамтамасыз етеді. Олар сондай-ақ жауын-шашын немесе қардың еруі кезінде өзендерде су ағынын реттеу арқылы су тасқынын бақылауға көмектеседі. Бұған қоса, бөгеттер қазбалы отынға тәуелділікті азайтатын және парниктік газдар шығарындыларын азайтатын жаңартылатын энергия көзі болып табылатын су электр энергиясын өндіреді.
              </p>
            </div>
          </div>
          <div class="right-image">
            <img src="@/assets/dam3.png" alt="Dams Logo" class="h-60 w-60 mr-2" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

div {
  font-family: "Helvetica", sans-serif;
}

a {
  cursor: pointer;
}

.banner-wrapper {
  display: flex;
  //display: -ms-flexbox;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  background: url("https://www.peregrineconnect.com/wp-content/themes/bb-theme-child/assets/images/background-image.svg");

  .banner-left {
    width: 50%;

    h1 {
      font-size: 34px;
      color: #fff;
      line-height: 1.4;
      margin: 0 0 15px;

      line-height: 1.4;
      letter-spacing: 0px;
      font-family: "Lato", sans-serif;
      font-weight: 900;
      font-style: normal;
      text-transform: none;
    }

    p{
      font-size: 19px;
      color: #DAFFCE;
      font-weight: 400;
      line-height: 1.6;
    }
  }

  .banner-right {
    display: flex;
    justify-content: end;
    width: 50%;
    text-align: right;
  }
}

.ultimate-api {
  padding: 30px 0;

  h2 {
    color: #333333;
    font-size: 29px;
    line-height: 1.2;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    color: #5C5C5C;
    line-height: 1.5;
  }
}

.neuronesb {
  padding: 30px 0 40px;
  background: #f4f4f4;

  img {
    vertical-align: middle;
    border-style: none;
    height: auto;
  }

  .neuronesb-wrapper {
    display: flex;
    display: -ms-flexbox;
    justify-content: space-between;
    align-items: flex-start;

    .left-content {
      width: 35%;

       h2 {
        color: #00467F;
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 3px;
      }

      h6 {
        color: #871F5E;
        font-size: 20px;
        font-weight: 500;
        margin: 10px 0;
      }

      p {
        color: #5C5C5C;
        line-height: 1.6;
        margin: 0 0 12px;
      }


    }

    .banner-right {
      width: 60%;
      text-align: right;
    }
  }
}


.navbar {
  font-family: "Lato", sans-serif;
}
a {
  text-decoration: none;
  &.router-link-active {
    color: #007af8;
  }
}

</style>