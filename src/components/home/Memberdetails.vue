<template>
  <div class="container">
  <h2>User {{userdetails.id}} Information</h2>
    <div class="card">
      <img :src="userdetails.avatar" alt="images" style="width:100%" />
      <h1>Name: {{ userdetails.first_name }} {{ userdetails.last_name }}</h1>
      <p class="title">email id: {{ userdetails.email }}</p>
      <p>
        <button @click="this.$router.back()">Go Back</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memberdetails",
  data() {
    return {
      userdetails: "",
    };
  },
  created() {
    console.log("route.params", JSON.parse(this.$route.params.details));
    this.userdetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("user", this.userdetails);
  },

};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  height: 50%;
margin:auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
button:hover, a:hover {
  opacity: 0.7;
}
</style>