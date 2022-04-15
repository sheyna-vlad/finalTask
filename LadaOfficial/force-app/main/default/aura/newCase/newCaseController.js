({
  createCase: function(component, event, helper) {
    
    var subjectField = component.find("subject");
    
    var subject = subjectField.get("v.value");
   
   


    
    var emailField = component.find("email");
    
    var email = emailField.get("v.value");
	
    
    var descriptionField = component.find("description");
    var description = descriptionField.get("v.value");
    
    
    var newCase = component.get("v.newCase");


    newCase.Subject = subject;
    newCase.SuppliedEmail = email;
    newCase.Description = description;
    
   
    helper.createCase(component, JSON.stringify(newCase));
    

  }
});