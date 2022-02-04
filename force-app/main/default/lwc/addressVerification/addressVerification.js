import { LightningElement,api,track,wire } from 'lwc';
import apexMethodName from '@salesforce/apex/AddressVerificationCOntroller1.getInput';

export default class AddressVerification extends LightningElement {


@track input1=0;
@track input2='';
@track input3='';
@track input4='';
@track input5=0;
@track input6='';
@track input7='';
@track fResult;
@track myString='';
@track fmsg='';
@track result;
@track isLoaded=false;
@track inputAddressObj= 
{
    input1:this.input1,
    input2:this.input2,
    input3:this.input3,
    input4:this.input4,
    input5:this.input5,
    input6:this.input6,
    input7:this.input7
};
handleClick(event)
{   this.isLoaded=true;
    var inp=this.template.querySelectorAll("lightning-input");
    inp.forEach(function(element){
            if(element.name=="input1")
            {this.input1=element.value;
            this.inputAddressObj.input1 =element.value;
            console.log("hi");
            }  
            else if(element.name=="input2")
            {this.input2=element.value;
                this.inputAddressObj.input2 =element.value;}
            else if(element.name=="input3")
            {this.input3=element.value;
                this.inputAddressObj.input3 =element.value;}
            else if(element.name=="input4")
            {this.input4=element.value;
                this.inputAddressObj.input4 =element.value;}
            else if(element.name=="input5")
            {this.input5=element.value;
                this.inputAddressObj.input5 =element.value;}
            else if(element.name=="input6")
            {this.input6=element.value;
                this.inputAddressObj.input6 =element.value;}
            else if(element.name=="input7")
            {this.input7=element.value;
                this.inputAddressObj.input7 =element.value;}
    },this);
    console.log('input1',this.input1);
    console.log('informatica',this.inputAddressObj);
    apexMethodName({myWrapperArguments:this.inputAddressObj}).then(res =>{ 
        this.result=JSON.parse(res);
       //console.log('myResult1',this.result);
       this.fmsg=this.result.ProcessStatus;
       this.fResult=this.result.AddressComplete;
       this.isLoaded=false;
     }).catch(err => console.log(err.AddressComplete));

}



}