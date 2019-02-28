CREATE TABLE todo (
  todoID       INT AUTO_INCREMENT,
  todoItem    VARCHAR(250) NOT NULL,
  todoDateAdded  DATE NOT NULL,
  todoStatus  BOOLEAN NOT NULL,
  todoDateBy  DATE NOT NULL,

  PRIMARY KEY     (todoID)
);
