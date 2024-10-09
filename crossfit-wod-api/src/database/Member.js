const DB = require("./db.json");

const getAllMembers = () => {
    try {
        return DB.members;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getOneMember = (memberId) => {
    try {
        console.log("DB get member: " + memberId);
        const member = DB.members.find((member) => member.id === memberId);
        if (!member) {
            throw {
                status: 400,
                message: `Can't find member with the id '${memberId}'`,
            };
        }
        return member;
    } catch (error) {
        console.log("DB get member: " + memberId + " failed: " + error.message);
        throw { status: error?.status || 500, message: error?.message || error };
    }
};


const createNewMember = (newMember) => {
    try {
        const isAlreadyAdded =
            DB.members.findIndex((member) => (member.name === changes.name) && (member.dateOfBirth === changes.dateOfBirth) && (member.email === changes.email)) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Member with the name '${newMember.name}' and date of birth '${newMember.Date}' and email '${newMember.email}' already exists`,
            };
        }
        DB.members.push(newMember);
        saveToDatabase(DB);
        return newMember;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateOneMember = (memberId, changes) => {
    try {
        const isAlreadyAdded =
            DB.members.findIndex((member) => (member.name === changes.name) && (member.dateOfBirth === changes.dateOfBirth) && (member.email === changes.email)) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Member with the name '${changes.name}' already exists`,
            };
        }
        const indexForUpdate = DB.members.findIndex(
            (member) => member.id === memberId
        );
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find member with the id '${memberId}'`,
            };
        }
        const updatedMember = {
            ...DB.members[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.members[indexForUpdate] = updatedWorkout;
        saveToDatabase(DB);
        return updatedMember;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const deleteOneMember = (memberId) => {
    try {
        const indexForDeletion = DB.members.findIndex(
            (member) => member.id === memberId
        );
        if (indexForDeletion === -1) {
            throw {
                status: 400,
                message: `Can't find member with the id '${memberId}'`,
            };
        }
        DB.workouts.splice(indexForDeletion, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};
module.exports = {
    getAllMembers,
    getOneMember,
    createNewMember,
    updateOneMember,
    deleteOneMember
};