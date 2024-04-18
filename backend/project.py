from flask import Flask, render_template, url_for,jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

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

@app.route('/page2')
def page2():
    return render_template('page2.html')

@app.route('/page3')
def page3():
    return render_template('page3.html')

@app.route('/page4')
def page4():
    return render_template('page4.html')

if __name__ == '__main__':
    app.run(debug=True)