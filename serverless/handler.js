'use strict';

exports.graphqlHandler = async (event, context, callback) => {
    console.log('hit event: ', event);
    switch (event.field) {
        case "createUser": {
            try{
                console.log('creating a user: ', body);
                return callback(null, JSON.stringify({success: true}));
            } catch(err){
                console.log('error creatingUser: ', err);
                callback(err, null);
            }
        }

        case "updateUser": {
            try{
                console.log('updating a user: ', body);
                return callback(null, [JSON.stringify({success: true})]);
            } catch(err){
                console.log('error updating user: ', err);
                callback(err, null);
            }
        }

        case "getUser": {
            try {
                console.log('getting a user: ', body);
                return callback(null, JSON.stringify({success: true}));
            } catch(err){
                console.log('error getting user: ', err);
                callback(err, null);
            }
        }
        
        default: {
            callback(`Unknown field, unable to resolve ${event.field}`, null);
            break;
        }
    }
};