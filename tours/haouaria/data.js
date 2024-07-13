var APP_DATA = {
  "scenes": [
    {
      "id": "0-veranda",
      "name": "Veranda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4608281621493866,
        "pitch": -0.044397402948060716,
        "fov": 1.5296923379379344
      },
      "linkHotspots": [
        {
          "yaw": -1.1575757392401371,
          "pitch": 0.09799910573916115,
          "rotation": 4.71238898038469,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.680409160678856,
          "pitch": 0.31459904498207614,
          "rotation": 0,
          "target": "3-room1"
        },
        {
          "yaw": -2.8997096813472165,
          "pitch": 0.3410049794798766,
          "rotation": 0.7853981633974483,
          "target": "0-veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.6675818463691545,
        "pitch": 0.2664957886214889,
        "fov": 1.5296923379379344
      },
      "linkHotspots": [
        {
          "yaw": 2.3225976504922405,
          "pitch": 0.560386335442077,
          "rotation": 5.497787143782138,
          "target": "3-room1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room1",
      "name": "Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8070890655939245,
          "pitch": 0.274243329326044,
          "rotation": 12.566370614359176,
          "target": "1-salon"
        },
        {
          "yaw": -1.6012642423477388,
          "pitch": 0.1425910726170052,
          "rotation": 0.7853981633974483,
          "target": "0-veranda"
        },
        {
          "yaw": 2.4023960710191634,
          "pitch": 0.5559170786718735,
          "rotation": 0.7853981633974483,
          "target": "2-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Maison Haouaria (Mme Raoudha)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
