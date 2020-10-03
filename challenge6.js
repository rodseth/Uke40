let peter= { name: "Peter", age: 14, gender: "male" }

function addMayDriveProperty(member) {
        let clone = { ...member }
        for (const [key, value] of Object.entries(clone)) {
          if (key === "age" && value > 17) {
            clone.mayDrive = true
          }
          else {
            clone.mayDrive = false
          }
        }
        return clone;
      }

      console.log(peter)
      let newPeter = addMayDriveProperty(peter)
      console.log(peter)
      console.log(newPeter)
      