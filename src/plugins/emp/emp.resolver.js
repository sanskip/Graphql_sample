const utilHelper = require('../../util/endpointHelper')

module.exports = {
    Query: {
        emps: async (root, args, context,info) => {
            // console.log(context.db)
          return await utilHelper.getEmployees();
        }
      }
  };