<template>

  <div class="row">

                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                    <div class="dropdown pull-right">

                                    </div>

                        			<h4 class="header-title m-t-0 m-b-30">Cuentas Mayores</h4>

                                    <div class="row">

                        				<div class="col-lg-4">
                        					<form class="form-horizontal" role="form">

                                                <div class="form-group">
	                                                <div class="col-sm-10">
                                                        <input class="btn btn-block" type="button" value="ACTUALIZAR" id="btnInforme">
	                                                </div>
                                                </div>

	                                        </form>
                                        </div>

                                    </div>

                                    <table id="table" class="table">

                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Cuenta</th>
                                                <th>Superconcepto</th>
                                                <th>Concepto</th>
                                            </tr>
                                        </thead>

                                        <tbody v-bind:key="row.index" v-for="row in accounts">

                                            <tr>
                                                <td>{{row.id}}</td>
                                                <td>{{row.account}}</td>
                                                <td>{{row.concept}}</td>
                                                <td><input type="checkbox" v-bind:checked="row.editable"></td>
                                            </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {

  name: 'AccountTable',

  computed: {

    ...mapState(['accounts'])

  },

  methods:{

    

  }

}
</script>


<style scoped>

td{

    color:white

}

</style>


