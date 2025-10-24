/**
 * Mock data for house rentals
 * Images are stored in public/assets/images/
 * This way, we can reference them directly as strings
 */

const houses = [
 {
    id: 1,
    title: "TUTORIAL VIDEO GUID",
    location: "Home Page ",
    price: 1,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092691/tutorial-video_xfoz84.png",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092730/tutorial-guid_yfgtcc.mp4"
    ],
    description:
      "Wake up to ocean views every day in this beachfront condo. Modern interior, steps from the beach."
  },
  {
    id: 2,
    title: "Bright Future",
    location: "Down Quarter ",
    price: 200000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092840/bright-future-1_bxjas2.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092717/bright-future-6_fyrv2t.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092681/bright-future-4_ybigwp.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092675/bright-future-2_umin0b.jpg"
      
    ],
    description:
      "A fully self enclosed room with an inner toilet and an available store right in the cite by the side of the Down Quater school street road.  It contains quality flowing water inside the toilets"
  },
  {
    id: 3,
    title: "Cite Labrad",
    location: "Down Quarter ",
    price: 260000,
    images: [  "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092685/cite-labrad-5_m5vkqx.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092685/cite-labrad-3_frsmwp.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092681/cite-labrad-4_qrcnhp.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092676/cite-labrad-1_pz4ddv.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092716/cite-labrad-7_ztes5h.mp4"
      
    ],
    description:
      "Enjoy peace and nature in this cite labrad. Perfect for students who are ready to study, with breathtaking views. Found about 50m from the main road"
  },
 {
    id: 4,
    title: "Early Bird",
    location: "Down Quarter ",
    price: 260000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092681/early-bird-1_azqp8x.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092738/early-bird-8_fbp1mc.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092681/early-bird-2_utq5b6.jpg"
     
    ],
    description: "Really close to the road. Room, toilet and kitchen at a really affordable price. Extra FCFA50000 is added for a pair"
  },
  {
    id: 5,
    title: "No Name",
    location: "Gamsi Entrance, Down Quarter ",
    price: 230000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092689/Gamsi-Entrance-3_emosua.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092726/Gamsi-Entrance-9_hmb7sx.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092687/Gamsi-Entrance-1_z4re9x.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092685/Gamsi-Entrance-2_heliwu.jpg"
    ],
    description:
      "A small quite self contained modern cite with constant flowing water and electricity  . Ideal for those who want comfort and style with privacy."
  },
  {
    id: 6,
    title: "No Name cite",
    location: "Presbyterian Church, Down Quater ",
    price: 450000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092689/No-Name-in-2_mhkkjh.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092688/No-Name-in_gvz9ox.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092694/No-Name-front_b2w0gh.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092734/no-name-room-5_qbfgla.mp4",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092723/no-name-room-2_osgy0s.mp4"

    ],
    description:
      "This charming luxurious cite offers a cozy living space, modern kitchen and toilet, and is close to school campus. this rent is divided as follows(400000 for rent, 30000 for caution, 20000 for light and water). all this excludes a 10000 fee to be paid to the hpuse agent"
  },
  {
    id: 7,
    title: "Standard Hostel",
    location: "Caps Junction ",
    price: 250000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092689/standard-hostel-1_fpac1b.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761092723/standard-hostel-6_sqkw7t.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092692/standard-hostel-4_ydync6.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092691/standard-hostel-2_bekiut.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761092690/standard-hostel-3_fxia07.jpg"
    ],
    description:
      "Wake up to the road view. Modern interior, stady water and electricity flow"
  },
  {
    id: 8,
    title: "Cavita Dieu Hostel",
    location: "Caps Junction ",
    price: 250000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174454/cavitas-hostel_dzo4kp.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174461/cavitas-hostel-4_ig3sgn.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174459/cavitas-hostel-3_oe7t0u.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174454/cavitas-hostel-2_fyqg63.jpg",


    ],
    description:
      "Room, toilet and kitchen. A large enclosed building designed to encoporate and prepare students study. This buiding has suffered fluctuating power supplies in the past year. It also contains extra large rooms with a free wardrope. An extra FCFA50000 is added incase of pairing"
  },
  {
    id: 9,
    title: "No Name",
    location: "Anthena Entrance, Down Quarter ",
    price: 250000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174456/no-name-anthena_dnpmwz.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174465/no-name-anthena-1_xjcwjm.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174460/anthena-single-room_dh7due.mp4",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174459/no-name-anthena-1_evvytm.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174456/no-name-anthena-4_bqrj5o.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174455/no-name-anthena-3_ey6m6m.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174455/no-name-anthena-2_thdelm.jpg"
      
    ],
    description: "Room,Toilet and kitchen. An open space house with very few tennants. A perfect place for those who love their space. Empty single rooms are also available for FCFA200000."
  },
 {
    id: 10,
    title: "South Lane",
    location: "Anthena Entrance Down Quarter ",
    price: 240000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174467/south-lane_o7dssv.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174465/south-lane-3_wresnu.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174463/south-lane-4_jg6gc1.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174462/south-lane-2_jinpz5.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174461/south-lane-1_cyye6k.jpg"


    ],
    description:
      "This very secured and charming luxurious cite offers a cozy living space, modern kitchen and toilet, and contains a constant water and electricity supply."
  },
  {
    id: 11,
    title: "Gracious City ",
    location: "Catholic Church Street, Down Quarter ",
    price: 120000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174464/gracious-city_cemvjq.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174459/gracious-city-2_ahhpsm.mp4",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174454/gracious-city-1_v2tjyt.jpg"
    ],
    description:
      "A single well secured room found close to the catholic church, down quarter. contains a constant water and electricity flow through the entire school year"
  },
  {
    id: 12,
    title: "No Name",
    location: "Catholic Church, Down Quarter ",
    price: 240000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174460/opposite-catholic-church_emzatq.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174460/opposite-catholic-church-3_csudtk.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174459/opposite-catholic-church-2_hbmy7f.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174458/opposite-catholic-church-1_abhq1p.jpg"

    ],
    description:
      "Room, toilet and kitchen. A large enclosed building designed to encoporate and prepare students study. An extra FCFA50000 is added incase of pairing"
  },
  {
    id: 13,
    title: "Cite La-Grace",
    location: "Catholic Church street, Down Quarter ",
    price: 230000,
    images: [
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174457/la-grace-1_oraahq.jpg",
      "https://res.cloudinary.com/dy1zepecl/video/upload/v1761174468/la-grace-3_whppqt.mp4",
     "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174461/la-grace_bkhpwq.jpg",
     "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174460/la-grace-2_offq4h.jpg",
     "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174460/la-grace-3_zzothe.jpg"
    ],
    description: "Room,Toilet and kitchen. Its a wonderful cite with easy access to roads"
  },
  {
    id: 14,
    title: "Mzeka's Plaza",
    location: "Catholic Church Entrance, Down Quater ",
    price: 250000,
    images: [ "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174462/mzekas-plaza-1_mqzxdj.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174465/mzekas-plaza-2_xegow2.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174465/mzekas-plaza_dutluw.jpg",
      "https://res.cloudinary.com/dy1zepecl/image/upload/v1761174463/mzekas-plaza-3_xlypxt.jpg"

    ],
    description:
      "This very secured and charming luxurious cite offers a cozy living space, modern kitchen and toilet, and contains a constant water and electricity supply."
  },
];

export default houses;
