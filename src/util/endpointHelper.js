const requestify = require("requestify");

module.exports = {
  getEmployees: async () => {
    try{
        let response = await requestify.get(
            "http://dummy.restapiexample.com/api/v1/employees"
          );
          return response.getBody().data; 
    }catch(err){
        
    }  

  },
  getBookContent: async () => {
    let response = await requestify.get(
      "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json"
    );
    return response.getBody();
  }
};
