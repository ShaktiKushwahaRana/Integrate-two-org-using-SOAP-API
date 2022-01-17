
You have one new message. 

Skip to content
Using Grazitti Interactive Mail with screen readers



                              How to integerate two orgs using SOAP

REFRENCE LINKS : https://www.sfdcblogger.com/blog/view/260/salesforce-to-salesforce-integration-using-soap-api
               : https://www.mstsolutions.com/technical/post-salesforce-data-from-one-org-to-another-org-using-soap-api\


Destination org is the org where we are going to send data of our source org

STEPS:
  
Step 1: In destination org,create a web service class
global class MyWebServiceHandler {

    webService static Id createContact(String firstname, string lastname){

        Contact c = new Contact();

        c.FirstName = firstname;

        c.LastName = lastname;

        insert c;

        return c.Id;

    }

}

Then Generate a WSDL file for the above Web Service class and save the generated XML file (MyWebServiceHandler.xml) in your system.


Step 2: Generate partner WSDL File

2.1 Go to setup and search API and click Generate Partner WSDL link. It will generate a WSDL file and save the Partner.xml.


*Now Log into another Salesforce (Source Org) that you are going to send the data and follow the below steps:

Step 3: Go to setup and search for apex classes. Click to Generate from WSDL  and select the Partner WSDL file (i.e. partner.xml) that you created in the Step 2. Now, click Parse WSDL button.

*It will navigate to another page that will show the Parse successful message. Now, click Generate Apex code button. (if you get any error during the apex generation, please replace all the occurrences of “anyType” to “string” in the Partner.xml file).


Step 4: Repeat the above step for the MyWebServiceHandler.xml file also.

*Two files will be generated from their corresponding xml files. The first file is used for the synchronous call, and the next one is used for the asynchronous call.


Step 5: Create Remote site settings for the destination Org in the Source Org.   
In remote site settings, add following url :  https://ap24.salesforce.com          (In Source Org)

Step 6: Apex class and Trigger for Contact Creation: Create the below class (ContactHandler) and trigger (ContactTrigger) into your Source org.

Replace the “xxx” with your Destination org’s user name and password + security token, like below.

partnerSoapSforceCom.LoginResult partnerLoginResult = myPartnerSoap.login(‘xxxxx@xxx.com’, ‘xxxxx’);

to

partnerSoapSforceCom.LoginResult partnerLoginResult = myPartnerSoap.login(Username, Password+securityToken);

public class ContactHandler
{ 
 @future(callout=true)      

    public static void createContact(List<Id> IdList){
         System.debug('Inside Contact Creation vgfgf');
        List<Contact> contactList = [SELECT Id,Firstname,Lastname FROM Contact WHERE ID=:IdList];

        if(!contactList.isEmpty() && contactList.size() < 99){

            partnerSoapSforceCom.Soap myPartnerSoap = new partnerSoapSforceCom.Soap(); 
            // Here Abc@123 is password of destination org and n9WUhehMk9p7oHsiijxfjZ5VO is security token  
            partnerSoapSforceCom.LoginResult partnerLoginResult = myPartnerSoap.login('abc@grazitti.com','Abc@123n9WUhehMk9p7oHsiijxfjZ5VO');
			System.debug('loginbnbb'+partnerLoginResult);	
            soapSforceComSchemasClassMywebservi.SessionHeader_element webserviceSessionHeader = new soapSforceComSchemasClassMywebservi.SessionHeader_element(); 

            webserviceSessionHeader.sessionId = partnerLoginResult.sessionId; 
			
            soapSforceComSchemasClassMywebservi.MyWebServiceHandler myWebservice = new soapSforceComSchemasClassMywebservi.MyWebServiceHandler();

            myWebservice.SessionHeader = webserviceSessionHeader;

           

            for(Contact contactIns:contactList){ 

                System.debug('contactIns-->'+contactIns);

                myWebservice.createContact(contactIns.firstname,contactIns.lastname);

            }

        }

    }

}


Trigger:

Trigger ContactTrigger on Contact (after Insert) {

    List<Id> contactList = new List<Id>();

        if(Trigger.isInsert){

        for(Contact contactInstance:Trigger.New){

                contactList.add(contactInstance.Id);

        }

 

       // String jsonString = json.serialize(contactList);

        ContactHandler.createContact(contactList);

    }

 

}

*Note: The above class and trigger handle only 99 records because standard Salesforce callout limit is 100 per transaction, if you want to process more than 100 records, you should go for a batch class.


Step 6: If you create a contact in the source instance, the same contact will be created in the destination instance also. 
SoapIntegeration.txt
Displaying SoapIntegeration.txt.
