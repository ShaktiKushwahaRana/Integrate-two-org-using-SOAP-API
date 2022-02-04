import {
    LightningElement,
    track,
    api
} from 'lwc';

import account_verification_headingline from '@salesforce/label/c.account_verification_headingline';
import discount_registration_headingline from '@salesforce/label/c.discount_registration_headingline';
import register_for_your_refund from '@salesforce/label/c.register_for_your_refund';
import register_for_your_refund_line1 from '@salesforce/label/c.register_for_your_refund_line1';
import fitbitionicexpertinquirycom from '@salesforce/label/c.fitbitionicexpertinquirycom';
import register_for_your_refund_line2 from '@salesforce/label/c.register_for_your_refund_line2';
import login_to_your_fitbit_account from '@salesforce/label/c.login_to_your_fitbit_account';
import login_to_your_fitbit_account_ul from '@salesforce/label/c.login_to_your_fitbit_account_ul';
import login_to_your_fitbit_account_li from '@salesforce/label/c.login_to_your_fitbit_account_li';
import login_to_your_fitbit_account_li2 from '@salesforce/label/c.login_to_your_fitbit_account_li2';
import login_to_your_fitbit_account_li3 from '@salesforce/label/c.login_to_your_fitbit_account_li3';
import reference_code_sucessmsg from '@salesforce/label/c.reference_code_sucessmsg';
import reference_code_sucessmsg_line1 from '@salesforce/label/c.reference_code_sucessmsg_line1';
import reference_code_mismatch from '@salesforce/label/c.reference_code_mismatch';
import reference_code_bannermsg from '@salesforce/label/c.reference_code_bannermsg';
import disable_complete_successmsg from '@salesforce/label/c.disable_complete_successmsg';
import reference_code_isalreadyprocessed from '@salesforce/label/c.reference_code_isalreadyprocessed';
import reference_code_isalreadyprocessed2 from '@salesforce/label/c.reference_code_isalreadyprocessed2';
import reference_code_errormsg from '@salesforce/label/c.reference_code_errormsg';
import disable_device_syncing from '@salesforce/label/c.disable_device_syncing';
import device_disable_syncing_sucessline2 from '@salesforce/label/c.device_disable_syncing_sucessline2';
import disable_device_errormsglineli4 from '@salesforce/label/c.disable_device_errormsglineli4';
import disable_device_errormsglineli5ul from '@salesforce/label/c.disable_device_errormsglineli5ul';
import disable_device_errormsglineli5li1 from '@salesforce/label/c.disable_device_errormsglineli5li1';
import disable_device_errormsglineli5li2 from '@salesforce/label/c.disable_device_errormsglineli5li2';
import disable_device_errormsgline5 from '@salesforce/label/c.disable_device_errormsgline5';
import HowdoIsetupmyFitbitAccount from '@salesforce/label/c.HowdoIsetupmyFitbitAccount';
import disable_device_errormsgline6 from '@salesforce/label/c.disable_device_errormsgline6';
import disable_device_errormsgbanner from '@salesforce/label/c.disable_device_errormsgbanner';
import contact_us from '@salesforce/label/c.contact_us';
import device_disable_sucessmsg from '@salesforce/label/c.device_disable_sucessmsg';
import device_disable_sucessmsg2 from '@salesforce/label/c.device_disable_sucessmsg2';
import try_againmsg from '@salesforce/label/c.try_againmsg';
import disable_device_syncing_sucessline4 from '@salesforce/label/c.disable_device_syncing_sucessline4';

import fetchUserDevices from '@salesforce/apex/storeFrontUserController.fetchUserDevices';
import disableDeviceClicked from '@salesforce/apex/DeviceDisableController.disableDeviceClicked';
import checkDeviceAvailability from '@salesforce/apex/DeviceDisableController.checkDeviceAvailability';
import  checkDuplicateRegCode from '@salesforce/apex/DeviceDisableController.checkDuplicateRegCode';
import tryAgainClicked from '@salesforce/apex/DeviceDisableController.tryAgainClicked';
import isguest from '@salesforce/user/isGuest';
import siteUrl from'@salesforce/label/c.ccf_siteURL';
import IconResource from '@salesforce/resourceUrl/SecurityprojectIcons';
import passCookie from '@salesforce/apex/storeFrontUserController.getCookieVal';
import {
    getUrlParamValue,
    getBrowserLangObj,
    setCookie,
    getCookie
} from 'c/helper';

//import caseCreation from '@salesforce/apex/storeFrontUserController.caseCreation';
import MailingPostalCode from '@salesforce/schema/Contact.MailingPostalCode';

