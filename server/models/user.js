const bcrypt = require('bcrypt');
const { getDb } = require('../services/database');

class User {
    constructor(email, firstName, lastName, password){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    save(){
        const db = getDb();
        const user = this;
        const saltRounds= 10;

    return bcrypt.genSalt(saltRounds)
        .then(salt => {
          console.log(`Salt: ${salt}`, user.password);
          return bcrypt.hash(user.password, salt);
        })
        .then(hash => {
          console.log(`Hash: ${hash}`);
            user.password = hash;
            db.collection('user').insertOne(user)
        })
        .catch(err => console.error(err.message));

    }

    static comparePassword(inputPassword, ogPassword){
       return bcrypt.compare(inputPassword, ogPassword)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.error(err);
        });
    }

    static findByEmail(email){
        const db = getDb();
        return db.collection('user').findOne({email})
                .then((result) => {
                    return result
                }).catch((err) => {
                    console.error(err);
                });
    }

}

module.exports = User;