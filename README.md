# prerequisite

1.node.js

# Code Execution

1. Download code from repo
2. Run command "npm install"
3. Run command "npm start"
4. Go to browser  use this url : http://localhost:4000/graphql

# study refrence
1. udemy.com
2. https://medium.com/@jeffrey.allen.lewis/2018-beginners-guide-graphql-its-advantages-over-rest-architecture-972b0ef1dccb
3. https://dzone.com/articles/graphql-core-features-architecture-pros-and-cons
4. https://www.howtographql.com/basics/3-big-picture/
5. https://graphql.org/

# Sample query
 1. {
	hello
 }

 2. {
  posts
}
3. {
  posts {
    id
    title
  }
}

4. mutation{
updatePost(id: 1 ,authorId :2,title:"hello") {
  id
}
}
