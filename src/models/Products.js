import pkg from 'mongoose';
const { Schema, model } = pkg;

const prodcutSchema = new Schema({
   name: String,
   category:String,
   price:Number,
   imgUrl:String
   },{
    timestamps:true,
    versionKey:false
})

export default model('product',prodcutSchema);