export default class StorefrontComponent extends LightningElement {
    label={
        account_verification_headingline,
        discount_registration_headingline,
        register_for_your_refund,
        register_for_your_refund_line1,
        fitbitionicexpertinquirycom,
        register_for_your_refund_line2,
        login_to_your_fitbit_account,
        login_to_your_fitbit_account_ul,
        login_to_your_fitbit_account_li,
        login_to_your_fitbit_account_li2,
        login_to_your_fitbit_account_li3,
        reference_code_sucessmsg,
        reference_code_sucessmsg_line1,
        reference_code_mismatch,
        reference_code_bannermsg,
        reference_code_isalreadyprocessed,
        reference_code_isalreadyprocessed2,
        reference_code_errormsg,
        disable_device_syncing,
        device_disable_syncing_sucessline2,
        disable_device_errormsglineli4,
        disable_device_errormsglineli5ul,
        disable_device_errormsglineli5li1,
        disable_device_errormsglineli5li2,
        disable_device_errormsgline5,
        HowdoIsetupmyFitbitAccount,
        disable_device_errormsgline6,
        disable_device_errormsgbanner,
        contact_us,
        device_disable_sucessmsg,
        disable_complete_successmsg,
        disable_device_syncing_sucessline4,
        try_againmsg,
       // reference_code_bannermsg


        







    }


    @track CartIcon = IconResource + '/Icons/iconcart.png';
    @track verificationIcon = IconResource + '/Icons/iconverification.png ';
    @track alertIcon = IconResource + '/Icons/iconalert.png';
    @track approveIcon = IconResource + '/Icons/iconapprove.png';
    @track eclipseIcon = IconResource + '/Icons/iconeclipse.png';


    @track iconchange = false;
    @track placeholder;
    @track page1show = true;
    @track iconchange2 = false;
    @track stepthreecontentsucess = true;
    @track iconchange3 = false;
    @track step3 = false;
    @track step4content = false;
    @track outputText;
    @track disablebutton = true;
    @track checkBoxFieldValue;
    @track disablesubmitbutton = false;
    @track windowURL;
    @track pagehaeading;
    @track showicon = false;
    @track loginUrl;
    @track virtualstep4 = false;
    @track generatedCode = 'copy val';
    @track isGuestuser;
    @track devicediscount;
    @track registrationcodevalid = false;
    @track date = 'date';
    @track stepthreecontent = true;
    @track noerror;
    @track step3heading;
    @track isError;
    @track errorMsg;
    @track step4error;
    @track step4warning;
    @track step4sucess;
    @track step4contentsucess;
    @track showSpin = false;
    @track contactSupport;
    @track cpydisable = false;
    @track codemismatch;
    @track isprocessed;
    @track Trayagainerror;
    @track disabledrecall;
    @track fraudflaggederror;
    @track account_error;
    @track refrencecodeduplicate;
    @track discountstep4error;
    @track stepwarning4;
    @track inperror;
    isionic = true;
    ispaired = true;
    codeVal;
    count=0;
    serialnumber;
    registeredCode;
    isFraudFlagged=false;
    isDisabledWithoutRecall=false;
    isCurrentlyFound=false;
    isCurrentlyPaired=false;
   isAlreadyProcessed=false;
  isDisabledWithRecall=false;
  discountfound;
  discountpaired;
  devicename;
  deviceserial;
  productmap={};
    paramap={};


                 

