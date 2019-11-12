from flask import Flask, render_template, request, send_from_directory
from flask_restful import Resource, Api, reqparse

class CustomFlask(Flask):
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        variable_start_string='%%',  # Default is '{{', I'm changing this because Vue.js uses '{{' / '}}'
        variable_end_string='%%',
    ))

app = CustomFlask(__name__)
api = Api(app)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)

class Hello(Resource):
    def get(self):
        return render_template("hello.html")

class Notas(Resource):
    def get(self):
        return render_template("notas.html")

class Faltas(Resource):
    def get(self):
        return render_template("faltas.html")

api.add_resource(Hello, '/hello')
api.add_resource(Notas, '/notas')
api.add_resource(Faltas, '/faltas')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)