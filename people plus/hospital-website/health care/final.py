from geopy.geocoders import Nominatim
from geopy import distance
from flask import Flask, render_template,request
import math

def plac (pl1,pl2):
    geocoder = Nominatim(user_agent = "i know python")
    location1 = pl1
    location2 = pl2

    coordinates1 = geocoder.geocode(location1)
    coordinates2 = geocoder.geocode(location2)

    lat1,long1 = (coordinates1.latitude),(coordinates1.longitude)
    lat2,long2 = (coordinates2.latitude),(coordinates2.longitude)

    place1 = (lat1,long1)
    place2 = (lat2,long2)

    # print(distance.distance(place1,place2))
    fi = (distance.distance(place1,place2))

    def units(input_instance):
        return input_instance.km
    
    # distances_km = fi.applymap(units)

    distances_km = units(fi)

    # df[fi] = df[fi].map(lambda x: geodesic(x,other_distance).miles)


    return distances_km//1

# pl1 = "mau"
# pl2 = "varansi"
# ans = plac(pl1,pl2)
# print(ans)
# place = {}

# 0th position is for patient destination and others are for medical_bed destination
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/',methods=['POST'])

def getvalue():
    name1 = request.form['#addres']
    # place[0]=name1
    name2 = request.form['#addres2']
    # place[1]=name2
    # name3 = request.form['']
    # # place[2]=name3
    # name4 = request.form['name4']
    # place[3]=name4
    
    place[2]="india"
    place[3]="USA"

    place = {0:name1 , 1:name2 , 2:name3, 3:name4}
    i = 1
    length = len(place)
    mii= 100000000.0 
    out =""
    # print(place[0])
    # print(place[1])
    # print(place[2])

    while i<length:
        c = plac(place[0],place[i])
        # print(place[0])
        # print(place[i])
        # print(c)
        if(c<mii):
            out = place[i]
            mii = c
        i=i+1

    print(out)
    return render_template('index.html',near=out)


if __name__=='__main__':
    app.run(debug=True)


