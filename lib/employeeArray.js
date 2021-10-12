const path = require("path");
const fs = require("fs");

const htmlMockdowns = path.resolve(__dirname, "../dist");

const renderHtml = (teamRoster) => {
    const engineerHtmlArray = [];
    const internHtmlArray = [];
    const managerHtmlArray = [];

    managerHtmlArray.push(teamRoster
        .filter(employee =>
            employee.getRole() == "Manager")
        .map(manager => renderManagerCard(manager))
    );
    internHtmlArray.push(teamRoster
        .filter(employee =>
            employee.getRole() == "Intern")
        .map(intern => renderInternCard(intern))
    );
    engineerHtmlArray.push(teamRoster
        .filter(employee =>
            employee.getRole() == "Engineer")
        .map(engineer => renderEngineerCard(engineer))
    );
    
    return renderMockdown(engineerHtmlArray.join(""), managerHtmlArray.join(""), internHtmlArray.join(""));
}

const replace = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };



const renderMockdown = (engineerHtml, managerHtml, internHtml) => {
    
    let mockdownTemplate = fs.readFileSync(path.resolve(htmlMockdowns, "mockdown.html"), "utf8");
    mockdownTemplate = replace(mockdownTemplate, "engineer" , engineerHtml);
    mockdownTemplate = replace(mockdownTemplate, "manager" , managerHtml);
    mockdownTemplate = replace(mockdownTemplate, "intern" , internHtml);
    return mockdownTemplate;
}   




const renderManagerCard = manager => {
    let managerCard = fs.readFileSync(path.resolve(htmlMockdowns, "managerCard.html"), "utf8")
    managerCard = replace(managerCard, "name", manager.name);
    managerCard = replace(managerCard, "role", manager.getRole());
    managerCard = replace(managerCard, "id", manager.id);
    managerCard = replace(managerCard, "email", manager.email);
    managerCard = replace(managerCard, "officeNumber", manager.officeNumber);
    console.log("check")
    console.log(manager.name)
    return managerCard;
};

const renderInternCard = intern => {
    let internCard = fs.readFileSync(path.resolve(htmlMockdowns, "internCard.html"), "utf8")
    internCard = replace(internCard, "name", intern.name);
    internCard = replace(internCard, "role", intern.getRole());
    internCard = replace(internCard, "id", intern.id);
    internCard = replace(internCard, "email", intern.email);
    internCard = replace(internCard, "school", intern.school);
    console.log("check")
    console.log(intern.name)
    return internCard;
}

const renderEngineerCard = engineer => {
    let engineerCard = fs.readFileSync(path.resolve(htmlMockdowns, "engineerCard.html"), "utf8")
    engineerCard = replace(engineerCard, "name", engineer.name);
    engineerCard = replace(engineerCard, "role", engineer.getRole());
    engineerCard = replace(engineerCard, "id", engineer.id);
    engineerCard = replace(engineerCard, "email", engineer.email);
    engineerCard = replace(engineerCard, "github", engineer.github);
    console.log("check")
    console.log(engineer.name)
    return engineerCard;
}

module.exports = renderHtml;