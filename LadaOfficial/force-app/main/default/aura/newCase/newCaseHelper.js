({
  createCase: function(component, event) {
    var action = component.get("c.saveCase");
    console.log(event);
    action.setParams({
      caseJSON: event
    });
    console.log(action.getParams());

    action.setCallback(this, function(response) {
      var state = response.getState();
      console.log(response.getReturnValue());
      if (state === "SUCCESS" && response.getReturnValue() != NULL) {
        console.log("New Case was created" + response.getReturnValue());
      } else if (state === "ERROR") {
        var errors = response.getError();
        console.error(errors);
        alert("Problem with connection." + errors);
      }
    });

    $A.enqueueAction(action);
    console.log("$A.enqueueAction(action);");
  }
});
