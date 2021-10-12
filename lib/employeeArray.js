const path = require("path");
const fs = require("fs");

const htmlMockdowns = path.resolve(__dirname, "../dist");

const renderHtml = generatedEmployeeList => {
    const htmlArray = [];

    htmlArray.push(generatedEmployeeList
        .filter(employee =>
            employee.getRole() == "Manager")
        .map(manager => renderManagerCard(manager))
    );
    htmlArray.push(generatedEmployeeList
        .filter(employee =>
            employee.getRole() == "Intern")
        .map(intern => renderInternCard(intern))
    );
    htmlArray.push(generatedEmployeeList
        .filter(employee =>
            employee.getRole() == "Engineer")
        .map(engineer => renderEngineerCard(engineer))
    );
    
    return renderMockdown(htmlArray.join(""));
}

const replace = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", 'gm');
    return template.replace(pattern, value);
  };

const renderMockdown = htmlArray => {
    const mockdownTemplate = fs.readFileSync(path.resolve(htmlMockdowns, "mockdown.html"), "utf8");
    return replace(mockdownTemplate, "team" , htmlArray);
}

const renderManagerCard = manager => {
    let managerCard = fs.readFileSync(path.resolve(htmlMockdowns, "managerCard.html"), "utf8")
    managerCard = replace(managerCard, "name", manager.getName());
    managerCard = replace(managerCard, "role", manager.getRole());
    managerCard = replace(managerCard, "id", manager.getId());
    managerCard = replace(managerCard, "email", manager.getEmail());
    managerCard = replace(managerCard, "officeNumber", manager.getOfficeNumber());
    return managerCard;
};

const renderInternCard = intern => {
    let internCard = fs.readFileSync(path.resolve(htmlMockdowns, "internCard.html"), "utf8")
    managerCard = replace(internCard, "name", intern.getName());
    managerCard = replace(internCard, "role", intern.getRole());
    managerCard = replace(internCard, "id", intern.getId());
    managerCard = replace(internCard, "email", intern.getEmail());
    managerCard = replace(internCard, "school", intern.getSchool());
    return engineerCard;
}

const renderEngineerCard = engineer => {
    let engineerCard = fs.readFileSync(path.resolve(htmlMockdowns, "engineerCard.html"), "utf8")
    managerCard = replace(engineerCard, "name", engineer.getName());
    managerCard = replace(engineerCard, "role", engineer.getRole());
    managerCard = replace(engineerCard, "id", engineer.getId());
    managerCard = replace(engineerCard, "email", engineer.getEmail());
    managerCard = replace(engineerCard, "github", engineer.getGithub());
    return engineerCard;
}

module.exports = renderHtml;