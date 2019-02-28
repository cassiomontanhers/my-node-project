# my-node-project - assignment 1

run using HTTPie:


GET
http get https://node-project-buqmy5kyu.now.sh < getAll.json

(It will recover all todo's)


POST
http post https://node-project-buqmy5kyu.now.sh < post.json

(It will insert a new todo according to the json in the post.json file)


UPDATE
http put https://node-project-buqmy5kyu.now.sh < put.json

(It will update all todo's with the name informed in the put.json file to a positive status)


DELETE
http delete https://node-project-buqmy5kyu.now.sh < delete.json

(It will delete all todo's with todoStatus true)
