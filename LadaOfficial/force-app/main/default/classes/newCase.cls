public class saveCase {
	@AuraEnabled
	public static Case saveCase(String caseJSON) {
    	Case newCase = (Case)JSON.deserialize(caseJSON, Case.class);

    	upsert newCase;
        System.debug('Well Done');
    	return newCase;
	}
    
}