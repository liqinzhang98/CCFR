<script setup>
</script>

<template>
  <main>
    <ul>
      <li class="li_line"><a href="#New Application">New Application</a></li>
      <li class="li_line"><a href="#My Applications">My Applications</a></li>
      <!-- <li class="li_line"><a href="#Other Applicationst">Other Applications</a></li> -->
      <li class="li_line"><a href="#View Messages">View Messages</a></li>
    </ul>

    <div class="text">
      <h2>My Application Details</h2>
      <hr class="h2_line" />
      <h2>Application:</h2>
      <h2>Association of Genetic Variation with Colorectal Cancer: A Multi-Trait Genome-Wide Association and Gene-Environment Interaction Study</h2>
      <hr class="h2_line" />
      <h3 class="pos">Statues:Approved</h3>
      <hr class="h2_line" />
      <hr class="l2_line" />
      <p>Collaborators: Miao Xiaoping</p>
      <hr class="h2_line" />
      <p>Abstract: Colorectal cancer (CRC) is the third common cancer in the world and the death ratio is ranked at second which need to be attached great importance.  It is well known that CRC is a complex disease with both genetic (G) and environmental (E) risk factors contributing to...</p>
    </div>
  </main>
</template>

<style scoped>
/* body {
    margin: 0;
    padding-top:0;
    padding-bottom:0;
    padding-right:10%;
    padding-left:10%;
    background-color: #3a83a7;
} */

ul {
    list-style-type: none;
    margin: 0;
    padding: 2% 0%;
    width: 15%;
    background-color: white;
    position: fixed;
    height: 100%;
    overflow: auto;
}

a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

h2 {
    font-size:30px;
}

.h2_line{
    height:2px;
    border:none;
    margin-top:10px;
    border-top:1px solid white;
}

.li_line{
    border-bottom: 2px solid #c1c1c1;
    width: 98%;
}

li a:hover:not(.active) {
    background-color: #f5f5f5;
    color: #000;
}

.text{
    margin-left:19%;
    padding:1px 10px;
    height:1000px;
    background-color: white;
}

.pos {
    text-align:right;
}
</style>
