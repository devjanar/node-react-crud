var Model = require('../models/Todo');

module.exports =  {

    create : function (req, res, next) {
        if(req.body && req.body!=null) {
            Model.create(req.body, function (err, success) {
                if (!err) {
                    res.status(200).json(success);
                }
                else {
                    res.status(400).json({error:'SomeThing Going On Wrong'})
                }
            });
        }
        else {
            res.status(400).json({error:'All fields required'})
        }
    },

    findOne : function (req,res,next) {
        if(req.body && req.body.id) {
            Model.findById({_id: req.body.id}, function (err, success) {
                if (!err) {
                    res.status(200).json(success);
                }
                else {
                    res.status(400).json({error:'SomeThing Going On Wrong'})
                }
            });
        }
        else {
            res.status(400).json({error:'SomeThing Going On Wrong'})
        }
    },

    update : function (req,res,next) {
        if(req.body && req.body._id) {
            Model.findOneAndUpdate({_id: req.body._id}, req.body, {new:true},function (err, success) {
                if (!err) {
                    res.status(200).json(success);
                }
                else {
                    res.status(400).json({error:'SomeThing Going On Wrong'})
                }
            });
        }
        else {
            res.status(400).json({error:'SomeThing Going On Wrong'})
        }
    },

    remove : async function (req,res,next) {
        try {
            if(req.body && req.body.id) {
                await Model.findByIdAndRemove({_id:req.body.id});
                let success=await Model.find({}).sort([['createdAt', -1]]);
                //
                res.status(200).json(success);
            }
            else {
                return res.status(400).json({error:'SomeThing Going On Wrong'})
            }
        }catch (e) {
            return res.status(400).json({error:'Server Error'})
        }
    },

    getall : function (req,res,next) {
        Model.find({}).sort([['createdAt', -1]]).exec(function(err, success) {
            if (!err) {
                res.status(200).json(success);
            }
            else {
                res.status(400).json({error:'SomeThing Going On Wrong'})
            }
        });
    },

};