let mongoose = require('mongoose');
const Schema = mongoose.Schema; 
let blogSchema = new Schema({  
 name: {type: String, required: true}, 
 blogue: {type: String, required: true} 
}); 

blogSchema.statics.getBlogs = function() {
    return new Promise((resolve, reject) => {
      this.find((err, docs) => {
        if(err) {
          console.error(err);
          return reject(err);
        }
        resolve(docs);
      })
    })
  }

module.exports = mongoose.model('blog', blogSchema, 'blogues');