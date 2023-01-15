
## The project is a web interface for API (developed in django) with the ability to edit the database using the crud. The project has two different ui applications (just for fun). First one implemented with Django (the folder is called "ui") and the second one with React (the folder is called "camera_ui"). CCTV is a folder with Django API. The project uses MongoDB.

---
## To start locally:
> ### Start Django API ("cctv" folder) app with command: *python manage.py runserver 127.0.0.1:8000*
> ### Start UI Django ("ui" folder) app with command: *python manage.py runserver 127.0.0.1:8001*
> ### Start UI React app ("camera_ui" folder) with command: *npm start*

---
#### Django UI does not use django model and base directly. Both UI apps receive data via http protocol.

#### There is example to add an item to DB: 
```json
{
"title": "Your item's title ",
"description": "Your item's description"
}
```
