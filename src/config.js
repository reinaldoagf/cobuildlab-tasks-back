module.exports={
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/tasks',
    SECRET_TOKEN: 'mysecrettokenkey',
    root:`http://localhost:${process.env.PORT || 3000}`
}