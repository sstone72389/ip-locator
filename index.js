$.get("https://api.ipdata.co", function(response) {
  $("#response").html(JSON.stringify(response, null, 4));
  var lat1 = response.latitude;
  var lon1 = response.longitude;

  // calc closest store
  function closestLocation(targetLocation, locationData) {
    function vectorDistance(dx, dy) {
      return Math.sqrt(dx * dx + dy * dy);
    }

    function locationDistance(location1, location2) {
      var dx = location1.latitude - location2.latitude,
        dy = location1.longitude - location2.longitude;

      return vectorDistance(dx, dy);
    }

    return locationData.reduce(function(prev, curr) {
      var prevDistance = locationDistance(targetLocation, prev),
        currDistance = locationDistance(targetLocation, curr);
      return (prevDistance < currDistance) ? prev : curr;
    });
  }

  // Comb through for comlax stores and remove corresponding objects when needed
  var data = {
      "Locations": {
        "Location": [{
            "latitude": "42.90747600",
            "longitude": "-78.76158600",
            "content": "2015 Walden Avenue Cheektowaga, NY 14225",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=69>Cheektowaga</a>",
            "loc_id": 69
          },
          {
            "latitude": "42.71860400",
            "longitude": "-73.80325800",
            "content": "145A Wolf Road Albany, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=78>Albany</a>",
            "loc_id": 78
          },
          {
            "latitude": "39.94127000",
            "longitude": "-75.02003500",
            "content": "2100 Route 38 Cherry Hill, NJ",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=79>Cherry Hill</a>",
            "loc_id": 79
          },
          {
            "latitude": "43.04480000",
            "longitude": "-89.35144000",
            "content": "2355 West Broadway Monona, WI",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=85>Monona</a>",
            "loc_id": 85
          },
          {
            "latitude": "37.31567100",
            "longitude": "-121.83489900",
            "content": "1290 Tully Road San Jose, CA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=90>San Jose</a>",
            "loc_id": 90
          },
          {
            "latitude": "33.80369000",
            "longitude": "-117.90011600",
            "content": "517 East Katella Ave Anaheim, CA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=93>Anaheim</a>",
            "loc_id": 93
          },
          {
            "latitude": "33.09544100",
            "longitude": "-96.80171300",
            "content": "8700 Preston Road #103 Plano, TX",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=94>Plano</a>",
            "loc_id": 94
          },
          {
            "latitude": "42.22068100",
            "longitude": "-71.03692300",
            "content": "220 Wood Road Braintree, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=24>Braintree</a>",
            "loc_id": 24
          },
          {
            "latitude": "42.08056700",
            "longitude": "-71.37411600",
            "content": "509 East Central Street Franklin, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=26>Franklin</a>",
            "loc_id": 26
          },
          {
            "latitude": "42.01189800",
            "longitude": "-70.72999100",
            "content": "187 Summer Street Kingston, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=27>Kingston</a>",
            "loc_id": 27
          },
          {
            "latitude": "41.73139800",
            "longitude": "-71.43571800",
            "content": "1800 Post Road Warwick, RI",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=28>Warwick</a>",
            "loc_id": 28
          },
          {
            "latitude": "42.35283800",
            "longitude": "-71.61723700",
            "content": "739 Donald Lynch Bvd Marlborough, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=29>Marlborough</a>",
            "loc_id": 29
          },
          {
            "latitude": "42.50075400",
            "longitude": "-71.22977400",
            "content": "240 Middlesex Turnpike Burlington, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=30>Burlington</a>",
            "loc_id": 30
          },
          {
            "latitude": "42.55125600",
            "longitude": "-70.93298100",
            "content": "139 Endicott Street Danvers, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=33>Danvers</a>",
            "loc_id": 33
          },
          {
            "latitude": "42.41884300",
            "longitude": "-71.10665000",
            "content": "70 Salem Street Medford, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=34>Medford</a>",
            "loc_id": 34
          },
          {
            "latitude": "42.28423900",
            "longitude": "-71.23653900",
            "content": "1299 Highland Avenue Needham, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=40>Needham</a>",
            "loc_id": 40
          },
          {
            "latitude": "43.20443100",
            "longitude": "-70.86018000",
            "content": "159 Portland Avenue Dover, NH",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=44>Dover</a>",
            "loc_id": 44
          },
          {
            "latitude": "42.74198800",
            "longitude": "-71.49357500",
            "content": "248 Main Dunstable Road Nashua, NH",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=45>Nashua</a>",
            "loc_id": 45
          },
          {
            "latitude": "42.99441100",
            "longitude": "-70.96750000",
            "content": "40 Industrial Drive Exeter, NH",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=46>Exeter</a>",
            "loc_id": 46
          },
          {
            "latitude": "43.04814500",
            "longitude": "-71.43540600",
            "content": "1271 Hooksett Road Hooksett, NH",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=47>Hooksett</a>",
            "loc_id": 47
          },
          {
            "latitude": "41.09438800",
            "longitude": "-73.44919400",
            "content": "677 Connecticut Avenue Norwalk, CT",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=48>Norwalk</a>",
            "loc_id": 48
          },
          {
            "latitude": "40.91284700",
            "longitude": "-73.77483000",
            "content": "310 Main St New Rochelle, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=49>New Rochelle</a>",
            "loc_id": 49
          },
          {
            "latitude": "40.85473400",
            "longitude": "-73.18895600",
            "content": "134 E. Main Street Suite #6 Smithtown, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=19>Smithtown</a>",
            "loc_id": 19
          },
          {
            "latitude": "40.74881000",
            "longitude": "-73.61710200",
            "content": "231 Glen Cove Rd Carle Place, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=67>Carle Place</a>",
            "loc_id": 67
          },
          {
            "latitude": "40.88116700",
            "longitude": "-74.29428100",
            "content": "343 Route 46 West Fairfield, NJ",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=68>Fairfield</a>",
            "loc_id": 68
          },
          {
            "latitude": "42.97975000",
            "longitude": "-78.81285800",
            "content": "3265 Sheridan Drive Amherst, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=70>Amherst</a>",
            "loc_id": 70
          },
          {
            "latitude": "43.07978800",
            "longitude": "-77.62811500",
            "content": "1000 Hylan Drive Rochester, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=75>Rochester</a>",
            "loc_id": 75
          },
          {
            "latitude": "42.87655600",
            "longitude": "-78.87667600",
            "content": "Harbor Center 100 Washington Street Buffalo, NY",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=76>Buffalo</a>",
            "loc_id": 76
          },
          {
            "latitude": "42.13692900",
            "longitude": "-72.62041000",
            "content": "134 Capital Drive West Springfield, MA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=77>West Springfield</a>",
            "loc_id": 77
          },
          {
            "latitude": "40.36924200",
            "longitude": "-80.10285100",
            "content": "1155 Washington Pike Unit #11 Bridgeville, PA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=84>Bridgeville</a>",
            "loc_id": 84
          },
          {
            "latitude": "40.02943900",
            "longitude": "-75.63220000",
            "content": "127 West Lincoln Highway Exton, PA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=31>Exton</a>",
            "loc_id": 31
          },
          {
            "latitude": "40.23976100",
            "longitude": "-75.24436700",
            "content": "782 Bethlehem Pike North Wales, PA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=32>North Wales</a>",
            "loc_id": 32
          },
          {
            "latitude": "39.07553900",
            "longitude": "-77.13815000",
            "content": "815 Rockville Pike Rockville, MD",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=91>Rockville</a>",
            "loc_id": 91
          },
          {
            "latitude": "39.03519900",
            "longitude": "-77.40812400",
            "content": "21031 Triple Seven Rd Suite 100 Sterling, VA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=92>Sterling</a>",
            "loc_id": 92
          },
          {
            "latitude": "40.68907200",
            "longitude": "-80.10328400",
            "content": "20267 Route 19 Suite 2 Cranberry Township, PA",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=82>Cranberry Township</a>",
            "loc_id": 82
          },
          {
            "latitude": "38.79760200",
            "longitude": "-90.62484500",
            "content": "5833 Suemandy Drive Saint Peters, MO",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=53>Saint Peters</a>",
            "loc_id": 53
          },
          {
            "latitude": "38.66625000",
            "longitude": "-90.59979800",
            "content": "254 THF Blvd. Chesterfield, MO",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=54>Chesterfield</a>",
            "loc_id": 54
          },
          {
            "latitude": "38.56274300",
            "longitude": "-90.40853400",
            "content": "1237 S. Kirkwood Road Kirkwood, MO",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=55>Kirkwood</a>",
            "loc_id": 55
          },
          {
            "latitude": "42.48454100",
            "longitude": "-83.47099600",
            "content": "43111 Crescent Blvd Novi, MI",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=41>Novi</a>",
            "loc_id": 41
          },
          {
            "latitude": "42.56094100",
            "longitude": "-83.13401500",
            "content": "686 East Big Beaver Road Troy, MI",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=42>Troy</a>",
            "loc_id": 42
          },
          {
            "latitude": "45.03638700",
            "longitude": "-93.02403900",
            "content": "1845 E. County Rd. D Maplewood, MN",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=71>Maplewood</a>",
            "loc_id": 71
          },
          {
            "latitude": "44.97320300",
            "longitude": "-93.45812100",
            "content": "14200 Wayzata Boulevard Suite Q Minnetonka, MN",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=72>Minnetonka</a>",
            "loc_id": 72

          },
          {
            "latitude": "44.74718300",
            "longitude": "-93.28168300",
            "content": "14150 Nicollet Ave South Burnsville, MN",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=73>Burnsville</a>",
            "loc_id": 73
          },
          {
            "latitude": "44.86051100",
            "longitude": "-93.33198700",
            "content": "4210 West 78th Street Edina, MN",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=74>Edina</a>",
            "loc_id": 74
          },
          {
            "latitude": "41.75182000",
            "longitude": "-88.01581800",
            "content": "1230 West 75th Street Downers Grove, IL",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=61>Downers Grove</a>",
            "loc_id": 61
          },
          {
            "latitude": "42.02791400",
            "longitude": "-88.14557100",
            "content": "170 Barrington Rd Schaumburg, IL",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=62>Schaumburg</a>",
            "loc_id": 62
          },
          {
            "latitude": "42.10408000",
            "longitude": "-87.84677100",
            "content": "2751 Pfingsten Rd Glenview, IL",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=64>Glenview</a>",
            "loc_id": 64
          },
          {
            "latitude": "41.88986300",
            "longitude": "-87.96050600",
            "content": "550 St. Charles Road Elmhurst, IL",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=65>Elmhurst</a>",
            "loc_id": 65

          },
          {
            "latitude": "39.56485900",
            "longitude": "-104.95714600",
            "content": "2690 East County Line Road Suite A Littleton, CO",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=36>Littleton</a>",
            "loc_id": 36
          },
          {
            "latitude": "39.87649500",
            "longitude": "-105.09751000",
            "content": "9979 Wadsworth Parkway Suite 400 Westminster, CO",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=37>Westminster</a>",
            "loc_id": 37
          },
          {
            "latitude": "40.64038300",
            "longitude": "-111.88809000",
            "content": "5993 South State Street Murray, UT",
            "link": "<a href=https://www.purehockey.com/store.aspx?CDT=636586027819716067&loc_id=88>Murray</a>",
            "loc_id": 88
          }
        ]
      }
    },

    targetLocation = {
      latitude: lat1,
      longitude: lon1
    },
    closest = closestLocation(targetLocation, data.Locations.Location);

  console.log("You're Closest Store is: ", closest);
  $("#closestLocation").append(JSON.stringify(closest, undefined, 2))
  // closest is now the location that is closest to the target location


  // use this new value to find the NEXT closest store (first remove the inital result and searh again)
  var removePlace = data.Locations.Location.indexOf(closest)
  if(removePlace != -1) {
	data.Locations.Location.splice(removePlace, 1);
}
  closest2 = closestLocation(targetLocation, data.Locations.Location);

  console.log("You're Second Closest Store is: ", closest2);
  $("#closestLocation2").append(JSON.stringify(closest2, undefined, 2))

  $(".prettyPlaces").append("Your two closest stores are: " + closest.content + " and " + closest2.content)
}, "jsonp");
