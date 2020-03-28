<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <div class="col-md-3" style="padding:0">
         <div class="card">
          
         </div>
      </div> -->
      <div class="col-md-12 col-xl-10" style="padding:0">
        <div class="card">
          <div id="mapx" class="mapWeb">
            <map-component :zoom="zoom"></map-component>
          </div>
          <div class="mapMobile" id="mapx" > 
            <map-component :zoom="mobileZoom"></map-component>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-xl-2 mapWeb" style="padding:0" id="main-sidebar">
        <sidebar-component></sidebar-component>
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
import { LMap, LTileLayer ,LGeoJson,  LMarker, LPopup,LIcon,LCircle,LControlZoom, LControl} from "vue2-leaflet";
import { latLng, icon } from "leaflet";
function getDefaultData() {
    return {
      zoom: 6.4,
      mobileZoom: 5,
      // active : false,
    }
}
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
  data : getDefaultData,
  methods: {
    async initMap(){      
    },
    sideAction(action){
      this.active = action;      
    },
    closeMenu(){
      this.active = false;
      Object.assign(this.$data, this.$options.data.apply(this))
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
<style>
@media screen and (max-width: 1024px) {
  .statShow{
    display: block !important; 
  }
  .mainStats{
    display: none !important; 
  }
  .sidebar{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;   
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 20px;
  }
  .sdHeight{
    height: 100%;
    max-height: unset !important;
  }
}


@media screen and (max-width: 1200px) {
  #main-sidebar{
    display: none;
  }
  .imgClass{
    width: 20%;
    height: 20%;
    -o-object-fit: scale-down;
    object-fit: scale-down;
  }
  .mapMobile{
    display: block;
  }
  .mapWeb{
    display: none;
  }
  .sidebarDef{
      display: block;
  }
  
  
}

@media screen and (min-width: 1201px) {
  .imgClass{
    width: 70%;
    height: 70%;
    -o-object-fit: scale-down;
    object-fit: scale-down;
  }
  .mapMobile{
    display: none;
  }
}

.sidebar{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 20px;
  }
  .sdHeight{
    height: 100%;
    max-height: 60vh;
  }

.statShow{
  display: none;
}

 .mainStats{
    display: block ; 
  }

.numbers{
  font-weight: 900;
  font-size: 14px;
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
  height: 100vh;
}
#cs_color{
  color: red;
  font-weight: 900 ;
}
/* .fa-bars{
  font-size: 20px;
} */
</style>
