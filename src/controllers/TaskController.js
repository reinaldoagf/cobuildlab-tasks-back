'use strict'
const mongoose = require("mongoose");
const uniqid = require('uniqid');
const db = require("../models");
async function _all(req,res,next){
	try{
		let elements = await db.Task.find({})
		res.status(200).send({message:'Tareas obtenidas satisfactoriamente',data:elements})
	}catch(error){
		console.log("error:",error)
		
	}  
}
async function _store(req,res,next){
	try{
		let task = await db.Task.create(req.body)
		return res.status(200).send({
			message:'Tarea registrado satisfactoriamente',
			data: await db.Task.findById(task._id)
		})
	}catch(error){
		console.log("error:",error)
		if(error.name==="ValidationError"){
			return res.status(422).send({message:'Entidad no procesable',errors:error.errors});
		}else{
			return 
		}
	}  
}
async function _update(req,res,next){
    try{
        const task = await db.Task.findByIdAndUpdate(req.params.id,req.body);
        if(!task) return res.status(404).send({message:`La tarea no existe`});

        return res.status(200).send({
            message:'Tarea actualizado satisfactoriamente',
            data: await db.Task.findById(task._id)
        })
    }catch(error){
        console.log("error:",error)
        
    }    
}
async function _delete(req,res,next){
    try{
        const task = await db.Task.findById(req.params.id);
        if(!task) return res.status(404).send({message:`La tarea no existe`});
		await task.remove();
        return res.status(200).send({
            message:'Tarea eliminada satisfactoriamente',
            data: task
        })
    }catch(error){
        console.log("error:",error)
        
    }    
}
module.exports={
	_all,
	_store,
	_update,
	_delete
}