    connectedCallback() {
        console.log('connectedchildstart');
        
        if (this.devicediscount && !isguest) {
            this.ReferencecodeError();
            this.showSpin = true;//null point exception on Non Auth page load
            fetchUserDevices({
                    regCode: null,
                    accessTkn: getCookie('customerAuth'),
                    lang:getCookie('selectedLang'),
                    deviceSerial:null,
                    deviceName:null,
                    isPaired:null,
                    isfound:null
                })
                .then(result => {
                    //alert('result fetch user');
                    this.showSpin = false;
                    this.deviceserial=result.deviceSerial;
                    this.devicename=result.deviceName;
                    this.discountpaired=result.isPaired ;
                    this.discountfound=result.isfound;
                    
                    //alert('discout >>> ' + JSON.stringify(result))
                    if (result['isError'] == true) {
                       console.log('error'+ JSON.stringify(result));
                        this.errorMsg = result.errorMsg;
                        this.stepthreecontent = false;
                        this.stepthreecontentsucess = false;
                        this.step4contentsucess = true;
                        this.noerror = false;
                        if(this.errorMsg=='You already registered for our special offers.'){
                            this.isprocessed=true;
                        }
                        else{
                            this.account_error=true;
                        }
                    } else if (result.isSuccess) {
                       console.log('Success'+JSON.stringify(result));
                        this.step3 = true;
                        this.stepthreecontentsucess = true;
                    }
                    this.iconchange = true;
                    this.page1show = false;
                    this.step3 = true;
                    this.template.querySelector('.step3_Div').style = "background-color: white; color:black";
                })
                .catch(error => {
                    this.showSpin = false;
                    this.error = error;
                  console.log('error result>>> ' + JSON.stringify(error))
                });
        }
        console.log('connectedchildend');
    }
    /***authenticated user or not */
    renderedCallback() {
        console.log(isguest);
        if (!isguest) {
            this.template.querySelector('.step3_Div').style = "background-color: white; color:black";
        }
        if (this.virtualstep4) {
            //console.log('>>> check 1');
            this.template.querySelector('.step4_Div').style = "background-color: white; color:black";
           // console.log('>>> check 2');
        }
        console.log('renderchild');
    }
    constructor() {

        super();
        console.log('constructorchild');
        //alert(getCookie('customerAuth'));
        passCookie({
                cookie: getCookie('customerAuth')
            })
            .then(result => {
                //alert('constructor result>>> '+JSON.stringify(result))
            })


        if (window.location.href.includes('devicediscount')) {
            this.devicediscount = true;
            this.noerror = true;
            this.iconchange2 = false;
            this.showicon = true;
            this.pagehaeading = "Discount Registration";
            this.step4heading = "Step 4 - Discount Access";
            this.virtualstep4 = false;
            this.step3heading = "Step 3 -Reference Code";
            this.loginUrl =siteUrl+ "/fitbitauth?path=devicediscount";
        } else {
            console.log('elsedisable');
            this.showicon = false;
            this.pagehaeading = "Account Verification";
            this.step3heading = "Step 3 - Reference Code";
            this.step4heading = "Step 4 - Disable Device Syncing";
            this.loginUrl = siteUrl+"/fitbitauth?path=devicedisable";
            this.iconchange2 = false;
            this.noerror = true;
            this.devicediscount = false;
        }


        if (isguest) {
            
            this.iconchange = false;
            this.page1show = true;
            this.loginstep=true;
            
            this.step3 = false;
            this.step4contentsucess = true;

      
        } else {
            console.log('elseisguest');
           this.showSpin=true;
            this.iconchange = true;
            this.page1show = false;
            //this.step3 = true;
            this.step4contentsucess = true;


       
        if(!this.devicediscount){
            console.log('devicedisablecheckavailablity before1');
            this.ReferencecodeError();
            console.log('devicedisablecheckavailablity before2');
            checkDeviceAvailability({
                accessToken: getCookie('customerAuth')
                })
                .then(result => {
                    console.log('getresult');
                    console.log('wraapper'+JSON.stringify(result));
                    if(result.isAlreadyProcessed){
                        this.isAlreadyProcessed= result.isAlreadyProcessed;

                    }
                    if( result.isDisabledWithRecall){
                        this.isDisabledWithRecall= result.isDisabledWithRecall;

                    }
                    if(result.isCurrentlyPaired){
                        this.isCurrentlyPaired=result.isCurrentlyPaired;
                    }
                    if(result.isCurrentlyFound){
                        this.isCurrentlyFound=result.isCurrentlyFound;
                    }
                    if(result.isDisabledWithoutRecall) {
                        this.isDisabledWithoutRecall=result.isDisabledWithoutRecall;}

                        if(result.isFraudFlagged){
                    this.isFraudFlagged=result.isFraudFlagged;
                    }
                  
                   
                    console.log('map...>>'+JSON.stringify(this.productmap));
                    this.showSpin=false;
                     if(result.isSNDisallowed){
                        this.noerror = false;
                        this.step3 = true;
                        this.stepthreecontentsucess = false;
                        this.stepthreecontent = false;
                        this.errorMsg='';
                       this.heathprogram=true;
                      }

                   
                    else if(this.isAlreadyProcessed || this.isDisabledWithRecall){
                        this.noerror = false;
                        this.step3 = true;
                        this.stepthreecontentsucess = false;
                        this.stepthreecontent = false;
                        this.errorMsg='Your Ionic is already disabled as part of the recall.';
                       this.refrencecodeduplicate=true;
                       
           
                    }
                   
                    else if(result.isNotFound){
                        this.noerror = false;
                        this.step3 = true;
                        this.stepthreecontentsucess = false;
                        this.stepthreecontent = false;
                        this.errorMsg='Your account doesn t have an impacted device associated with it.';
                       this.account_error=true;

                    }
                    
                   else {
                       this.serialnumber=result.deviceSerialNo;
                    var srNo = result.deviceSerialNo;
                    var prodMap = result.prodDetailsMap;
                    console.log('>>>>'+ srNo);
                    console.log('>>>>'+ prodMap);
                    var  resultmap=prodMap[srNo];
                   
                    console.log('resultmap>>>'+prodMap[srNo]);
                    resultmap["isFraudFlagged"]=this.isFraudFlagged;
                    resultmap["isDisabledWithoutRecall"]=this.isDisabledWithoutRecall;
                    this.productmap = resultmap;
                    console.log('prodmap>>'+JSON.stringify(resultmap));
                       if(result. isCurrentlyPaired || result.isCurrentlyFound)
                       {
                        this.stepthreecontentsucess = true;
                        this.step3 = true;
                        
                       }
                     
                 
                    

                   }
                    
            });

        }
    }
    }

