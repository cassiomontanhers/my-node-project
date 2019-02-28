# my-node-project - assignment 1

run using HTTPie:

GET
http get https://node-project-kmzhgovmy.now.sh < getAll.json

(It will recover all todo's)

POST
http post https://node-project-kmzhgovmy.now.sh < post.json

(It will insert a new todo according to the json in the post.json file)

UPDATE
http put https://node-project-kmzhgovmy.now.sh < put.json

(It will update all todo's with the name 'New Todo Item' to a positive status and a new name)

DELETE
http delete https://node-project-kmzhgovmy.now.sh < delete.json

(It will delete all todo's with the name 'New Todo Item - Completed')
