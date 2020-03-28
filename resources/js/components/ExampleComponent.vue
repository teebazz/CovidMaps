<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <div class="col-md-3" style="padding:0">
         <div class="card">
          
         </div>
      </div> -->
      <div class="col-md-10" style="padding:0">
        <div class="card">
          <div id="mapx">
            <!-- <div class="info" style="height: 15%">
                <span>Center: {{ center }}</span>
                <span>Zoom: {{ zoom }}</span>
                <span>Bounds: {{ bounds }}</span>
            </div> -->
            <l-map
            style="height: 100%; width: 100%"
            :zoom="zoom"
            :center="center"
            @update:zoom="zoomUpdated"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
            >
            <l-tile-layer :url="url"></l-tile-layer>
            <l-geo-json :geojson="geojson" :options-style="styleFunction" ></l-geo-json>
              <div v-for="state in states" v-bind:key="state.id">
                <l-geo-json :geojson="state.bound" :options-style="styleFunctionSatet" ></l-geo-json>
              </div>
              <div v-for="casx in cases.data" v-bind:key="casx.id" >
                <!-- <l-marker :lat-lng="[casx.longitude,casx.latitude]" :icon="icon">
                  <l-popup>
                    {{casx.name}}
                  </l-popup>
                </l-marker> -->
                <!-- <l-circle
                  :lat-lng="[casx.longitude,casx.latitude]"
                  radius="45000" color='red' fill-color="#ff0000" opacity="1" fill-opacity="0.6"
                /> -->
              </div>
            </l-map>
          </div>
        </div>
      </div>
      <div class="col-md-2" style="padding:0">
        <div class="card" style="padding:10px">          
            <div class="row" style="align-items: center;">
              <div class="col-lg-6 col-md-12 col-xs-12 text-center" v-on:click="launchModal()">
                <div class="card m_block" v-bind:class="{ 'all_border': mode == 'all' }">
                  <strong class="c_number">61</strong>
                  <span class="c_title">Total Cases</span>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 text-center">
                <div class="card m_block">
                  <strong class="c_number">1</strong>
                  <span class="c_title">Deaths</span>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 text-center">
                <div class="card m_block">
                  <strong class="c_number">3</strong>
                  <span class="c_title">Discharged</span>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 text-center">
                <div class="card m_block">
                  <strong class="c_number">57</strong>
                  <span class="c_title">Active</span>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 text-center">
                <div class="card m_block">
                  <strong class="c_number">X</strong>
                  <span class="c_title">Index Cases</span>
                </div>
              </div>
              <div class="col-lg-6 col-xs-12 text-center">
                <div class="card m_block">
                  <strong class="c_number">X</strong>
                  <span class="c_title">Contact Cases</span>
                </div>
              </div>
            </div>         
          <hr>   
          <div class="sidebar">       
            <div class="card" style="padding:5px;margin-top:5px;width:100%;" v-for="singleState in statesList.data" :key="singleState.id">
              <div class="row" style="align-items: center;">
                <div class="col-md-3 ">
                  <img :src="singleState.image" class="img-fluid imgClass">
                </div>
                <div class="col-md-6 ">
                  <h6>{{singleState.name}}</h6>
                </div>
                <div class="col-md-3 ">
                  <h6 class="numbers">{{singleState.total_case}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div class="modal-body">
            <p>One fine body&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
  </div>
</template>
<script>
import { LMap, LTileLayer ,LGeoJson,  LMarker, LPopup,LIcon,LCircle} from "vue2-leaflet";
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
    LCircle
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 6.4,
      center: [9.0820, 8.6753],
      statesList: null,
      mode: 'all',
      cases : null,
      bounds: null,
      geojson: null,
      states: null,
      stateBoundaries : null,
      fillColor: "#e4ce7f",
      fillColorState: "#ff0000",
      icon: icon({
        iconUrl: "/geos/icon.png",
        iconSize: [16, 16],
        iconAnchor: [0, 0]
      }),
    };
  },
  methods: {
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
      const response = await fetch('https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json');
      this.geojson = await response.json(); 
      this.getState();    
    this.allCases();         
    },
    async getState(){
      // this.states = await response1.json(); 
      const response = await fetch('/api/states');
      this.statesList = await response.json();
      console.log(this.statesList);
      // this.loadStatePoly();
    },
    loadStatePoly(){
      let resultingArr = [];
      var i = 0;
      this.cases.data.map( async(res) =>{
          let resp = await fetch(`https://geoserver.grid-nigeria.org/geoserver/GRIDMaster/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=GRIDMaster:sv_boundary_lgas&outputFormat=application%2Fjson&authkey=fdfe9a37-d2d0-4210-9a15-25dab5d907fa&CQL_FILTER=state_code=%27${res.code}%27`);
          let jo = await resp.json(); 
          res.restpn = jo;
          var gfg = new Array(2); 
          gfg['id'] = i++;
          gfg['bound'] = jo;
          resultingArr.push(gfg);
          
      });
      this.states = resultingArr;
      console.log(resultingArr);
    },
    async allCases(){
      const response = await fetch('/api/active-cases');
      this.cases = await response.json();
      this.loadStatePoly();
    }
  }
  ,
  created () {
    // const response = await fetch('https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json');
    // this.geojson = await response.json();
    this.initMap();       
    
  },
  computed : {
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: '#065535',
          fillOpacity: 1
        };
      };
    },
    styleFunctionSatet() {
      const fillColorState = this.fillColorState; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ff0000",
          opacity: 1,
          fillColor: '#ff0000',
          fillOpacity: 1
        };
      };
    },
  },
};
</script>
<style scoped>
.sidebar{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 40vh);
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 20px;
}
.imgClass{
    width: 50%;
    height: 50%;
    -o-object-fit: scale-down;
    object-fit: scale-down;
}

.numbers{
  font-weight: 900;
  font-size: 18px;
  color:red;
  /* text-align:left !important ; */
}
.c_title{
  font-size: 10px;
  font-weight: 600;
}
.c_number{
  font-size: 25px;
  font-weight: 700;
}
.m_block{
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
}
.sidT{
  padding-left:5px ;
  padding-right:5px ;
}
.all_border{
  border: 1px solid red;
}
#mapx{
  height: 100vh
}
</style>
