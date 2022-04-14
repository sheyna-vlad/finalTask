({
  createCase: function(component, event, helper) {
    var subjectField = component.find("subject");
    var subject = subjectField.get("v.value");
    System.debug(' var subject =  subjectField.get("v.value");');

    var originField = component.find("origin");
    var origin = originField.get("v.value");
    System.debug(' var origin =  originField.get("v.value");');

    var status = component.get("v.newCase.Status");
    System.debug(' var status =  component.get("v.newCase.Status");');

    var contactField = component.find("contact");
    var contact = contactField.get("v.value");
    System.debug('var contact =  contactField.get("v.value");');

    var emailField = component.find("email");
    var email = emailField.get("v.value");
    System.debug('var email =  emailField.get("v.value");');

    var descriptionField = component.find("description");
    var description = descriptionField.get("v.value");
    System.debug('var description =  descriptionField.get("v.value");');

    var newCase = component.get("v.newCase");
    newCase.subject = subject;
    newCase.origin = origin;
    newCase.status = status;
    newCase.contactId = contact;
    newCase.suppliedEmail = email;
    newCase.description = description;
    System.debug(newCase);

    helper.createCase(component, JSON.stringify(newCase));

    System.debug("helper.createCase(component, JSON.stringify(newCase));");
  }
});
