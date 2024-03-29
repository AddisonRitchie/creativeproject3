// key for giphy: vHVkd95mtV1bXDF0aCVZAOTep08dw93E
// key for food2fork:
//3221ea301a5e09121c7dbf246e4a33db

//second key with fresh uses
//e207512a9df514432b7e8fe1906a3e79

var vm = new Vue({
    el: '#app',
    data: {
        f2f: '',
        value: '',
        // imgsrc: '',
        // currentRecipeID: '',
        currentRecipeDetails: '',
        currentRecipeIngredientsArray: [],
        newIngredient: '',

        // count: '',
        // recipes: {
        //     f2f_url: '',
        //     title: '',
        //     source_url: '',
        //     recipe_id: '',
        //     image_url: '',

        // }

    },

  methods: {
    recipeSearch: function(event) {
      var searchUrl = "https://www.food2fork.com/api/search?key=e207512a9df514432b7e8fe1906a3e79&q=" + this.value + "&format=json&nojsoncallback=1";

      this.$http.get(searchUrl).then((response) => {
        this.f2f = JSON.parse(response.data);
        
        //console.log(JSON.stringify(this.f2f, null, "  "))
      }, (response) => {
        // error callback
      });

    },

    recipeDetails: function(event, variableRID) {
      var searchUrl = "https://www.food2fork.com/api/get?key=e207512a9df514432b7e8fe1906a3e79&rId=" + variableRID + "&format=json&nojsoncallback=1";
      // Keys: 

      this.$http.get(searchUrl).then((response) => {
        this.currentRecipeDetails = JSON.parse(response.data);
        
        console.log(JSON.stringify(this.currentRecipeDetails, null, "  "))
        	//console.log(this.currentRecipeDetails);		
        this.currentRecipeIngredientsArray  = this.currentRecipeDetails.recipe.ingredients;
        console.log(JSON.stringify(this.currentRecipeIngredientsArray, null, "  "));
        alert(JSON.stringify(this.currentRecipeIngredientsArray, null, "  "));


      }, (response) => {
        // error callback
      });

    }
    
  }
    
    // computed: {

    // },

    // watch: {

    // },

});
