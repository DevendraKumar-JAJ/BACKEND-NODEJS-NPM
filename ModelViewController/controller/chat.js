const Chat=require('../models/chat')

async function handleGetChats(req,res){
  let chatss = await Chat.find();
  res.render('Chats.ejs',{chats:chatss})
}


function handlePostChats(req, res){
  res.send("Add new chat  | Working ");
};


function handlePatchChats(req, res){
  res.send("Edit chat | Working");
}


function handleDeleteChats(req, res){
  res.send("Delete chat | Working");
}
module.exports={
  handleGetChats,
  handlePostChats,
  handlePatchChats,
  handleDeleteChats
}