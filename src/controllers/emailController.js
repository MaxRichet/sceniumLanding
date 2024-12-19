const Email = require('../models/emailModel');


exports.emailRegister = async (req, res) => {
    try{
            
        let newEmail = new Email({...req.body});
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(regex.test(req.body.email)){
            let email = await newEmail.save();
            res.status(201).json({message: `Utilisateur crée: ${email.email}`});
        } else {
            res.status(401).json({message: "E-mail non valide"});
        }
    } catch(error) {
        console.log(error);
        res.status(401).json({message: "Requête invalide"});
    }
    
}