public class saveCase {
	@AuraEnabled
	public static Case saveCase(Case caseJSON) {
    	Case newCase = (Case)JSON.deserialize(caseJSON, Case.class);

    	upsert newCase;
    	return newCase;
	}
    
}