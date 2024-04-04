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
          <h1 class="text-2xl font-semibold text-gray-800" style="color: #00467f">Дамбалар мен Бөгеттер</h1>
        </div>
        <nav class="flex content-end text-sm font-bold navbar" style="color: #00467f">
          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Басты</a>
          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Біз туралы</a>
          <a @click="goToModel" class="mr-4 hover:text-blue-600 transition duration-300">Модель</a>
          <a href="#" class="mr-4 hover:text-blue-600 transition duration-300">Байланыс</a>
        </nav>
      </div>

      <!-- Second Section -->
      <div class="flex justify-around w-full banner-wrapper px-40 py-10 text-start px-40" style=" ; min-height: 300px">
        <div class="banner-left ">
          <h1 class="text-white font-semibold" style="font-size: 35px">Дамба мен бөгеттердің онлайн бақылау платформасы</h1>
          <p class="text-sm" style="color: #d8ffce">Жоба бегеттердін курделі электромеханикалык аспектілерін зерттейді, буд
            курылымдардын коршаган ортамен калай рекеттесетінін жэне энергия ондіру,
            сумен камтамасыз ету жане су таскынын бакылау сиякты манызды функцияларды орындайтынын зерттейді.
            Бегеттер жанартылатын энергиямен камтамасыз ету, су ресурстарын баскару жэне су таскынына байланысты тэуекелдерді
            азайту аркылы туракты дамуда шешуші рол аткаратын инженерлік гажайыптар ретінде TYP.</p>
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
          <h2 class=" text-start text-3xl font-semibold text-center">Дамба мен бөгеттердің маныздылыгы

          </h2>
          <p class="text-lg mt-4">
            Бегеттер коптеген артыкшылыктарды усынатын ертурлі секторларда емірлік мацызды инфракурылым ретінде кызмет
            етеді. Энергия ендіруде гидроэлектр бегеттер судыц элеуетті энергиясын
            электр энергиясын ондіру ушін пайдаланады, бул жанандык энергия
            суранысына айтарлыктай улес косады, сонымен бірге казба отындарына
            тауелділікті азайтады.</p>
<!--          <p class="text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>-->
<!--          <p class="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>-->
        </div>
      </div>

      <!-- Fourth Section -->
      <div class="neuronesb bg-gray">
        <div class="neuronesb-wrapper mx-40">
          <div class="left-content">
            <div class=" pb-2" >
              <h2 class="text-2xl font-semibold text-gray-800" style="color: #00467f">Бізге бөгеттер не үшін қажет?</h2>
              <h6>Су тасқынын бақылау</h6>
              <p>Ежелгі уақытта бөгеттер тек сумен қамтамасыз ету немесе суару мақсатында салынған. Өркениеттер дамыған сайын сумен қамтамасыз ету, суару, су тасқынын бақылау, навигация, су сапасы, шөгінділерді бақылау және энергияға деген қажеттілік артты. Сондықтан бөгеттер сумен қамтамасыз ету, су тасқынын бақылау, суару, навигация, шөгінділерді бақылау және гидроэнергетика сияқты белгілі бір мақсат үшін салынады. Бөгет өзен бассейнінің су ресурстарын игеру мен басқарудағы ірге тасы болып табылады. .</p>
              <p>Бөгеттер мен су қоймаларын су тасқынының көлемін уақытша сақтау және кейінірек босату арқылы өзен деңгейін және бөгеттің төменгі ағынындағы су тасқынын реттеу үшін тиімді пайдалануға болады. Су тасқынына қарсы күрестің ең тиімді әдісі өзен бассейнінде орналасқан негізгі бөгеттердің әрқайсысының қоймаларын және ағызуды реттеуге арналған кешенді су шаруашылығы жоспары арқылы жүзеге асырылады. Әрбір бөгет су тасқынын бассейн арқылы зақымдаусыз өткізу үшін арнайы суды бақылау жоспарымен жұмыс істейді. Бұл жаңбырлы маусымның алдында көбірек қойма жасау үшін су қоймасының деңгейін төмендетуді білдіреді. Бұл стратегия су тасқынын жояды. Бөгеттердің саны және олардың суды басқару жоспарлары халық шаруашылығын дамытуды кешенді жоспарлау және халықты тарту арқылы белгіленеді. Су тасқынын бақылау көптеген қолданыстағы бөгеттер үшін маңызды мақсат болып табылады және қазіргі уақытта салынып жатқан әлемдегі кейбір ірі бөгеттер үшін негізгі мақсат ретінде жалғасуда.</p>
            </div>
          </div>
          <div class="right-image">
            <img src="@/assets/dam3.png" alt="Dams Logo" class="h-80 w-80 mr-2" >
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