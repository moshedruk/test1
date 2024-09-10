
const ReturnstringItamOfChiefofstaff = Unit => {    
    const rank =  Unit.commandStructure.chiefOfStaff.rank
    const name = Unit.commandStructure.chiefOfStaff.name
    const phone = Unit.commandStructure.chiefOfStaff.contact.phone       
    return `${rank} ,${name} ,${phone}`    
}   
const returnSumsolger = Unit => {    
    return Unit.personnel.length
}
const updateDeployment= (Unit,newmission)=>{      
    Unit.history.push({
        eventDate: Unit.currentDeployment.startDate,
        eventDescription: `Deployment to ${Unit.currentDeployment.location} for ${Unit.currentDeployment.mission}`
    });    
    Unit.currentDeployment = newmission;    
    return Unit;
    };
const newWopands = (Unit,newwopand)=> {
    const weaponExists = Unit.equipment.firearms.find(e => e.type === newwopand.type && e.status === newwopand.status)     
    if (weaponExists) {
        weaponExists.quantity +=1 
    } else {
        
        Unit.equipment.firearms.push(newwopand);
    }    
    return Unit;
    
}
const Thelengthoftraining = Unit =>{
    const sum = Unit.trainingPrograms.reduce((sum,Programs) => sum + Programs.duration,0 )
    return `the sum Thelengthoftraining is ${sum}`
}

let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };
  const newcurrentDeployment = {
  
    location: "Middle East",

    mission: "Counter-terrorism ",

    startDate: "2025-01-01",

    estimatedEndDate: "2026-12-31",

}
const newwopand = {    
        type: "M16 Rifle",   
        status: "Operational",      
    }
  
    

const resOFChiefofstaff = ReturnstringItamOfChiefofstaff(militaryUnit)
const Sumsolger = returnSumsolger(militaryUnit)
const updete = updateDeployment(militaryUnit,newcurrentDeployment)
const updatenewwopand = newWopands(militaryUnit,newwopand)
const ThelengthofTraining = Thelengthoftraining(militaryUnit)






