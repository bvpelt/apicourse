// In src/database/utils.js
const fs = require("fs");

const saveToDatabase = (DB) => {
    try {
        fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
            encoding: "utf-8",
        });
        console.log("utils saveToDatabase succeded");
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { saveToDatabase };