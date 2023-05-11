<template>
  <v-row>
    <v-row>
      <v-col cols="10">
        Search
      </v-col>
      <v-col cols="2">
          <v-menu>
            <template v-slot:activator="{ on:category}">
              <v-btn 
                v-on="category"
                color="primary">
                Category
              </v-btn>
            </template>

            <v-list>
              <v-list-item-group v-model="categoryId">
                <v-list-item v-for="(category,i) in categories" :key="i" 
                :value="category.id"
                :disabled="category.id == categoryId">
                  <v-list-item-title>
                    {{ category.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-col>
    </v-row>
    <v-row>
      <v-col for v-for="(product, i) in filteredProducts" :key="i" cols="2">
        <v-card :title="product.title">
          <v-card-action>
            <v-img
              :src="require(`@/assets/images/products/${product.thumbnail}`)"
            >
            </v-img>
          </v-card-action>
          <v-card-text align="center" class="product-title">
            {{ product.title }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      categoryId : false,
      categories: [
        {
          id: false,
          title: 'All' 
        },
        {
          id: 1,
          title: 'Smartphone' 
        },
        {
          id: 2,
          title: 'Camera' 
        },
        {
          id: 3,
          title: 'Television' 
        },
      ],
      products: [
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
        {
          id: "1",
          title: "Asus Zenfone",
          thumbnail: "asus-zenfone.png",
          price: "2000000",
          categoryId: 1,
        },

        {
          id: "2",
          title: "Canon Eos 700d",
          thumbnail: "canon-eos-700d.png",
          price: "2500000",
          categoryId: 2,
        },
        {
          id: "3",
          title: "Sharp 32 LED 32LE265I",
          thumbnail: "sharp-32-led-32LE265i.png",
          price: "8000000",
          categoryId: 3,
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if(this.categoryId) {
        return this.products.filter(s => s.categoryId == this.categoryId)
      }
      return this.products
    }
  }
};
</script>

<style>
  .product-title {
    white-space: nowrap;
    overflow: hidden;
  }
</style>