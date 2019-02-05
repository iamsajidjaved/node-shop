var mongoose =  require('mongoose');
var Schema =  mongoose.Schema;

var Media = new Schema({
    url = {
        type : String,
        required : true,
    },
    product = {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
    },
});

var Media = mongoose.model('Media', Media);
// ready to go!