    handleClick() { //login clkd
        window.location.href = this.loginUrl;
    }
    Changehandle(event){
        this.disablesubmitbutton = false;

    }

    handleSubmit(event) {
        console.log('submitclick');
        this.showSpin = true;
        //alert('submit clk');
        this.outputText = this.template.querySelector('lightning-input').value;
        console.log('1 '+this.outputText);
       let refrencecode = this.template.querySelector('.refrencecode').value;
       this.registeredCode=this.template.querySelector('.refrencecode').value;
        //console.log('2 '+refrencecode);

        let rerefrencecode = this.template.querySelector('.reerefrencecode').value;
        //alert('3 '+rerefrencecode);
        let code = this.template.querySelector(".refrencecode");
        this.codeVal = code.value;
        //alert('4 '+this.codeVal);
        if (!this.codeVal) {
            code.setCustomValidity("Verify your code is correct and reenter it.");
        } else {
            console.log('else');
            code.setCustomValidity("");
        } 
        if (code.reportValidity()&& refrencecode==rerefrencecode ) {//Add !this.codemismatch
            //alert('Valid 1');
            /*if (refrencecode != rerefrencecode) {
                this.codemismatch = true;
            }*/
            //alert('Valid 2');
            if(refrencecode.length!=16){
                this.inperror='Your entry does not match the allowed pattern.';
                this.codemismatch=true;
                this.disablesubmitbutton = true;
            }
            this.showSpin=false;
            this.codemismatch=false;

            this.disablesubmitbutton = true;

            if (this.devicediscount) {
                this.showSpin = true;
                
               this.ReferencecodeError();
                // alert('devicediscount');
                fetchUserDevices({
                        regCode: this.codeVal,
                        accessTkn: getCookie('customerAuth'),
                        deviceSerial:this.deviceserial,
                    deviceName:this.devicename,
                    isPaired:this.discountpaired,
                    isfound:this.discountfound

                    })
                    .then(result => {
                        console.log('resultsubmit'+JSON.stringify(result));
                        this.showSpin = false;
                        //alert('constructor result>>> ' + JSON.stringify(result))
                        if (result['isError'] == true) {
                            
                            this.errorMsg = result['errorMsg'];
                            this.step3 = false;
                           if( this.errorMsg=='This reference code has already been used.'){
                            this.showSpin=false;
                            this.noerror = false;
                            this.step3 = true;
                            this.stepthreecontentsucess = false;
                            this.stepthreecontent = false;
                           this.refrencecodeduplicate=true;
                           }

                           else {
                               this.virtualstep4=false;
                               this.step4contentsucess=false;
                               this.discountstep4error=true;
                               this.stepwarning4=false;
                               

                           }
                            //this.template.querySelector('.step4_Div').style="background-color: white; color:black";
                            //this.step4content=true;
                        } else if (result.isSuccess) {
                           // alert('Success');
                            this.generatedCode = result['genCode'];

                            this.iconchange2 = true;
                            //this.custCountry = result['custCountry'];
                            this.stepthreecontentsucess = false;
                            //this.template.querySelector('.bck').style="height:150vh";
                            this.template.querySelector('.step4_Div').style = "background-color: white; color:black";
                            this.iconchange3 = true;
                            this.stepwarning4=true;
                            this.step4content = false;
                            this.step4contentsucess = false;
                        } //success 
                    }) //then
                    .catch(error => {
                        console.log('errosubmit'+JSON.stringify(error));
                        this.showSpin = false;
                        this.error = error;
                       //c/emailsignupChina alert('error result>>> ' + JSON.stringify(error))
                    });
            } else {
              this.showSpin=true;
               this.ReferencecodeError();
                checkDuplicateRegCode({regCode: this.registeredCode}).then(result=>{
                    console.log('resultregcode'+JSON.stringify(result));
                    if(!result){
                     if(this.isCurrentlyFound){
                        this.showSpin=false;
                        this.iconchange2 = true;
                        this.step3 = false;
                        this.stepthreecontentsucess = false;
                        this.virtualstep4 = true;
                        this.iconchange3 = false;
                        this.step4warning = true;
                        this.step4error = true;
                        this.Trayagainerror=true;
                        this.fraudflaggederror=false;
                        this.disabledrecall=false;

                     }
                     else{
                        this.showSpin=false;
                        this.virtualstep4 = true;
                        this.iconchange2 = true;
                        this.step3 = false;
                        this.stepthreecontentsucess = false;
        
                        this.step4warning = false;
                        this.iconchange3 = false;
        
                        this.step4content = true;
                      

                     }
                      

                    }
                    else{
                        this.showSpin=false;
                        this.noerror = false;
                        this.step3 = true;
                        this.stepthreecontentsucess = false;
                        this.stepthreecontent = false;
                        this.errorMsg='This reference code has already been used.';
                       this.refrencecodeduplicate=true;
                    }
                });


              




               
            }

        }
        else{
              this.showSpin=false;
              this.disablesubmitbutton=true;
              this.codemismatch = true;
              this.inperror='Your entry does not match the allowed pattern.';
             
           
        } //report validity
    }

