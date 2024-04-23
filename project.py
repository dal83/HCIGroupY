from flask import Flask, render_template, url_for,jsonify,request
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    data= [
        {'oh_id':'cs223','queue':'10','constant':'2.4'},
        {'oh_id':'cs323','queue':'5','constant':'3.4'}
      ]
    return jsonify(data)
    # return render_template('index.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/page1')
def page1():
    # fake data to the frontend of the classes available
    data= [
        {'name':'cs223'},
        {'name':'cs323'}
      ]
    return jsonify(data)

@app.route('/page2',methods=['GET'])
def get_OH_data():
    course = request.args.get('course')

    if course:
        print('received query for', course)
        # Return a JSON response with the received query parameter value
        return jsonify({'oh_id':course,'queue':20, 'constant':3})
    else:
        # Return an error response if the query parameter is missing
        return jsonify({'error': 'Missing or invalid query parameter: course'}), 400


@app.route('/page3')
def page3():
    return render_template('page3.html')

@app.route('/page4')
def page4():
    return render_template('page4.html')

if __name__ == '__main__':
    app.run(debug=True)