const fs = require ("fs");

// Utility functions first
const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse(dataJson);
    }
    catch {
        return [];
    }
};

const saveallData = (allData) => {
    const saveData = JSON.stringify(allData);
    fs.writeFileSync("data10.json", saveData);
};

// Main functions
const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo();

    const duplicateData = allData.filter((obj) => {
        return obj.id === id;
    });

    const dataCount = allData.length;
    
    if(dataCount >= 10) {
        console.log("Error Data Count");
    }else{
        if(duplicateData.length == 0) {
            allData.push({
               id : id,
               fname : fname,
               lname : lname,
               city : city,
                age : age,
            });
            saveallData(allData);
        } else {
            console.log("Error Duplicated Data");
        }
    }
};

const deleteOneData = (id) => {
    const allDate = loadInfo();
  
    const keepToData = allDate.filter((obj) => {
      return obj.id !== id;
    });
    saveallData(keepToData);
  };

const deleteAllData = () => {
    saveallData([]);
};

const readData = (id) => {
    const allData = loadInfo();
    const itemNeeded = allData.find((obj) => obj.id == id);
    
    if(itemNeeded) {
        console.log(itemNeeded);
    } else {
        console.log("There is no item with this id");
    }
};

const readallData = () => {
    const allData = loadInfo();
    
    if (allData.length) {
        console.log(allData);
    } else {
        console.log("NOT FOUND ANY DATA");
    }
};


module.exports = {
    addPerson,
    deleteOneData,
    deleteAllData,
    readData,
    readallData,
};


