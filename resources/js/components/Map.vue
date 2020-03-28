<template>
  <div>
    <div style="height:100vh;">
        <l-map
            style="height: 100%; width: 100%"
            :zoom="zoom"
            :center="center"
            :options="{zoomControl: false}"
            >
            <l-control position="topleft" >
                <!-- <i class="fa fa-bars"  > </i> -->            
                <div class="statShow">
                    <div class="row" style="align-items: center;margin-top:30px" v-if="!statsLoader">
                        <div class="text-center" v-on:click="launchModal()">
                            <div class="card m_block" v-bind:class="{ 'all_border': mode == 'all' }">
                                <strong class="c_number">{{stats.data.total_cases}}</strong>
                                <span class="c_title">Total Cases</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="card m_block">
                                <strong class="c_number">{{stats.data.total_active_cases}}</strong>
                                <span class="c_title">Active</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="card m_block">
                                <strong class="c_number">{{stats.data.total_deaths}}</strong>
                                <span class="c_title">Deaths</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="card m_block">
                                <strong class="c_number">{{stats.data.total_recoveries}}</strong>
                                <span class="c_title">Discharged</span>
                            </div>
                        </div>
                    </div>
                </div>
            </l-control>
            <l-control position="topright" >
                <button class="btn btn-sm btn-miner btn-success"  @click="active=!active" style="font-size:12px;"> <i class="fa fa-bars"> </i>Stats By States</button>
            </l-control>
            <l-control-zoom position="bottomright"  ></l-control-zoom>
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-geo-json :geojson="geojson" :options-style="styleFunction" pane='overlayPane' ></l-geo-json>              
            <div v-if="!caseLoader">          
                    <div v-for="casx in cases.data" v-bind:key="casx.name" >
                        <l-circle
                            :lat-lng="[casx.longitude,casx.latitude]"
                            :radius="getRadius(casx.total_case)" color='red' fill-color="#ff0000" :opacity="circleOpacity" :weight="weight" :fill-opacity="circleFillOpacity" pane='shadowPane'
                        >
                            <l-popup>
                                <strong>{{casx.name}} State</strong> <br>
                                <strong>Total Cases : <span id="cs_color">{{casx.total_case}}</span> </strong><br>
                                <strong>Active Cases :  <span id="cs_color">{{casx.active_cases}}</span></strong><br>
                                <strong>Isolation Centers : </strong> : <i>--No Data yet--</i> <br>
                                <strong>Emergency Numbers : </strong> : <i>--No Data yet--</i> <br>
                            </l-popup>
                        </l-circle>
                    </div>
                <div v-for="state in states" v-bind:key="state.id">
                    <l-geo-json :geojson="state.bound" :options-style="styleFunctionSatet" :name="state.name" pane='overlayPane'>
                        
                    </l-geo-json>
                </div>
            </div>
        </l-map>     
    </div>
    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx"  spacer v-model="active">
       <div style="padding:0">
        <sidebar-component v-on:remove-sidebar="removeSideBar"></sidebar-component>
      </div>
     </vs-sidebar>
  </div>
</template>
<script>
import { LMap, LTileLayer ,LGeoJson,  LMarker, LPopup,LIcon,LCircle,LControlZoom, LControl} from "vue2-leaflet";
import { latLng, icon } from "leaflet";
export default {
  name : 'map-component',
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
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors . Powered By Tishlabs.com.ng',
      center: [9.0820, 8.6753],
      caseLoader : true,
      stateLoader : true,
      statsLoader : true,
      statesList: null,
      active : false,
      caseFinished : false,
      mode: 'all',
      stats : null,
      cases : null,
      bounds: null,
      geojson: null,
      states: null,
      circleOpacity : 1 ,
      circleFillOpacity : 0.6 ,
      weight :3 ,
      stateBoundaries : null,
      fillColor: "#e4ce7f",
      fillColorState: "#ff0000",
      icon: icon({
        iconUrl: "/geos/icon.png",
        iconSize: [16, 16],
        iconAnchor: [19, 0]
      }),
    };
  },
  props: [
    'zoom'
  ],
  methods: {
    removeSideBar(sat){
        this.active = sat;
    },
    getRadius(radius){
      let fRadius = 0;
      if(radius > 50){
        fRadius = 50000;
      }else if(radius > 10 && radius < 50){
        fRadius = 30000;
      }else{
        fRadius =  10000;
      }
      return fRadius;
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    launchModal(){
      jQuery('#myModal').modal('show'); 
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    async initMap(){
      // this.states = await response1.json(); 
      this.$vs.loading();
      const response = await fetch('https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json');
      this.geojson = await response.json(); 
      this.getState();    
      this.allCases();         
      this.getStats();  
      this.$vs.loading.close();
    },
    async getState(){
      // this.states = await response1.json(); 
      const response = await fetch('/api/states');
      this.statesList = await response.json();
      this.stateLoader = false;
      // console.log(this.statesList);
      // this.loadStatePoly();
    },
    loadStatePoly(){
      let resultingArr = [];
      var i = 0;
      this.cases.data.map( async(res) =>{
        //   let resp = await fetch(`https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_boundary_lgas&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27${res.code}%27`);
          let resp = await fetch(`
                https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_boundary_states&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27${res.code}%27`);
          let jo = await resp.json(); 
          res.restpn = jo;
          var gfg = new Array(2); 
          gfg['id'] = res.id;
          gfg['bound'] = jo;
          gfg['name'] = res.name;
          resultingArr.push(gfg);
          
      });
      this.states = resultingArr;
      // console.log(resultingArr);
    },
    async allCases(){
      const response = await fetch('/api/active-cases');
      this.cases = await response.json();
      this.caseLoader = false;
      this.loadStatePoly();
    },
    async getStats(){
      const response = await fetch('/api/stats');
      this.stats = await response.json();
      console.log(this.stats);
      
      this.statsLoader = false;
    }
  }
  ,
  created () {
    this.initMap();       
    
  },
  computed : {
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 1,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: '#065535',
          fillOpacity: 0.9
        };
      };
    },
    styleFunctionSatet() {
      const fillColorState = this.fillColorState; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 1,
          color: "#f0e586",
          opacity: 0.5,
          fillColor: '#f0e586',
          fillOpacity: 0.5
        };
      };
    },
  },
};
</script>