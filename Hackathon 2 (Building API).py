#API Hackathon 
#Yaseen Alli 
#Alex Urban 

#part 2 creating API
#import libraries 

from flask import Flask 
import json 
import requests
import sqlite3

app = Flask(__name__)

@app.route('/recipes/<keyword>/<dish_type>/<cuisine_type>/<meal_type>/<calories>', methods=['GET'])
def get_recipes(keyword, dish_type, cuisine_type, meal_type, calories ):
    
    #connect to SQL database
    conn=sqlite3.connect('Hackathon2.db')
    c = conn.cursor()

    #build SQL query based on filters
    query = "SELECT Name, Image, Calories, CuisineType, MealType, DishType, CookTime, Ingredients, url FROM Recipes WHERE Name LIKE ?"
    args = ('%' + keyword + '%',) 

    if dish_type:
        query += " AND (DishType LIKE ?)"
        args += ('%' + dish_type + '%',)

    if cuisine_type:
        query += " AND (CuisineType LIKE ?)"
        args += ('%' + cuisine_type + '%',)

    if meal_type:
        query += " AND (MealType LIKE ?)"
        args += ('%' + meal_type + '%',)
    
    if calories:
        query += " AND (Calories <= ?)"
        args += (calories,)

    if not dish_type and not cuisine_type and not calories :
        query += " OR (DishType LIKE ?) OR (CuisineType LIKE ?) OR (MealType LIKE ?)"
        args += ('%%', '%%', '%%')

    #execute SQL query to retrieve recipes based on filters
    c.execute(query, args)
    results = c.fetchall()

    #convert results to a dictionary format
    recipes=[]
    for row in results:
        recipe={
            'Name':row[0],
            'Image':row[1],
            'Calories':row[2],
            'CuisineType':row[3],
            'MealType':row[4],
            'DishType':row[5],
            'CookTime':row[6],
            'Ingredients':row[7],
            'url':row[8]

        }

        recipes.append(recipe)

    #close database connection
    conn.close()

    #return the data in JSON format 
    return json.dumps({'recipes':recipes})


if __name__ == '__main__':
    app.run(debug=True)

