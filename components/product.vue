<template>
  <v-row>
    <v-row align="center">
      <v-col cols="10">
        <v-autocomplete label="products" placeholder="Start Typing To Search"
          :search-input.sync="search"
          :loading="isLoading"
          :items = "itemsSearch"
          item-text="title"
          item-value="id"
          v-model="selectedSearch"
          return-object
          hide-no-data
          >

        </v-autocomplete> 
      </v-col>
      <v-col cols="2">
        <v-menu>
          <template v-slot:activator="{ on: category }">
            <v-btn v-on="category" color="primary"> Category </v-btn>
          </template>

          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(category, i) in categories"
                :key="i"
                :value="category.id"
                :disabled="category.id == categoryId"
                @change = "updateCategoryId(category.id)"
              >
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
import  { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      search : null,
      isLoading: false,
      selectedSearch: null,
      itemsSearch: [],
    };
  },
  methods: {
    ...mapActions('products', {
      updateCategoryId : 'updateCategoryId'
    }),
    resetSearchCategory() {
      this.categoryId = false
    },
  },

  computed: {
    filteredProducts() {
      if (this.categoryId) {
        return this.products.filter((s) => s.categoryId == this.categoryId);
      }
      else if (this.selectedSearch) {
        return this.products.filter((s) => s.title == this.selectedSearch.title)
      }
      return this.products;
    },
    ...mapState('products', {
      products: 'products',
      categories: 'categories',
      categoryId: 'categoryId'
    })
  },
  
  watch: {
    search(val) {
      this.isLoading = true
      setTimeout(() => {
        this.itemsSearch = this.products.filter(e => {
          this.isLoading= false;
          this.resetSearchCategory()
          return e.title
      })
    },1000)
    }
  }
}
</script>

<style>
.product-title {
  white-space: nowrap;
  overflow: hidden;
}
</style>
