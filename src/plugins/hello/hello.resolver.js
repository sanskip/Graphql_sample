module.exports = {
    Query: {
        hello: (root, args, context,info) => {
            // console.log(context.db)
          return 'Hello world!';
        },
      }
  };