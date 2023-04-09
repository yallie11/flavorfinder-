#API hackathon project 
#flavorfinder
#Yaseen Alli 
#Alex Urban 

#part 1 using an API to pull the data into SQL lite

#import library 
import requests 
import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('Hackathon2.db')
cursor = conn.cursor()

#delete all current information in table 
query="DELETE FROM Recipes"
query1="UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Recipes'"
cursor.execute(query)
cursor.execute(query1)
conn.commit()

# Set API credentials and query term
app_id = '7d644c2a'
app_key = '8cdc2e7a713887f5b8710f7ec52aab5b'
types = ['Chicken', 'Steak' , 'Pasta' , 'Fish' , 'Soup' , 'French'  , 'vegetarian' , 'Asian', 'Indian' ,'vegan']

# Construct API request URL
for type in types:
    test = type
    url = f'https://api.edamam.com/api/recipes/v2?type=public&q={test}&app_id={app_id}&app_key={app_key}'     

    # Send API request
    response = requests.get(url)
    # Check if the request was successful
    if response.status_code == 200:
        # Parse JSON response
        data = response.json()
        
        # Loop through recipe hits and insert data into database
        for hit in data['hits']:
            recipe = hit['recipe']
            Name = recipe['label']
            Image= recipe['image']
            Calories=recipe['calories']
            CuisineType=recipe['cuisineType']
            MealType=recipe['mealType']

               # Handle KeyError exception
            try:
                DishType=recipe['dishType']
                

            except KeyError:
                DishType = None
            
            try:
                Time=recipe['totalTime']

            except KeyError:
                Time=None 
            
            try:
                Ingredients=recipe['ingredientLines']
            
            except:
                Ingredients=None 

            try: 
                url=recipe['url']

            except:
                url=None
           

            
    
            # Insert data into database
            query2 = "INSERT INTO Recipes(Name,Image,Calories,CuisineType,MealType,DishType,Time,Ingredients,url) VALUES (?,?,?,?,?,?,?,?,?)"
            values = (Name,Image,Calories,str(CuisineType),str(MealType),str(DishType),str(Time),str(Ingredients),str(url))
            cursor.execute(query2, values)
            conn.commit()
            
    else: 
        print(f'Failed to retrieve data from API for {test}')
        print(f'Response status code: {response.status_code}')

# Close database connection
conn.close()






















