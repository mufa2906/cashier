<template>
  <v-row>
    <v-col for v-for="(product, i) in products" :key="i" cols="2">
      <v-card :title="product.title">
        <v-card-action>
          <v-img
            :src="require(`@/assets/images/products/${product.thumbnail}`)"
          >
          </v-img>
        </v-card-action>
        <v-card-text>
          {{ product.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          category: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          category: 2,
        },
        {
          id: "3",
          title: "Lenovo A7000",
          thumbnail: "Lenovo-A7000.png",
          price: "8000000",
          category: 3,
        },
      ],
    };
  },
};
</script>