    handlecheck(event) {
        this.disablebutton = true;
        this.checkBoxFieldValue = event.target.checked;
        if (this.checkBoxFieldValue) {
            
            this.disablebutton = false;
        }
    }
    tryagainClick() {
        //alert('tryagain');
        console.log('enetertry');
        this.showSpin = true;
        console.log('enetercount');
        this.count=this.count+1;
        console.log('exitcount');
        tryAgainClicked({ accToken: getCookie('customerAuth') })
    .then(result => {
        console.log('resultonclicktryagain...'+JSON.stringify(result));
        if(result.isCurrentlyPaired ){
            this.showSpin=false;
                this.virtualstep4 = true;
                this.iconchange2 = true;
                this.step3 = false;
                this.stepthreecontentsucess = false;

                this.step4warning = false;
                this.iconchange3 = false;

                this.step4content = true;

        }
        else{
          if(this.count==5){
            this.errorMsg ='Your account doesn t have an impacted device associated with it.' ;
                        this.stepthreecontent = false;
                        
                        this.stepthreecontentsucess = false;
                        this.step4contentsucess = true;
                        this.noerror = false;
                        this.account_error=true;

          }
          else{
            this.showSpin=false;
            this.iconchange2 = true;
            this.step3 = false;
            this.stepthreecontentsucess = false;
            this.virtualstep4 = true;
            this.iconchange3 = false;
            this.step4warning = true;
            this.step4error = true;
          }
        }
    });



        
    }
    disabledevice() {
        this.showSpin = true;
        this.disablebutton = true;
        console.log('serialno'+this.serialnumber);
        console.log('recode',this.registeredCode);
        let getcountry= getCookie('selectedCountry');
        let getlang=getCookie('selectedLang');
        let token=getCookie('customerAuth');
       console.log('token',token);
       console.log('getcountry',getcountry);
       console.log('getlang',getlang);
       console.log('consolebeforedisablemethod');
        disableDeviceClicked({
           regCode: this.registeredCode ,
           accessToken: token,
            deviceSRNo: this.serialnumber,
            country: getcountry,
            language: getlang,
            deviceDetailObj:this.productmap
        }).then(result=>{
            console.log('resultdevicedisable'+JSON.stringify(result));
            if(this.isFraudFlagged||this.isDisabledWithoutRecall){
                this.showSpin=false;
                this.step4content = false;
                this.step4warning = true;
                this.step4error = true;
                this.Trayagainerror=false;
                this.fraudflaggederror=true;
                this.disabledrecall=false;

             }
             else if(!this.isFraudFlagged && !this.isDisabledWithoutRecall){
                this.showSpin = false;
                this.step4warning = false;
                this.iconchange3 = true;
                this.step4content = false;
                this.step4sucess = true;
            }

           
            
        });
      
    }

    ReferencecodeError(){
        console.log('enter');
        this.isprocessed=false;
        this.account_error=false;
        this.refrencecodeduplicate=false;
        this.heathprogram=false;
        console.log('exit');
    }

    handleSupport() {
        this.contactSupport = +siteUrl+"/support";
        window.location.href = this.contactSupport;
    }

    
}