({
  callToServer: function(component, method, callback) {
    var action = component.get(method);

    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        callback.call(this, response.getReturnValue());
      } else if (state === "ERROR") {
        var errors = response.getError();
        console.error(errors);
        alert("Problem with connection." + errors);
      }
    });
    $A.enqueueAction(action);
  }
});