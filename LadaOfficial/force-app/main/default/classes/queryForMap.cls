public class SK_LightningMapCmpController {
    @AuraEnabled
    public static List<Account> findAccountsForMap(){
        return [select id,name,billingCity,billingStreet,billingCountry,billingPostalCode,
                billingState,Latitude__c,Longitude__c from Account];
    }
}