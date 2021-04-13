from flask import Flask, json, request, jsonify
from flask_cors import CORS

gps = {"gps": {"location": {"longitude": 11.462431, "latitude": 58.197761}, "course": 45}}
routeInfo = {"longitude": 11.462431, "latitude": 58.197761, "course": 45, "refcourse": 45, "goallongitude": 11.467781080864368, "goallatitude": 58.19432362991195,}
api = Flask(__name__)
CORS(api)

@api.route('/route', methods=['GET'])
def get_route():
  json_data = None
  with open('route.json', 'r') as j:
    json_data = json.load(j)

  return jsonify(json_data)

@api.route('/route', methods=['POST'])
def post_route():
    print(request.json)
    with open('route.json', 'w') as outfile:
      json.dump(request.json, outfile)
    return jsonify(request.json)

@api.route('/gps', methods=['GET'])
def get_gps():
  return json.dumps(gps)

@api.route('/routeInfo', methods=['GET'])
def get_routeInfo():
  return json.dumps(routeInfo)

@api.route('/data', methods=['GET'])
def get_data():
  json_data = None
  with open('data.json', 'r') as j:
    json_data = json.load(j)
  return jsonify(json_data)

@api.route('/settings', methods=['GET'])
def get_settings():
  json_data = None
  with open('settings.json', 'r') as j:
    json_data = json.load(j)
  return jsonify(json_data)

@api.route('/settings', methods=['POST'])
def post_settings():
    print(request.json)
    with open('settings.json', 'w') as outfile:
      json.dump(request.json, outfile)
    return jsonify(request.json)

if __name__ == '__main__':
    api.run()   