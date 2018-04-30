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
<!-- Welcome Jumbortron -->

    <!-- <div class="jumbotron jumbotron-fluid" >
        <div class="container">
            <h1 class="display-3">hackSERA <small class="text-muted">beta</small></h1>

            <p class="lead">Search with the ANSERA tehcnology using the commands and workflow you already know.</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
        </div>
    </div> -->

<!-- Card -->
        <!-- <div-for="(query, index) in queryList">

            <h5 class="card-title">Query {{index + 1}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{query.families}} Families found</h6>
            <p class="card-text">{{query.query}}</p>
            <a href="#" class="card-link">Send to Viewer</a>
            <a href="#" class="card-link">Limit to this set</a>
        </div> -->




<!-- New Search Statement -->
        <!-- <div class="card">
          <div class="card-body">
            <h5 class="card-title">Enter New Query</h5>
            <form ref='form' v-on:submit.prevent="submitQuery">
              <input type="text"
              placeholder="Enter a PQL query, or open a dossier with ..open <Application Number>"
              v-model.trim='newQuery'
              >
            </form>
          </div>
        </div> -->

<!-- End New Search Statement -->


</template>

<script>
export default {
  data () {
      return {
        queryList : [],
        newQuery: '',
      }
  },
  watch: {

  },

//methods

  methods: {
    submitQuery (){
      let queryResults = {}
      queryResults.query = this.newQuery
      // Here we need to launch the search method and when done, with a callback we need to get the number of results.
      queryResults.families = 1990
      this.queryList.push(queryResults)
      console.log(this.queryList)
      this.newQuery = ''
    },
  },

}
</script>

<style scoped>

.columns {
  padding-top: 20px;
}

.has-bg-img {
  background: url('~@/assets/cover.jpg')center center;
  background-size:cover;
}


input {
  width: 100%
}
</style>
