const addUser = (User) => ({email, bilingID, plan, endDate}) =>{
    if(!email || !bilingID || !plan){
        throw new Error('Missing data. Please provide values for email, bilingId, plan')
    }

    const user = new User({email, bilingID, plan, endDate})
    return user.save()
}

const getUsers = (User) => () =>{
    return User.find({})
}

const getUserByEmail = (User) => async(email) => {
    return await User.findOne({email})
}

const getUserByBilingID = (User) => async(bilingID) => {
    return await User.findOne({bilingID})
}

const updatePlan = (User) => (email, plan) => {
    return User.findOneAndUpdate({email, plan})
}

module.exports = (User) =>{
    return{
        addUser:addUser(User),
        getUsers:getUsers(User),
        getUserByEmail:getUserByEmail(User),
        updatePlan:updatePlan(User),
        getUserByBilingID:getUserByBilingID(User)
    }
}