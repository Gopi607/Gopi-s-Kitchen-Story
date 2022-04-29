
import { Injectable } from "@angular/core";

import { Mykitchen } from "./vegsample";
@Injectable({
    providedIn:'root'
})
  export class vegsampleservice
  {
private Items: Mykitchen[]=[
  
  {
    "vegetableid":1,
    "vegetablename":"Beet-root",
    "vegetablecost": 50,
    "vegetableimg":"./assets/vegetables/v10.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":2,
    "vegetablename":"Onions",
    "vegetablecost":30,
    "vegetableimg":"https://i.ibb.co/9VpKh2Q/goh-rhy-yan-CCx-WLAx0qmk-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
 
  {
    "vegetableid":3,
    "vegetablename":"Cauli-flower",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v9.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
 
  {
    "vegetableid":4,
    "vegetablename":"Carrot",
    "vegetablecost":40,
    "vegetableimg":"https://i.ibb.co/rvxhmGx/jacqueline-brandwayn-y1-r-Ew-CZk-Pg-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":5,
    "vegetablename":"Potato",
    "vegetablecost":20,
    "vegetableimg":"https://i.ibb.co/bWsn4bw/lars-blankers-B0s3-Xndk6tw-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":6,
    "vegetablename":"Cucumber",
    "vegetablecost":30,
    "vegetableimg":"./assets/vegetables/v7.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":7,
    "vegetablename":"Pumpkin",
    "vegetablecost":50,
    "vegetableimg":"./assets/vegetables/v8.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":8,
    "vegetablename":"Tomato",
    "vegetablecost":20,
    // "vegetableimg":"./assets/vegetables/v1.jpeg",
   "vegetableimg":"https://i.ibb.co/gJzjnsQ/mockup-graphics-sgm-S2e95-QO0-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid": 9,
    "vegetablename":"Cabbage",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v2.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  

  {
    "vegetableid":10,
    "vegetablename":"Spinach Cucumber",
    "vegetablecost":50,
    "vegetableimg":"https://i.ibb.co/FmqdBRt/eric-prouzet-Ky6x9-T8j128-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":11,
    "vegetablename":"Radish",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v11.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":12,
    "vegetablename":"Drum-stick",
    "vegetablecost":80,
    "vegetableimg":"./assets/vegetables/v13.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":13,
    "vegetablename":"Green chilli",
    "vegetablecost":30,
    "vegetableimg":"./assets/vegetables/v14.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0

  },
  {
    "vegetableid":14,
    "vegetablename":"Lady's finger",
    "vegetablecost":50,
    "vegetableimg":"./assets/vegetables/v15.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":15,
    "vegetablename":"Red chilli",
    "vegetablecost":200,
    "vegetableimg":"./assets/vegetables/v16.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":16,
    "vegetablename":"Peas",
    "vegetablecost":60,
    "vegetableimg":"./assets/vegetables/v17.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":17,
    "vegetablename":"Amranthus",
    "vegetablecost":60,
    "vegetableimg":"./assets/vegetables/v18.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":18,
    "vegetablename":"Corn",
    "vegetablecost":60,
    "vegetableimg":"./assets/vegetables/v19.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":19,
    "vegetablename":"Bringal",
    "vegetablecost":50,
    "vegetableimg":"./assets/vegetables/v20.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":20,
    "vegetablename":"Sweet potato",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v21.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":21,
    "vegetablename":"Bitter-guard",
    "vegetablecost":40,
    "vegetableimg":"./assets/vegetables/v6.jpeg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":22,
    "vegetablename":"JackFruit",
    "vegetablecost":40,
    "vegetableimg":"https://i.ibb.co/fkMQnPt/rakeem-burrell-z-EI8yxd-kt-Y-unsplash.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  },
  {
    "vegetableid":23,
    "vegetablename":"Asian DrumSticks",
    "vegetablecost":48,
    "vegetableimg":"https://i.ibb.co/nBvNxXr/e1.jpg",
    "vegetablequantity":0,
    "vegetabletotal":0
  }
  
    ]
      getItems(): Mykitchen[]{
        return this.Items;

      }
      
        
          

  }
  
  

   
    
   