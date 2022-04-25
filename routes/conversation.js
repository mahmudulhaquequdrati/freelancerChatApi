const router = require("express").Router();
const Conversation = require("../models/Conversation");

// post conversation
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderEmail, req.body.receiverEmail],
  });

  //? start validation
  const allConversations = await Conversation.find({});
  const duplicate = await allConversations.find(allConversation=>((allConversation.members[0]=== req.body.senderEmail) && allConversation.members[1]=== req.body.receiverEmail));

  if(!duplicate){
    try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
    } catch (error) {
    res.status(500).json(error);
  }
  }
  else{
    res.json({message:"duplicate"})
  }

  // if(duplicate){
  //  return res.json({
  //    message:"duplicate"
  //  })
  // }
  
  // if(duplicate){
  //   console.log('duplicate');
  //   res.json({message:'duplicate'})
  //   return
  // }
  
   

  
  
});

// get conversation of an user
router.get("/:email", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: {
        $in: req.params.email,
      },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;