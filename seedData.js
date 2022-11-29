const previousLogs = [
    {
        title: "First Log",
        entry: "All systems running normally.",
        shipIsBroken: false
    },
    {
        title: "Second Log",
        entry: "Maintenance check performed. No new issues.",
        shipIsBroken: false
    },
    {
        title: "Third Log",
        entry: "Maintenance check performed. Fuel level at 50%.",
        shipIsBroken: false
    },
    {
        title: "Fourth Log",
        entry: "Engine shutoff due to overheating.",
        shipIsBroken: true
    },
    {
        title: "Fifth Log",
        entry: "Added coolant. Engine running normally.",
        shipIsBroken: false
    },
    {
        title: "Sixth Log",
        entry: "Fuel tank empty. Speed reduced to 1LYPH.",
        shipIsBroken: true
    },
    {
        title: "Seventh Log",
        entry: "Added fuel. Engine running normally.",
        shipIsBroken: true
    }
];

module.exports = { previousLogs };