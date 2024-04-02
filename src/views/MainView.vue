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
  <div class=" flex flex-col items-center justify-center">

    <div class="w-full ">
      <div class="sticky top-0 bg-white flex items-center justify-between px-4 py-2 w-full z-10 py-5 border border-b-1 border-blue-500">
        <div class="flex items-center">
          <img src="@/assets/dam.png" alt="Dams Logo" class="h-8 w-auto mr-2">
          <h1 class="text-lg font-semibold text-gray-800">Dams</h1>
        </div>
        <nav class="text-lg">
          <a href="#" class="mr-4 text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
          <a href="#" class="mr-4 text-gray-800 hover:text-blue-600 transition duration-300">About</a>
          <a @click="goToModel" class="mr-4 text-gray-800 hover:text-blue-600 transition duration-300">Model</a>
          <a href="#" class="mr-4 text-gray-800 hover:text-blue-600 transition duration-300">Contact</a>
        </nav>
      </div>

      <!-- Second Section -->
      <div class="flex justify-around w-full mt-4 banner-wrapper " style="background: #70aad7 ; height: 300px">
        <div class="banner-left">
          <h1 class="text-start text-white font-semibold" style="font-size: 35px">Dams ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p class="text-sm" style="color: #d8ffce">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="banner-right">
          <img src="@/assets/dam.png" alt="Dams Logo" class="h-60 w-60 mr-2" >

        </div>
      </div>

      <!-- Third Section -->
      <div class="ultimate-api">
        <div class="container">
          <h2 class=" text-start text-3xl font-semibold text-center">Section Three Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </h2>
          <p class="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p class="text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      <!-- Fourth Section -->
      <div class="neuronesb bg-gray">
        <div class="container">
          <div class="neuronesb-wrapper">
            <div class="left-content">
              <div class=" pb-2" >
                <h2>Hhahah  hahahah</h2>
                <h6>Connect, Integrate and Automate</h6>
                <p>Elevate your integration game with a user-friendly toolset that not only lowers the bar of entry and easy learning curve but also allows you to automate everything from your connections, APIs, and applications.</p>
                <p>Elevate your integration game with a user-friendly toolset that not only lowers the bar of entry and easy learning curve but also allows you to automate everything from your connections, APIs, and applications.</p>
              </div>
            </div>
            <div class="right-image">
              <img src="@/assets/dam.png" alt="Dams Logo"  >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.banner-wrapper {
  display: flex;
  display: -ms-flexbox;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  .banner-left {
    width: 40%;

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

  .banner-right-img {
    width: 60%;
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
    max-width: 100%;
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

</style>