import { LightningElement,api,track,wire } from 'lwc';
import apexMethodName from '@salesforce/apex/InformaticaSoapCall.callSoapApi';
import myPNG_icon from '@salesforce/resourceUrl/iconSamiya';

export default class LwxComponent extends LightningElement {
    @track lampPng = myPNG_icon

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

    handleClick(event)
    {
        
        console.log(event.target.label);
        var inp=this.template.querySelectorAll("lightning-input");


        inp.forEach(function(element){
            if(element.name=="input1")
              {this.input1=element.value;}  
            else if(element.name=="input2")
                {this.input2=element.value;}
                else if(element.name=="input3")
                {this.input3=element.value;}
                else if(element.name=="input4")
                {this.input4=element.value;}
                else if(element.name=="input5")
                {this.input5=element.value;}
                else if(element.name=="input6")
                {this.input6=element.value;}
                else if(element.name=="input7")
                {this.input7=element.value;}
        },this);
        this.myString=this.input1+','+this.input2+', '+this.input3+', '+this.input4+', '+this.input5+', '+this.input6+', '+this.input7;
        apexMethodName({input11:this.myString})//,input22:this.input2,input33:this.input3,input44:this.input4,input55:this.input5,input66:this.input6,input77:this.input7})
        .then(result => {
            
            if(result !=null)
            {this.fResult = result;
            this.fmsg='SUCCESS';}
            else
            {this.fResult = 'ERROR : INVALID ADDRESS';
                this.fmsg='INVALID ADDRESS';}
            
        })
        .catch(error => {
            this.error = error;
        });
        //console.log(this.input7);
    }
    
    

}