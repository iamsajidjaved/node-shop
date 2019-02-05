var mongoose =  require('mongoose');
var Schema =  mongoose.Schema;

var Product = new Schema({
    title = {
        type : String,
        required : true,
    },
    description = {
        type : String,
        required : true,
    },
    media = [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Media",
    }],
});


module.exports = mongoose.model('Product', Product);
// ready to go!