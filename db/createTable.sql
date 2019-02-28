CREATE TABLE todo (
  todoID       INT AUTO_INCREMENT,
  todoItem    VARCHAR(250) NOT NULL,
  todoDateAdded  DATE NOT NULL,
  todoStatus  BOOLEAN NOT NULL,
  todoDateBy  DATE NOT NULL,

  UNIQUE KEY unique_todoItem (todoItem),
  PRIMARY KEY     (todoID)
);
