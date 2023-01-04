import flask
from flask import render_template, jsonify, Flask, redirect, request

app=Flask(__name__, static_folder=staticsFiles,)
