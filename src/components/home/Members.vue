<template>
  <h1>Users</h1>
  <div class="row">
    <div class="column" v-for="(uservalue, index) in userData" :key="index">
      <div class="card" @click="getdata(uservalue)">
      <img :src="uservalue.avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    getdata(uservalue) {
      this.$router.push({
        name: "Memberdetails",
        params: { id: uservalue.id, details: JSON.stringify(uservalue) },
      });
    },
  },
  async created() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const data = await fetch(
      "https://reqres.in/api/users?page=2",
      requestOptions
    );
    const result = await data.json();
    this.userData = result.data;
    console.log("data||", this.userData);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.column{
  float: left;
  width: 27%;
  padding: 0 10px;
  margin-bottom: 30px;
}

.row {
  margin: 0 -5px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

img {
  height: 200px;
  width: 70%;
  border-radius: 20px;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #84b68b;
  height: 250px;
}
</style>