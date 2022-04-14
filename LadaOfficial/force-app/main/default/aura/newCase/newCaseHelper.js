({
  createCase: function(component, event) {
    var action = component.get("c.saveCase");
    action.setParams({
      case: event
    });

//    action.setCallback(this, function(response) {
//      var state = response.getState();
//      if (state === "SUCCESS" && response.getReturnValue() != NULL) {
//        alert("New Case was created" + response.getReturnValue().subject);
//      } else if (state === "ERROR") {
//        var errors = response.getError();
//        console.error(errors);
//        alert("Problem with connection." + errors);
//      }
//    });

    $A.enqueueAction(action);
	System.debug('$A.enqueueAction(action);');
  }
});
