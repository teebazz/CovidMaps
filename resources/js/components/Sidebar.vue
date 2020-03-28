<template>
<div class="container-fluid">
    <div class="card" style="padding:10px">    
        <div class="mainStats">      
            <div class="row" style="align-items: center;" v-if="!statsLoader">
                <div class="col-lg-12 col-md-12 col-xs-12 col-xl-12 text-center">
                <div class="card m_block" v-bind:class="{ 'all_border': mode == 'all' }">
                    <strong class="c_number">{{stats.data.total_cases}}</strong>
                    <span class="c_title">Total Cases</span>
                </div>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 col-xl-12 text-center">
                <div class="card m_block">
                    <strong class="c_number">{{stats.data.total_active_cases}}</strong>
                    <span class="c_title">Active</span>
                </div>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 col-xl-12 text-center">
                <div class="card m_block">
                    <strong class="c_number">{{stats.data.total_deaths}}</strong>
                    <span class="c_title">Deaths</span>
                </div>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 col-xl-12 text-center">
                <div class="card m_block">
                    <strong class="c_number">{{stats.data.total_recoveries}}</strong>
                    <span class="c_title">Discharged</span>
                </div>
                </div>
            </div>   
            <div v-else style="align-items: center;">
                <img src="https://constructs.stampede-design.com/wp-content/uploads/2015/06/buffer-loading.gif" class="img-fluid ">
            </div>    
        </div>  
       <h6>States</h6>
        <div class="sidebar sdHeight">   
        <div v-if="!stateLoader">    
            <div class="card" style="padding:5px;margin-top:5px;width:100%;" v-for="singleState in statesList.data" :key="singleState.id">
            <div class="row" style="align-items: center;" @click="caseBreakdown(singleState)">
                <div class="col-lg-2 col-md-2 col-sm-2" style="padding-right: 3px;">
                    <img :src="singleState.image" class="img-fluid imgClass">
                </div>
                <div class="col-lg-6 col-md-d col-sm-6">
                    <h6>{{singleState.name}}</h6>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                    <h6 class="numbers">{{singleState.total_case}}</h6>
                </div>
            </div>
            </div>
        </div>
        <div v-else style="align-items: center;">
            <img src="https://constructs.stampede-design.com/wp-content/uploads/2015/06/buffer-loading.gif" class="img-fluid ">
        </div> 
        </div>
    </div>
    <vs-popup class="holamundo"  :title="`${popup.title} Breakdown`" :active.sync="popupActivo">
      <p>
        <strong>Total Confirmed Case</strong> :  <span id="cs_color">{{popup.total_case}}</span> <br>
        <strong>Total Active Case</strong> :  <span id="cs_color">{{popup.active_case}}</span> <br>
        <strong>Isolation Centers : </strong> : <i>--No Data yet--</i> <br>
        <strong>Emergency Numbers : </strong> : <i>--No Data yet--</i> <br>
      </p>
    </vs-popup>
</div>
</template>
<script>
import { LMap, LTileLayer ,LGeoJson,  LMarker, LPopup,LIcon,LCircle,LControlZoom, LControl} from "vue2-leaflet";
import { latLng, icon } from "leaflet";
export default {
  name : 'example-component',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LMarker,
    LPopup,
    LIcon,
    LCircle,
    LControlZoom,
    LControl,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6.4,
      mobileZoom: 5,
      center: [9.0820, 8.6753],
      caseLoader : true,
      active : false,
      popupActivo : false,
      stateLoader : true,
      statsLoader : true,
      statesList: null,
      mode: 'all',
      stats : null,
      cases : null,
      bounds: null,
      geojson: null,
      states: null,
      popup : {
        title : '',
        total_case : '',
        active_case : '',
      }
    };
  },
  methods: {
    async initMap(){        
      this.getState();           
      this.getStats();  
       
    },
    async getState(){
      const response = await fetch('/api/states');
      this.statesList = await response.json();
      this.stateLoader = false;
    },
    async getStats(){
      const response = await fetch('/api/stats');
      this.stats = await response.json();
      console.log(this.stats);
      
      this.statsLoader = false;
    },
    sideAction(action){
      this.active = action;      
    },
    caseBreakdown(singleState){
        this.$emit('remove-sidebar',false);
        this.popupActivo = true;
        this.popup.title = singleState.name;
        this.popup.total_case = singleState.total_case;
        this.popup.active_case = singleState.active_cases;
    }
    
  }
  ,
  created () {
    this.initMap();       
    
  },
  computed : {
    
  }
};
</script>
