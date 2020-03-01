module.exports = {
  Query: {
    posts: (root, args, context, info) => {
    //   console.log(context.db);
      return context.db.posts;
    },
    post: (root, args, context, info) => {
    //   console.log(context.db, args);
      return context.db.posts.find(o => o.id === args.id);
    }
  },
  Post: {
    author: (root, args, context, info) => {
      console.log("***", root);
      return context.db.authors.find(o => o.id === root.authorId);
    }
  },
  Mutation: {
    addPost: (root, args, context, info) => {
      const post = {
        id: context.db.posts.length,
        authorId: args.input.authorId,
        title: args.input.title
      };
      context.db.posts.push(post);

      return post;
    },

    updatePost: (root, args, context, info) => {
      if (args.authorId && args.title) {
        let post = context.db.posts.find(o => o.id === args.id);
        post.authorId = args.authorId;
        post.title = args.title;
        return post;
      } else if (args.authorId) {
        let post = context.db.posts.find(o => o.id === args.id);
        post.authorId = args.authorId;
        return post;
      } else if (args.title) {
        let post = context.db.posts.find(o => o.id === args.id);
        post.title = args.title;
        return post;
      } else {
        return context.db.posts.find(o => o.id === args.id);
      }
    },

    deletePost: (root, args, context, info) => {
        const postIndex = context.db.posts.findIndex((post) => post.id === args.id);
        
        if (postIndex === -1) {
        throw new Error('Post not found')
        }
        context.db.posts.splice(postIndex, 1);
        return context.db.posts;
    }
  }
};
