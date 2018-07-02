<template>
  <div class="columns">


    <div class="column is-8 is-offset-2">
      <section class="hero is-medium is-info is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-large has-text-weight-bold">

              hackSERA
            </h1>
            <h2 class="subtitle is-large has-text-weight-bold">
              An open-source search tool made by examiners, for examiners.
            </h2>
          </div>
        </div>
      </section>


      <section class="box">
        <div class="field">
          <label class="label">Enter Query</label>
          <div class="control">
            <form ref='form' v-on:submit.prevent="submitQuery">
              <input class="input"
              type="text"
              placeholder="Enter a PQL query, or open a dossier with ..open <Application Number>"
              v-model.trim='newQuery'
              >
            </form>
          </div>
        </div>
      </section>
    </div>

  </div>



</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
      return {
        queryList : [],
        newQuery: '',
      }
  },
  components: {
      FontAwesomeIcon
    },

  watch: {

  },

//methods

  methods: {
    submitQuery (){

      if (this.newQuery.search('#gif')==0) {
        this.$http.get('http://api.giphy.com/GET/v1/gifs/random', {
          params: {
            api_key: 'KSgbiJxzqxxTDH37KMMsSoRwFDPxcqeC',
            tag: 'cat'
          }
        })
        .then(function (response) {
          console.log(response.gif);
        })
        .catch(function (error) {
          console.log(error);
        });

      } else {
        console.log('query');
      }
    },
  },

}
</script>

<style scoped>

.column {
  position: absolute;
  bottom: 0
}



.hero{
  margin-top: auto;
}

.has-bg-img {
  background: url('~@/assets/cover.jpg')center center;
  background-size:cover;
}


input {
  width: 100%
}
</style>
