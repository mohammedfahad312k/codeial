const User = require('../model/user');


module.exports.profile = async function (req, res) {
    //authenticate
    if(req.cookies.user_id){
    try{
        const user = await User.findById(req.cookies.user_id);

    if(user)
    {
        return res.redirect('user_profile',{
            title: 'user profile',
            user: user
        });
    }
    else
    {
        return res.redirect('/user/signIn');
    }
}catch(error)
{
  console.log('error in looding profile, error');  
}
 } else{

    return res.render('/user/signIn');
 }
};

//render sign in page
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: 'user login page'

    });
};
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: 'user sign up page'
    });

};

//get the sign up data
module.exports.create = async function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        // alert('wrong password');
        return res.redirect('back');
    }
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            User.create(req.body);
            return res.redirect('/user/signIn');
        }
        else {
            return res.redirect('back');
        }
    }
    catch (error) {
        console.log('error while finding or creating  user in signing up', error);

    }
}


//     if(req.body.password !=req.body.confirmpassword){
//         alert('wrong password');
//         return res.redirect('back');
//     }
//     User.findOne({email: req.body.email}), function(err, user){
//         if(err){
//             console.log('error while find user in signing up');
//         return}
//         //if user doest not exist then create
//         if(!user){
//             User.create(req.body, function(err, user){
//                 if(err){
//                     console.log('error while creating  user in signing up');
//                 return}
//                 return res.redirect('user/signIn');
//             })
//         }
//         else{
//             return res.redirect('back');
//         }



// };
module.exports.createSession = async function (req, res) {
    //find the user
    try{
        const user = await User.findOne({email: req.body.email});

        //handle user found
        if(user){
            //handle password which dont match
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/user/profile')
        }
        else{
            return res.redirect('back');
        }
    }
    catch(error)
    {
        console.log('error in signing', error);
    }
};
module.exports.signOut = async function(req, res){
    try{
        res.clearCookies('user_id');
        return res.redirect('/user/signIn');

    }catch(error){
        console.log('error in signing out', error);
    }
}
