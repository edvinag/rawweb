from flask import Flask, json
from flask_cors import CORS

gps = {"gps": {"location": {"longitude": 11.462431, "latitude": 58.197761}, "course": 45}}

# gps = {
# 	"type": "FeatureCollection",
# 	"features": [
# 		{
# 			"type": "Feature",
# 			"properties": {
# 				"name": "RawCat",
# 				"popupContent": "temp.html",
# 			},
# 			"geometry": {
# 				"type": "Point",
# 				"coordinates": [11.462431, 58.197761]
# 			}
# 		}
# 	]
# }

api = Flask(__name__)
CORS(api)

@api.route('/gps', methods=['GET'])
def get_companies():
  return json.dumps(gps)

if __name__ == '__main__':
    api.run()   