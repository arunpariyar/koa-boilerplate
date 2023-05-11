module.exports = (sequelize, Datatypes){
    return sequelize.define("Message",{
        authorId: {
            type:Datatypes.BOOLEAN,
            allowNull: false
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false,
        }

        //timestamp added by sequalize automatically
    })
}