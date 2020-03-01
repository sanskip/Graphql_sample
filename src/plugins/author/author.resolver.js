module.exports = {
    Query: {
        authors: (root, args, context,info) => {
            // console.log(context.db)
          return context.db.authors;
        },
        author: (root, args, context,info) => {
            // console.log(context.db,args)
            // console.log('author')
          return context.db.authors.find(o => o.id === args.id);
        }
      },
      Author: {
         posts: (root, args, context,info) => { 
        //     console.log('***',root)
        //     console.log(context.db)
        //     console.log(context.db.posts.find(o => o.authorId === root.id))
            return context.db.posts;
         }
      }
  };