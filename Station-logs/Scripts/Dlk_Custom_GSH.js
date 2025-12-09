
// -------------------------------------------------------
// Dlk_alarm1.0
// -------------------------------------------------------
function Dlk_alarm10_OnUpdate(oSource){
        var oShape,iPV,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"alarm.cp_pv");
	iValue = oShape.GetCustomProperty("Value", "AlmTrue");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (iPV == iValue) {
	    oShape.objects("RecFrame").fillcolor = ("rgb(255,255,0)");
        }else {
            oShape.objects("RecFrame").fillcolor = ("rgb(192,192,192)");
        }
        
}
// -------------------------------------------------------
// OPEN_CLOSE_BUTTON
// -------------------------------------------------------
function Dlk_OPEN_CLOSE_BUTTON_OnUpdate(oSource){
        var oShape,iPV,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"TAGNAME.PARAM");
        
        if (iPV == 0) {
	    oShape.objects("pushbutton003").innerText = "OPEN";
        }else {
            oShape.objects("pushbutton003").innerText = "CLOSE";
        }
        
}
// -------------------------------------------------------
// OPEN_CLOSE_BUTTON
// -------------------------------------------------------
function Dlk_OPEN_CLOSE_BUTTON_Onclick(oSource){
        var oShape,iPV,iValue;
        oShape = oSource.parentNode.parentNode;
        //iPV = spDataValue(oSource,"TAGNAME.PARAM");
	iPV = oShape.Objects("ScConAlpPV").DataValue("TAGNAME.PARAM")

        if (iPV == 1) {
	    oShape.Objects("ScConAlpPV").DataValue("TAGNAME.PARAM")=0;
        }else {
            oShape.Objects("ScConAlpPV").DataValue("TAGNAME.PARAM")=1;
        }
        
}
// -------------------------------------------------------
// alarm2_1.0
// -------------------------------------------------------
function Dlk_alarm210_OnUpdate(oSource){
        var oShape,alarm1,iValue,firstout1,iValue,tag;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.cp_pv");
	firstout1 = spDataValue(oSource,"firstout.cp_pv");
	iValue = oShape.GetCustomProperty("Value", "num");
	tag = Math.round(iValue);
      
        if (firstout1 == tag) {
	    oShape.objects("RecFrame").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("RecFrame").fillColorBlink = true;
        }else if (alarm1 == 0) {
            oShape.objects("RecFrame").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("RecFrame").fillColorBlink = false;
	}else {
            oShape.objects("RecFrame").fillcolor = ("rgb(192,192,192)");
	    oShape.objects("RecFrame").fillColorBlink = false;
        }
        
}
// -------------------------------------------------------
// CMD_DIS
// -------------------------------------------------------
function Dlk_CMD_DIS_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
      
        if (iPV == 1) {
            oShape.objects("textbox003").style.visibility = "VISIBLE";
            oShape.objects("line001").style.visibility = "VISIBLE";
	    oShape.objects("oval001").style.visibility = "VISIBLE";
        }else {
            oShape.objects("textbox003").style.visibility = "HIDDEN";
            oShape.objects("line001").style.visibility = "HIDDEN";
	    oShape.objects("oval001").style.visibility = "HIDDEN";
        }
        
}

// -------------------------------------------------------
// fan_2_states_AMPS
// -------------------------------------------------------
function Dlk_fan_2_states_AMPS_OnUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
        if (iPV == 0) {
            oShape.objects("rect025").styleclass = "OvlBody_Fan_Stop";
	    oShape.objects("line106").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("line105").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc053").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc054").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc055").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc056").styleclass = "OvlBody_Fan_Stop"; 
	}else {
            oShape.objects("rect025").styleclass = "OvlBody_Fan_Run";
	    oShape.objects("line106").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("line105").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc053").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc054").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc055").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc056").styleclass = "OvlBody_Fan_Run"; 
        }
        
}
// -------------------------------------------------------
// flame2
// -------------------------------------------------------
function Dlk_flame2_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
      
        if (iPV == 1) {
            oShape.objects("polyline004").style.visibility = "visible";
        }else {
            oShape.objects("polyline004").style.visibility = "hidden";
        }
        
}
// -------------------------------------------------------
// shutdown1.0
// -------------------------------------------------------
function Dlk_shutdown10_OnUpdate(oSource){
        var oShape,alarm1,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.cp_pv");
	firstout1 = spDataValue(oSource,"firstout.cp_pv")
	iValue = oShape.GetCustomProperty("num", "AlmTrue");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (firstout1 == iValue) {
	    oShape.objects("RecFrame").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("RecFrame").fillColorBlink = true;
        }else if (alarm1 == 0) {
            oShape.objects("RecFrame").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("RecFrame").fillColorBlink = false;
	}else  {
            oShape.objects("RecFrame").fillcolor = ("rgb(192,192,192)");
	    oShape.objects("RecFrame").fillColorBlink = false;
        }
        
}
// -------------------------------------------------------
// Dlk_alarm_circle
// -------------------------------------------------------
function Dlk_alarm_circle_OnUpdate(oSource){
        var oShape,iPV,iPV1,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_Ack");
        iPV1 = spDataValue(oSource,"tagname.cp_UnAck");
        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if ((iPV < 1) && (iPV1 < 1) ) {
            oShape.objects("RecPv").fillcolor = ("rgb(128,128,128)");//index0;
	    oShape.objects("RecPv").fillColorBlink = false;
	}else if (iPV1 > 0) {
	    oShape.objects("RecPv").fillcolor = ("rgb(255,0,0)");//index1;
	    oShape.objects("RecPv").fillColorBlink = true;
        }else if (iPV > 0) {
            oShape.objects("RecPv").fillcolor = ("rgb(255,0,0)");//index1;
	    oShape.objects("RecPv").fillColorBlink = false;
        }
        
}
// -------------------------------------------------------
// AlarmButton.sha
// -------------------------------------------------------
function Dlk_AlarmButton_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	iPV2 = spDataValue(oSource,"Tagname1.cp_pv")
	iValue = oShape.GetCustomProperty("Text", "num");
	iValue1 = parseInt(iValue);
        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");

        if (iPV2 == iValue) {
	    oShape.objects("pushbutton001").fillcolor = ("rgb(255,255,0)");//index0;
	    oShape.objects("pushbutton001").fillColorBlink = true;
        }else if (iPV1 == 0) {
            oShape.objects("pushbutton001").fillcolor = ("rgb(255,255,0)");//index0;
	    oShape.objects("pushbutton001").fillColorBlink = false;
	}else  {
            oShape.objects("pushbutton001").fillcolor = ("rgb(192,192,192)");//index1;
	    oShape.objects("pushbutton001").fillColorBlink = false;
        }
        
}

// -------------------------------------------------------
// ALARMBUTTON_1.0.sha
// -------------------------------------------------------
function Dlk_ALARMBUTTON_10_OnUpdate(oSource){
        var oShape,iPV1,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	
	iValue = oShape.GetCustomProperty("Value", "AlarmState");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (iPV1 == parseInt(iValue)) {
	    oShape.objects("pushbutton001").fillcolor = ("rgb(255,255,0)");//index0;
	}else  {
            oShape.objects("pushbutton001").fillcolor = "#c0c0c0";//index1;
        }
        
}
// -------------------------------------------------------
// bypass_yellow
// -------------------------------------------------------
function Dlk_bypass_yellow_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.TagParam");
      
        if (iPV == 1) {
            oShape.objects("bypStatus").style.visibility = "visible";
        }else {
            oShape.objects("bypStatus").style.visibility = "hidden";
        }
        
}
// -------------------------------------------------------
// fan_2_states
// -------------------------------------------------------
function Dlk_fan_2_states_OnUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.param");
        if (iPV == 0) {
	    oShape.objects("rect025").styleclass = "OvlBody_Fan_Stop";
	    oShape.objects("line106").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("line105").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc053").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc054").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc055").styleclass = "OvlBody_Fan_Stop"; 
	    oShape.objects("arc056").styleclass = "OvlBody_Fan_Stop"; 
	}else if (iPV == 1) {
	    oShape.objects("rect025").styleclass = "OvlBody_Fan_Run";
	    oShape.objects("line106").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("line105").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc053").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc054").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc055").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc056").styleclass = "OvlBody_Fan_Run"; 
	}else {
	    oShape.objects("rect025").styleclass = "OvlBody_Fan_Run";
	    oShape.objects("line106").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("line105").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc053").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc054").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc055").styleclass = "OvlBody_Fan_Run"; 
	    oShape.objects("arc056").styleclass = "OvlBody_Fan_Run"; 
        }
        
}
// -------------------------------------------------------
// Interlock_Diamond.sha
// -------------------------------------------------------
function Dlk_Interlock_Diamond_OnUpdate(oSource){
        var oShape,iPV1,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.Param");	
	Ilock = oShape.GetCustomProperty("Value", "InterlockEnable");

        if (iPV1 == parseInt(Ilock)) {
	    oShape.objects("rect002").style.visibility = "visible";
	    oShape.objects("textbox003").style.visibility = "visible";
	}else  {
            oShape.objects("rect002").style.visibility = "hidden";
	    oShape.objects("textbox003").style.visibility = "hidden";
        }
        
}
// -------------------------------------------------------
// Interlock_Diamond_OR.sha
// -------------------------------------------------------
function Dlk_Interlock_Diamond_OR_OnUpdate(oSource){
        var oShape,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.Param");
		iPV2 = spDataValue(oSource,"Tagname.Param2");
		Ilock = oShape.GetCustomProperty("Value", "InterlockEnable");
		
		
        if (parseInt(iPV2) == Ilock || parseInt(iPV1) == Ilock) {
	    oShape.objects("rect002").style.visibility = "visible";
	    oShape.objects("textbox003").style.visibility = "visible";
		}else  {
        oShape.objects("rect002").style.visibility = "hidden";
	    oShape.objects("textbox003").style.visibility = "hidden";
        }
        
}

// -------------------------------------------------------
// Permissive.sha
// -------------------------------------------------------
function Dlk_Permissive_OnUpdate(oSource){
        var oShape,iPV,Perm;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.Param");
	
	Perm = oShape.GetCustomProperty("Value", "PermOnState");
	
	if (Perm == "1") {
	    Perm = 1;
	}else  {
            Perm = 0;
        }

        if (iPV == Perm)  {
	    oShape.objects("textbox027").innerText = "RUN PERMISSIVE";
	    oShape.objects("textbox027").fillcolor = "#808080";
	}else  {
            oShape.objects("textbox027").innerText = "RESET REQUIRED";
	    oShape.objects("textbox027").fillcolor = ("rgb(255,0,0)");
        }
        
}

// -------------------------------------------------------
// ShutdownButton
// -------------------------------------------------------
function Dlk_ShutdownButton_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.pv");
	iPV2 = spDataValue(oSource,"Tagname1.pv");
	iValue = oShape.GetCustomProperty("Text", "num");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (iPV2 == parseInt(iValue)) {
	    oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = true;
	}else if (iPV1 == 0) {
	    oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = false;
	}else  {
            oShape.objects("pushbutton004").fillcolor = "#c0c0c0";//index1;
	    oShape.objects("pushbutton004").fillColorBlink = false;
        }
        
}
// -------------------------------------------------------
// alarm4.0.sha
// -------------------------------------------------------
function Dlk_alarm40_OnUpdate(oSource){
        var oShape,iPV1,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"alarm.cp_pv");	
	iValue = oShape.GetCustomProperty("Value", "AlarmState");
	index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");

        if (iPV1 == iValue) {
	    oShape.objects("rect001").fillcolor = ("rgb(255,255,0)");//index0;
	}else  {
            oShape.objects("rect001").fillcolor = ("rgb(192,192,192)");//index0;
        }
        
}
// -------------------------------------------------------
// Interlock_Diamond_OR.sha
// -------------------------------------------------------
function Dlk_flames_OnUpdate(oSource){
        var oShape,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname.parameter");	

        if (iPV1 == 1)  {
	    oShape.objects("polygon001").style.visibility = "visible";
	    oShape.objects("polygon003").style.visibility = "visible";
	    oShape.objects("polygon004").style.visibility = "visible";
	    oShape.objects("polygon007").style.visibility = "visible";
	    oShape.objects("polygon008").style.visibility = "visible";
	}else  {
            oShape.objects("polygon001").style.visibility = "hidden";
	    oShape.objects("polygon003").style.visibility = "hidden";
	    oShape.objects("polygon004").style.visibility = "hidden";
	    oShape.objects("polygon007").style.visibility = "hidden";
	    oShape.objects("polygon008").style.visibility = "hidden";
        }
        
}
// -------------------------------------------------------
// alarm_Text
// -------------------------------------------------------
function Dlk_Alarm_Text_OnUpdate(oSource){
        var oShape,iPV,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"TAGNAME.cp_Ack");
        iPV1 = spDataValue(oSource,"TAGNAME.cp_UnAck");
        
        if ((iPV < 1) && (iPV1 < 1) ) {
            oShape.objects("textbox065").style.visibility = "hidden";
	    oShape.objects("textbox065").textColorBlink = false;
	}else if (iPV1 > 0) {
	    oShape.objects("textbox065").style.visibility = "visible";
	    oShape.objects("textbox065").textColorBlink = true;
        }else if (iPV > 0) {
            oShape.objects("textbox065").style.visibility = "visible";
	    oShape.objects("textbox065").textColorBlink = false;
        }
        
}
// -------------------------------------------------------
// BVALVE.sha
// -------------------------------------------------------
function Dlk_BVALVE_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");	
	
        if (iPV == 0) {
	    oShape.objects("PlgOut").fillcolor = ("rgb(255,0,0)");
	    oShape.objects("PlgIn").fillcolor = ("rgb(255,0,0)");
	    oShape.objects("WdgC").fillcolor = ("rgb(255,0,0)");
	    oShape.objects("PlgOut").fillColorBlink = false;
	    oShape.objects("PlgIn").fillColorBlink = false;
	    oShape.objects("WdgC").fillColorBlink = false;    
	}else if (iPV == 1) {
            oShape.objects("PlgOut").fillcolor = ("rgb(128,128,128)");
	    oShape.objects("PlgIn").fillcolor = ("rgb(128,128,128)");
	    oShape.objects("WdgC").fillcolor = ("rgb(128,128,128)");
	    oShape.objects("PlgOut").fillColorBlink = false;
	    oShape.objects("PlgIn").fillColorBlink = false;
	    oShape.objects("WdgC").fillColorBlink = false;
	}else {
	    oShape.objects("PlgOut").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("PlgIn").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("WdgC").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("PlgOut").fillColorBlink = true;
	    oShape.objects("PlgIn").fillColorBlink = true;
	    oShape.objects("WdgC").fillColorBlink = true;
        }
        
}

// -------------------------------------------------------
// bypass_yellow_ARMED.sha
// -------------------------------------------------------
function Dlk_bypass_yellow_ARMED_OnUpdate(oSource){
        var oShape,iPV1,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.TagParam");	
	iValue = oShape.GetCustomProperty("Value", "BypassTrue");
	

        if (iPV1 == iValue) {
	    oShape.objects("bypStatus").fillcolor = ("rgb(255,255,0)");//index0;
	    oShape.objects("bypStatus").innerText = "BYPASSED";
		oShape.objects("bypStatus").fillColorBlink = true;
	}else  {
            oShape.objects("bypStatus").fillcolor = "#c0c0c0";//index0;
	    oShape.objects("bypStatus").innerText = "ARMED";
        }
        
}
// -------------------------------------------------------
// AlarmButton.sha
// -------------------------------------------------------
function Dlk_ShutdownButton_bypass_30_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	iPV2 = spDataValue(oSource,"Tagname1.cp_pv");
	iPV3 = spDataValue(oSource,"bypass_FB.byPV_FB")
	iValue = oShape.GetCustomProperty("Text", "num");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (iPV2 == parseInt(iValue)) {
	    oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = true;
        }else if (iPV1 == 0) {
            oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = false;
	}else  {
            oShape.objects("pushbutton004").fillcolor = ("rgb(192,192,192)");//index1;
	    oShape.objects("pushbutton004").fillColorBlink = false;
        }
	if (iPV3 == 1) {
	    oShape.objects("textbox001").style.visibility = "visible";
	}else  {
            oShape.objects("textbox001").style.visibility = "hidden";
        }
        
}
// -------------------------------------------------------
// ShutdownButton_bypass_NO_Firstout_1.1.sha
// -------------------------------------------------------
function Dlk_ShutdownButton_bypass_NO_Firstout_11_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	iPV2 = spDataValue(oSource,"bypass_FB.byPV_FB");	
	
        if (iPV1 == 0) {
	    oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	}else  {
            oShape.objects("pushbutton004").fillcolor = "#c0c0c0";//index0;
        }
	if (iPV2 == 1) {
	    oShape.objects("textbox001").style.visibility = "visible";
	}else  {
            oShape.objects("textbox001").style.visibility = "hidden";
        }
        
}
function Dlk_ShutdownButton_bypass_NO_Firstout_11_Onclick(oSource)  {
	var oShape, currValue, msgVal, ithisString,itopText,bottomText;
	oShape=oSource.parentNode.parentNode;
	currValue = spDataValue(oSource,"bypass.byPV");
	itopText = oShape.GetCustomProperty("Text","top_text");
	ibottomText = oShape.GetCustomProperty("Text","bottom_text");
	
	if (currValue == 1) {
	    ithisString = "remove bypass from";
	}else  {
            ithisString = "bypass";
        }
	
	
	window.external.showCallout(oSource, "Are you sure you want to " + "\n" + ithisString + itopText + ibottomText + "?", 1, 5);		
}
function Dlk_ShutdownButton_bypass_NO_Firstout_11_onCalloutResponse(oSource)  {
	var oShape,sRes,bypass_reset;
	oShape=oSource.parentNode.parentNode;
	currValue = spDataValue(oSource,"bypass.byPV");
	ibypass_reset = spDataValue(oSource,"bypass_reset.brPV");
	sRes = window.external.calloutresponse;
	
	if ((currValue == "1") && (sRes == "Y")) {
	oShape.Objects("ScConAlpPV").DataValue("bypass_reset.brPV")=1;
	oShape.Objects("ScConAlpPV").DataValue("bypass.byPV")=0;
	}
	if ((currValue == "0") && (sRes == "Y")) {
	oShape.Objects("ScConAlpPV").DataValue("bypass.byPV")=1;
	}

}
// -------------------------------------------------------
// Cannon3.sha
// -------------------------------------------------------
function Dlk_Cannon3_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"WaterValve.cp_op");
	iPV2 = spDataValue(oSource,"DigArray.ZSO");
	iPV3 = spDataValue(oSource,"DigArray.ZSC");
	iPV4 = spDataValue(oSource,"NozzlePattern.NozPosPar");	
	

        if (iPV1 == 1) {
	    oShape.objects("group001").lineColor = ("rgb(0,0,0)");//index0;
	}else  {
            oShape.objects("group001").lineColor = "#808080";//index0;
        }

	if ((iPV2 == 1) && (iPV3 == 0)) {
	    oShape.objects("textbox010").innerText = "OPEN";
	}else if ((iPV2 == 0) && (iPV3 == 1)) {
            oShape.objects("textbox010").innerText = "CLOSED";
	}else if ((iPV2 == 1) && (iPV3 == 1)) {
           oShape.objects("textbox010").innerText = "BAD";
	}else {
           oShape.objects("textbox010").innerText = "MOVING";
        }
	
	if (iPV4 >= 95)  {
	    oShape.objects("wedge1").style.visibility = "visible";
	    oShape.objects("wedge2").style.visibility = "visible";
	    oShape.objects("wedge3").style.visibility = "visible";
	    oShape.objects("wedge4").style.visibility = "visible";
	    oShape.objects("wedge5").style.visibility = "visible";
	} else if (iPV4 >= 75)  {
	    oShape.objects("wedge1").style.visibility = "visible";
	    oShape.objects("wedge2").style.visibility = "visible";
	    oShape.objects("wedge3").style.visibility = "visible";
	    oShape.objects("wedge4").style.visibility = "visible";
	    oShape.objects("wedge5").style.visibility = "hidden";
	} else if (iPV4 >= 50)  {
	    oShape.objects("wedge1").style.visibility = "visible";
	    oShape.objects("wedge2").style.visibility = "visible";
	    oShape.objects("wedge3").style.visibility = "visible";
	    oShape.objects("wedge4").style.visibility = "hidden";
	    oShape.objects("wedge5").style.visibility = "hidden";
	} else if (iPV4 >= 25)  {
	    oShape.objects("wedge1").style.visibility = "visible";
	    oShape.objects("wedge2").style.visibility = "visible";
	    oShape.objects("wedge3").style.visibility = "hidden";
	    oShape.objects("wedge4").style.visibility = "hidden";
	    oShape.objects("wedge5").style.visibility = "hidden";
	} else if (iPV4 >= 15)  {
	    oShape.objects("wedge1").style.visibility = "visible";
	    oShape.objects("wedge2").style.visibility = "hidden";
	    oShape.objects("wedge3").style.visibility = "hidden";
	    oShape.objects("wedge4").style.visibility = "hidden";
	    oShape.objects("wedge5").style.visibility = "hidden";
	}
        
}

// -------------------------------------------------------
// BLOWER_UP_ANIMATED.sha
// -------------------------------------------------------
function Dlk_BLOWER_UP_ANIMATED_OnUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
	index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");

        if (iPV == 1) {
	    oShape.objects("oval003").styleClass = index1;
	    oShape.objects("oval002").styleClass = index1;
	    oShape.objects("rect001").styleClass = index1;
	    oShape.objects("polygon002").styleClass = index1;
	    oShape.objects("roundrect001").styleClass = index1;
	}else  {
            oShape.objects("oval003").styleClass = index0;
	    oShape.objects("oval002").styleClass = index0;
	    oShape.objects("rect001").styleClass = index0;
	    oShape.objects("polygon002").styleClass = index0;
	    oShape.objects("roundrect001").styleClass = index0;
        }
}
// -------------------------------------------------------
// shutdown4.0.sha
// -------------------------------------------------------
function Dlk_shutdown40_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iValue1,iValue2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"firstout.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
	iValue1 = oShape.GetCustomProperty("Value", "num");
	iValue2 = oShape.GetCustomProperty("Value", "ShutdownState");	
	
        if (iPV1 == iValue1) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("textbox001").textColor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textColor = ("rgb(255,255,255)");
	}else if (iPV2 == iValue2)  {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textColor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textColor = ("rgb(255,255,255)");
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textColor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textColor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
// Logical_TextBox.sha
// -------------------------------------------------------
function Dlk_Logical_TextBox_OnUpdate(oSource){
        var oShape,iPV1,iValue1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname.TagParam");
	iValue1 = oShape.GetCustomProperty("Value", "SDTrue");

        if (iPV1 == iValue1) {
	    oShape.objects("textbox021").fillColor = ("rgb(255,0,0)");
	    oShape.objects("textbox021").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox021").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("textbox021").fillColor = "#C0C0C0";
	    oShape.objects("textbox021").lineColor = "#808080";
	    oShape.objects("textbox021").textcolor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
// esp2.sha
// -------------------------------------------------------
function Dlk_esp2_Onclick(oSource)  {
	oShape=oSource.parentNode.parentNode;
	
	window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN???", 1, 5);
		Page.onresponse = function(){Dlk_esp2_onCalloutResponse(oSource)};
}
function Dlk_esp2_onCalloutResponse(oSource)  {
	var oShape,sRes;
	oShape=oSource.parentNode.parentNode;
	sRes = window.external.calloutresponse;

	if  (sRes == "Y") {
	oShape.Objects("ScConAlpPV").DataValue("SDfaceplate.cp_op")=1;
	}

}

function Dlk_esp2_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iValue1;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = Math.round(iPV1);

	iValue1 = oShape.GetCustomProperty("Value", "text1");
	oShape.objects("pushbutton001").innerText = iValue1;
        if (iPV2 ==  -27638) {
	    oShape.objects("pushbutton001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("pushbutton001").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("pushbutton001").textcolor = ("rgb(255,255,255)");
	}else if (iPV2 ==  -1784) {
	    oShape.objects("pushbutton001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("pushbutton001").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("pushbutton001").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("pushbutton001").fillColor = "rgb(175,238,238)"; //"#c0c0c0"
	    oShape.objects("pushbutton001").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("pushbutton001").textcolor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
// esp_sd_line5.sha
// -------------------------------------------------------
function Dlk_esp_sd_line5_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown1.cp_pv");
	istdw2 = spDataValue(oSource,"shutdown2.cp_pv");
	istdw3 = spDataValue(oSource,"shutdown3.cp_pv");
	istdw4 = spDataValue(oSource,"shutdown4.cp_pv");
	istdw5 = spDataValue(oSource,"shutdown5.cp_pv");
	ibyp1 = spDataValue(oSource,"bypass1.cp_op");
	ibyp2 = spDataValue(oSource,"bypass2.cp_op");
	ibyp3 = spDataValue(oSource,"bypass3.cp_op");
	

        if ((istdw4 == 0) || (istdw5 == 0)) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else if (((istdw1 == 0) && (ibyp1 == 0)) || ((istdw2 == 0) && (ibyp2 == 0)) || ((istdw3 == 0) && (ibyp3 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// esp_sd_bps_Vertical_line_2TAGS.sha
// -------------------------------------------------------
function Dlk_esp_sd_bps_Vertical_line_2TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,ibyp1,ibyp2;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown1.cp_pv");
	istdw2 = spDataValue(oSource,"shutdown2.cp_pv");
	ibyp1 = spDataValue(oSource,"bypass1.cp_pv");
	ibyp2 = spDataValue(oSource,"bypass2.cp_pv");
	iValue1 = oShape.GetCustomProperty("Value", "ShutdownValue1");
	iValue2 = oShape.GetCustomProperty("Value", "BypassValue1");
	iValue3 = oShape.GetCustomProperty("Value", "ShutdownValue2");
	iValue4 = oShape.GetCustomProperty("Value", "BypassValue2");

        if (((ibyp1 == iValue2) && (istdw1 == iValue1)) || ((ibyp2 == iValue4) && (istdw2 == iValue3))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// esp_sd_line_1.sha
// -------------------------------------------------------
function Dlk_esp_sd_line_1_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.cp_pv");
	
        if (istdw1 == 1) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// esp_sd_line.sha
// -------------------------------------------------------
function Dlk_esp_sd_line_OnUpdate(oSource){
        var oShape,istdw1;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.cp_pv");
	
        if (istdw1 == 0) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// esp_sd_bps_line_2TAGS.sha
// -------------------------------------------------------
function Dlk_esp_sd_bps_line_2TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown1.cp_pv");
	istdw2 = spDataValue(oSource,"shutdown2.cp_pv");
	ibyp1 = spDataValue(oSource,"bypass1.cp_pv");
	ibyp2 = spDataValue(oSource,"bypass2.cp_pv");

        if (((ibyp1 == 0) && (istdw1 == 0)) || ((ibyp2 == 0) && (istdw2 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}

// -------------------------------------------------------
// esp_sd_bps_line.sha
// -------------------------------------------------------
function Dlk_esp_sd_bps_line_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.cp_pv");
	ibyp1 = spDataValue(oSource,"bypass.cp_pv");

        if ((ibyp1 == 0) && (istdw1 == 0)){
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// esp_sd_1.sha
// -------------------------------------------------------
function Dlk_esp_sd_1_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.cp_pv");
	
        if (istdw1 == 1) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textColor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textColor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("textbox001").textColor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textColor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
// esp_sd.sha
// -------------------------------------------------------
function Dlk_esp_sd_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.cp_pv");
	
        if (istdw1 == 0) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textColor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textColor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("textbox001").textColor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textColor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
// ESP_9632Q Alarm_Square.sha
// -------------------------------------------------------
function Dlk_ESP_RapperAlarm_Square_OnUpdate(oSource){
        var oShape,iTag01,iTag02,iTag03,iTag04,iTag05;
        oShape = oSource.parentNode.parentNode;
        iTag01 = spDataValue(oSource,"Tagname01.Tag01_Param");
	iTag02 = spDataValue(oSource,"Tagname02.Tag02_Param");
	iTag03 = spDataValue(oSource,"Tagname03.Tag03_Param");
	iTag04 = spDataValue(oSource,"Tagname04.Tag04_Param");
	iTag05 = spDataValue(oSource,"Tagname05.Tag05_Param");

        if ((iTag02 >= 1) || (iTag03 == 1) || isNaN(iTag02) || isNaN(iTag03)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else if (iTag01 == 0) {
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
	}else if (iTag01 == 1) {
	    oShape.objects("rect001").fillColor = "#323232";
	    oShape.objects("rect001").fillColorBlink = false;
        }
}
// -------------------------------------------------------
// ESP_RapperAlarm_Square.sha
// -------------------------------------------------------
function Dlk_ESP_RapperAlarm_OnUpdate(oSource){
        var oShape,iTag01,iTag02,iTag03,iTag04,iTag05;
        oShape = oSource.parentNode.parentNode;
        iTag01 = spDataValue(oSource,"Tagname01.Tag01_Param");
	iTag02 = spDataValue(oSource,"Tagname02.Tag02_Param");
	iTag03 = spDataValue(oSource,"Tagname03.Tag03_Param");
	iTag04 = spDataValue(oSource,"Tagname04.Tag04_Param");
	iTag05 = spDataValue(oSource,"Tagname05.Tag05_Param");
	
        if ((iTag02 >= 1) || (iTag03 == 1) || isNaN(iTag02) || isNaN(iTag03)) {
	    oShape.objects("oval022").fillColor = ("rgb(255,255,0)");
	    oShape.objects("oval022").fillColorBlink = false;
	} else if (iTag01 == 0) {
	    oShape.objects("oval022").fillColor = "#c0c0c0";
	    oShape.objects("oval022").fillColorBlink = false;
	} else if (iTag01 == 1) {
	    oShape.objects("oval022").fillColor = "#323232";
	    oShape.objects("oval022").fillColorBlink = false;
        }
}
// -------------------------------------------------------
// esp_bps.sha
// -------------------------------------------------------
function Dlk_esp_bps_OnUpdate(oSource){
        var oShape,iPV1,iSD,iFP,iByp,iValue1;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iSD = Math.round(iPV1);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");
	iByp = spDataValue(oSource,"bypass.cp_pv");

	
        if ((iFP == 0) && (iSD == -1016)) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -1784) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else  {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	
	if ((iByp == 0) && (iSD != -1016)) {
	    oShape.objects("line003").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox003").innerText = "ARMED";
	    oShape.objects("textbox003").fillColor = "#c0c0c0";
	}else if (iByp == 1) {
	    oShape.objects("line003").lineColor = "#c0c0c0";
	    oShape.objects("textbox003").innerText = "BYPASSED";
	    oShape.objects("textbox003").fillColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("line003").lineColor = "#808080";
	    oShape.objects("textbox003").innerText = "ARMED";
	    oShape.objects("textbox003").fillColor = "#c0c0c0";
	}
}

// -------------------------------------------------------
//esp_alm_bps.sha
// -------------------------------------------------------
function Dlk_esp_alm_bps_OnUpdate(oSource){
        var oShape,iPV1,iSD,iFP,iAL,iPV2,iByp;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
	iSD = Math.round(iPV1);
	iAL= Math.round(iPV2);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");
	iByp = spDataValue(oSource,"bypass.cp_pv");
	
        if ((iFP == 0) && (iSD == -1016)) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -1784) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else  {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	
	if ((iByp == 0) && (iSD != -1016)) {
	    oShape.objects("line003").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox003").innerText = "ARMED";
	    oShape.objects("textbox003").fillColor = "#c0c0c0";
	}else if (iByp == 1) {
	    oShape.objects("line003").lineColor = "#c0c0c0";
	    oShape.objects("textbox003").innerText = "BYPASSED";
	    oShape.objects("textbox003").fillColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("line003").lineColor = "#808080";
	    oShape.objects("textbox003").innerText = "ARMED";
	    oShape.objects("textbox003").fillColor = "#c0c0c0";
	}
}
// -------------------------------------------------------
//esp_alm_bps.sha
// -------------------------------------------------------
function Dlk_esp_alm_OnUpdate(oSource){
        var oShape,iPV1,iSD,iFP,iAL,iPV2,iPV3,iA1,iA2,iFP;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm1.cp_pv");
	iPV3 = spDataValue(oSource,"alarm2.cp_pv");
	iSD = Math.round(iPV1);
	iA1= Math.round(iPV2);
	iA2= Math.round(iPV3);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");

	
        if ((iFP == 0) && (iSD == -1016)) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -1784) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else  {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	
	if (iA1 == -19446) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line005").lineColor = ("rgb(255,255,0)");
	}else if (iA1 == 19208) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line005").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = "#808080";
	    oShape.objects("line005").lineColor = "#808080";
	}
	if (iA2 == -19446) {
	    oShape.objects("rect003").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect003").fillColorBlink = true;
	    oShape.objects("line003").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line006").lineColor = ("rgb(255,255,0)");
	}else if (iA2 == 19208) {
	    oShape.objects("rect003").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect003").fillColorBlink = false;
	    oShape.objects("line003").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line006").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("rect003").fillColor = "#c0c0c0";
	    oShape.objects("rect003").fillColorBlink = false;
	    oShape.objects("line003").lineColor = "#808080";
	    oShape.objects("line006").lineColor = "#808080";
	}
	if ((iA1 != -1016) || (iA2 != -1016)) {
	    oShape.objects("line004").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("line004").lineColor = "#808080";
	}
}
// -------------------------------------------------------
//esp_alm_bps.sha
// -------------------------------------------------------
function Dlk_esp_OnUpdate(oSource){
        var oShape,iPV1,iSD,iFP,iValue1;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iSD = Math.round(iPV1);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");
	iValue1 = oShape.GetCustomProperty("Value", "SDtrue");

        if (iSD ==  -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");	 
	}else if ((iSD ==  -1784) || (iFP == iValue1)) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
}
// -------------------------------------------------------
//esp_alm_bps.sha
// -------------------------------------------------------
function Dlk_esp_alm3_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iPV4,iA1,iA2,iA3,iSD,iFP;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm1.cp_pv");
	iPV3 = spDataValue(oSource,"alarm2.cp_pv");
	iPV4 = spDataValue(oSource,"alarm3.cp_pv");
	iSD = Math.round(iPV1);
	iA1 = Math.round(iPV2);
	iA2 = Math.round(iPV3);
	iA3 = Math.round(iPV4);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");
	

        if ((iFP==  0) && (iSD ==  -1016))  {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");	 
	}else if (iSD ==  -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD ==  -1784) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	if (iA1 == -19446)  {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line006").lineColor = ("rgb(255,255,0)");
	}else if (iA1 == 19208) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line006").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = ("rgb(128,128,128)");
	    oShape.objects("line006").lineColor = ("rgb(128,128,128)");
	}
	if (iA2 == -19446)  {
	    oShape.objects("rect003").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect003").fillColorBlink = true;
	    oShape.objects("line003").lineColor = ("rgb(255,255,0)");
	}else if (iA2 == 19208) {
	    oShape.objects("rect003").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect003").fillColorBlink = false;
	    oShape.objects("line003").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("rect003").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect003").fillColorBlink = false;
	    oShape.objects("line003").lineColor = ("rgb(128,128,128)");
	}
	if (iA3 == -19446)  {
	    oShape.objects("rect004").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect004").fillColorBlink = true;
	    oShape.objects("line004").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line007").lineColor = ("rgb(255,255,0)");
	}else if (iA3 == 19208) {
	    oShape.objects("rect004").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect004").fillColorBlink = true;
	    oShape.objects("line004").lineColor = ("rgb(255,255,0)");
	    oShape.objects("line007").lineColor = ("rgb(255,255,0)");
	}else {
	    oShape.objects("rect004").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect004").fillColorBlink = false;
	    oShape.objects("line004").lineColor = ("rgb(128,128,128)");
	    oShape.objects("line007").lineColor = ("rgb(128,128,128)");
	}
	if ((iA1 != -1016) || (iA2  != -1016) || (iA3 != -1016)) {
	   oShape.objects("line005").lineColor = ("rgb(255,255,0)");
	}else {
	   oShape.objects("line005").lineColor = ("rgb(128,128,128)");
	}
	
}
// -------------------------------------------------------
//Alm_SD_NoBypNoFO_FB2355.sha
// -------------------------------------------------------
function Dlk_Alm_SD_NoBypNoFO_FB2355_OnUpdate(oSource){
        var oShape,iPV1,iALFP,iSDFP,iValue1;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"ALMfaceplate.cp_pv");
	iALFP = Math.round(iPV1);
	iSDFP = spDataValue(oSource,"SDfaceplate.cp_pv");

        if (iSDFP ==  0) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");	 
	}else {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	if (iALFP ==  0) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");	 
	}else {
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
//Alm_SD_NoByp_FB2355.sha
// -------------------------------------------------------
function Dlk_Alm_SD_NoByp_FB2355_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iSD,iAL,iFP;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
	iSD = Math.round(iPV1);
	iAL = Math.round(iPV2);
	iFP = spDataValue(oSource,"SDfaceplate.cp_pv");

        if ((iFP == 0) && (iSD == -1016)) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");	 
	}else if (iSD == -27638) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else if (iSD == -1784) {
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
	    oShape.objects("line002").lineColor = "#808080";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
	if (iAL == -27638) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");	 
	}else if (iAL == -1784) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = ("rgb(255,255,0)");	 
	}else{
	    oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// VAPOR_CONDENSER.sha
// -------------------------------------------------------
function Dlk_VAPOR_CONDENSER_OnUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.Param");
	index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");

        if (iPV == 1) {
	    oShape.objects("roundrect001").styleClass = index1;
	    oShape.objects("line003").styleClass = index1;
	    oShape.objects("line002").styleClass = index1;
	    oShape.objects("line106").styleClass = index1;
	    oShape.objects("line105").styleClass = index1;
	    oShape.objects("line001").styleClass = index1;
	    oShape.objects("arc053").styleClass = index1;
	    oShape.objects("arc054").styleClass = index1;
	    oShape.objects("arc055").styleClass = index1;
	    oShape.objects("arc056").styleClass = index1;
	}else  {
            oShape.objects("roundrect001").styleClass = index0;
	    oShape.objects("line003").styleClass = index0;
	    oShape.objects("line002").styleClass = index0;
	    oShape.objects("line106").styleClass = index0;
	    oShape.objects("line105").styleClass = index0;
	    oShape.objects("line001").styleClass = index0;
	    oShape.objects("arc053").styleClass = index0;
	    oShape.objects("arc054").styleClass = index0;
	    oShape.objects("arc055").styleClass = index0;
	    oShape.objects("arc056").styleClass = index0;
        }
}

// -------------------------------------------------------
// shutdownbypass2_1.0.sha
// -------------------------------------------------------
function Dlk_shutdownbypass210_OnUpdate(oSource){
        var oShape,firstout1,firstout1;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.cp_pv");
	firstout1 = spDataValue(oSource,"firstout.cp_pv");
	
        if (firstout1 == -100) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (alarm1 == 0)  {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
	    oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false; 
        }
}
// -------------------------------------------------------
// shutdownbypass1.0.sha
// -------------------------------------------------------
function Dlk_shutdownbypass10_OnUpdate(oSource){
        var oShape,firstout1,alarm1,bypass1;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.cp_pv");
	firstout1 = spDataValue(oSource,"firstout.cp_pv");
	bypass1 = spDataValue(oSource,"bypass.cp_pv");

        if (firstout1 == -27638) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (alarm1 == 0)  {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else if (bypass1 == 1)  {
            oShape.objects("textbox003").style.visibility = "visible";
	    oShape.objects("polyline001").style.visibility = "hidden";
	}else {
	     oShape.objects("polyline001").style.visibility = "visible";
	    oShape.objects("rect001").fillColor = ("rgb(192,192,192)"); 
        }
}

function Dlk_shutdownbypass10_Onclick(oSource)  {
	oShape=oSource.parentNode.parentNode;
	if (window.external.Parent.RuntimeStatus.SecurityType <= 2) { 
	window.external.showCallout(oSource, "You are not authorized to bypass!", 2, 5);
	}
}
// -------------------------------------------------------
// HTRBTU_RECT1_HITP.sha
// -------------------------------------------------------
function Dlk_HTRBTU_RECT1_HITP_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	iPV2 = spDataValue(oSource,"Tagname.PVHITP");
	
        if (iPV1 >= iPV2) {
	    oShape.objects("rect013").fillcolor = ("rgb(255,0,0)");//index0;
	}else  {
            oShape.objects("rect013").fillcolor = "#c0c0c0";//index1;
        }
        
}
// -------------------------------------------------------
// HTRBTU_RECT1_HITP.sha
// -------------------------------------------------------
function Dlk_HTRBTU_RECT1_HH_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_PVHHF");
	iPV2 = spDataValue(oSource,"Tagname.cp_PVHIFL");
	
        if ((iPV1 == 1) && (iPV2 == 1)) {
	    oShape.objects("rect013").fillcolor = ("rgb(255,0,0)");//index0;
	}else if (iPV2 == 1) {
	    oShape.objects("rect013").fillcolor = ("rgb(255,255,0)");//index0;
	}else  {
            oShape.objects("rect013").fillcolor = "#808080";//index1;
        }
        
}
// -------------------------------------------------------
// LPG2.Sha
// -------------------------------------------------------
function Dlk_LPG2_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.cp_pv");

        if (iPV == 1) {
	    oShape.objects("rect007").lineColor = ("rgb(128,128,128)");
		oShape.objects("rect007").fillcolor = ("rgb(192,192,192)");
		
        }else {
            oShape.objects("rect007").lineColor = ("rgb(0,0,0)");
			
			oShape.objects("rect007").fillcolor = ("rgb(128,128,128)");
        }
        
}
// -------------------------------------------------------
// LPG.Sha
// -------------------------------------------------------
function Dlk_LPG_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.cp_pv");

        if (iPV == 0) {
	    oShape.objects("rect007").lineColor = ("rgb(128,128,128)");
		oShape.objects("line006").lineColor = ("rgb(128,128,128)");
		oShape.objects("rect007").fillcolor = ("rgb(192,192,192)");
		
        }else {
            oShape.objects("rect007").lineColor = ("rgb(0,0,0)");
			oShape.objects("line006").lineColor = ("rgb(0,0,0)");
			oShape.objects("rect007").fillcolor = ("rgb(128,128,128)");
        }
        
}
// -------------------------------------------------------
// LSG_2to1_line.Sha
// -------------------------------------------------------
function Dlk_LSG_2to1_line_textbox021_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagnameMID.TagParamMID");

        if (iPV == 1) {
			oShape.objects("textbox021").fillcolor = ("rgb(255,0,0)"); // Red
		 oShape.objects("textbox021").lineColor = ("rgb(255,0,0)");
		 oShape.objects("textbox021").textColor = ("rgb(255,255,255)");// white
        }else {
            oShape.objects("textbox021").fillcolor = ("rgb(192,192,192)");
		 oShape.objects("textbox021").lineColor = ("rgb(128,128,128)");
		 oShape.objects("textbox021").textColor = ("rgb(0,0,0)");// Black
        }
        
}
// -------------------------------------------------------
function Dlk_LSG_2to1_line_Line_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagnameMID.TagParamMID");
		iPV1= spDataValue(oSource,"tagnameBOT.TagParamBOT");
		iPV2= spDataValue(oSource,"tagnameTOP.TagParamTOP");

        if (iPV == 1) {
		 oShape.objects("line1").lineColor = ("rgb(255,0,0)");
		 oShape.objects("line2").lineColor = ("rgb(255,0,0)");
        }else {
        oShape.objects("line1").lineColor = ("rgb(128,128,128)");
		oShape.objects("line2").lineColor = ("rgb(128,128,128)");
        }
		if (iPV2== 0) {
		 oShape.objects("line3").lineColor = ("rgb(255,0,0)");
		 oShape.objects("line5").lineColor = ("rgb(255,0,0)");
        }else {
        oShape.objects("line3").lineColor = ("rgb(128,128,128)");
		oShape.objects("line5").lineColor = ("rgb(128,128,128)");
        }
		if (iPV1== 0) {
		 oShape.objects("line4").lineColor = ("rgb(255,0,0)");
		 oShape.objects("line6").lineColor = ("rgb(255,0,0)");
        }else {
        oShape.objects("line4").lineColor = ("rgb(128,128,128)");
		oShape.objects("line6").lineColor = ("rgb(128,128,128)");
        }
        
}

// -------------------------------------------------------
// LSG_2to1_line_NO_BOTTOM.Sha
// -------------------------------------------------------
function Dlk_LSG_2to1_line_NO_BOTTOM_ondatachange(oSource){
        var oShape,iPV,Ilock,iPV1,iPV3;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagnameMID.TagParamMID");
		 iPV1= spDataValue(oSource,"tagnameTOP.TagParamTOP");
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
iPV3 = Math.round(Ilock);
        if(iPV == iPV3){
			oShape.objects("textbox021").lineColor = ("rgb(255,0,0)");
		  oShape.objects("textbox021").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox021").fillcolor = ("rgb(255,0,0)"); // Red
			
		 oShape.objects("line1").lineColor = ("rgb(255,0,0)");
		  oShape.objects("line2").lineColor = ("rgb(255,0,0)");
		 
        }else {
			oShape.objects("textbox021").lineColor = ("rgb(128,128,128)");
		  oShape.objects("textbox021").textColor =  ("rgb(0,0,0)");// Black
		  oShape.objects("textbox021").fillcolor = ("rgb(192,192,192)");
		  
            oShape.objects("line1").lineColor = ("rgb(128,128,128)");
		  oShape.objects("line2").lineColor = ("rgb(128,128,128)");
        }
		if(iPV1== parseInt(Ilock)){		
		 oShape.objects("line5").lineColor = ("rgb(255,0,0)");		 
        }else {
            oShape.objects("line5").lineColor = ("rgb(128,128,128)");
        }
        
}
// -------------------------------------------------------
// LSG_bps_line.Sha,LSG_bps_line_UP.sha
// -------------------------------------------------------
function Dlk_LSG_bps_line_ondatachange(oSource){
        var oShape,iPV,Ilock,iPV1,iPV3;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.TagParam");
		 
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
		iPV3 = Math.round(Ilock);

        if(iPV == iPV3){
			oShape.objects("line001").lineColor = ("rgb(255,0,0)");
		 
        }else {
			oShape.objects("line001").lineColor = ("rgb(128,128,128)");
		}
        
}
// -------------------------------------------------------
// LSG_bypass_yellow.Sha
// -------------------------------------------------------
function Dlk_LSG_bypass_yellow_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.TagParam");

        if (iPV == 1) {
			oShape.objects("bypStatus").fillcolor = ("rgb(255,255,0)");// Yellow
		 oShape.objects("bypStatus").textColor = ("rgb(0,0,0)");// Black
        }else {
            oShape.objects("bypStatus").fillcolor = ("rgb(192,192,192)");
		 oShape.objects("bypStatus").textColor = ("rgb(192,192,192)");
        }
        
}
// -------------------------------------------------------
// LSG_Delay_line.sha
// -------------------------------------------------------
function Dlk_LSG_Delay_line_ondatachange(oSource){
        var oShape,iPV,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"LogicBlock.DelaySO");
	iPV1= spDataValue(oSource,"LogicBlock.ShutdownSO");
      
        if (iPV1== 1) {
            oShape.objects("line001").lineColor = ("rgb(255,0,0)"); // Red
	    // oShape.objects("textbox010").style.visibility = "HIDDEN";
           // oShape.objects("alpha007").style.visibility = "HIDDEN";
	    // oShape.objects("textbox009").style.visibility = "HIDDEN";
        }else if (iPV ==1) {
            oShape.objects("line001").lineColor = ("rgb(192,192,192)");
	    oShape.objects("textbox010").style.visibility = "INHERIT";
            oShape.objects("alpha007").style.visibility = "INHERIT";
	    oShape.objects("textbox009").style.visibility = "INHERIT";
        }else  {
            oShape.objects("line001").lineColor = ("rgb(128,128,128)");
	    oShape.objects("textbox010").style.visibility = "HIDDEN";
            oShape.objects("alpha007").style.visibility = "HIDDEN";
	    oShape.objects("textbox009").style.visibility = "HIDDEN";
        }
        
}
// -------------------------------------------------------
// LSG_digital_state.sha
// -------------------------------------------------------
function Dlk_LSG_digital_state_ondatachange(oSource){
        var oShape,iPV,Itext,Itext1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.Parameter");
		Itext = oShape.GetCustomProperty("Value", "TrueTextTop");
		Itext1= oShape.GetCustomProperty("Value", "FalseTextTop");
        if (iPV == 1)  {
	    oShape.objects("textboxTOP").innerText = Itext;	    
	}else  {
            oShape.objects("textboxTOP").innerText = Itext1;
	        }        
}
//Dlk_LSG_SD_BYP_1tag -------------------------------------------------------
function Dlk_LSG_SD_BYP_1tag_rectCLICK_onclick(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.bypflag");
		var iKeyLvl=window.external.SecurityLevel;
		if (iPV== 1) {
			window.external.showCallout(oSource, "Are you sure you want to ARM?", 1, 0);
		}else if (iPV== 0) {
			window.external.showCallout(oSource, "Are you sure you want to BYPASS?", 1, 0);
			
		}
}
// -------------------------------------------------------
function Dlk_LSG_SD_BYP_1tag_rectCLICK_OnResponse(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.bypflag");
		var iKeyLvl=window.external.Application.Parent.StationWindows.ACTIVEWINDOW.SECURITYLEVEL;
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
		if (iPV== 1) {
			//oSource.DataValue("tagname.bypflag") = 0;
			oShape.Objects("ScConAlpPV").DataValue("tagname.bypflag")=0;
		}else if (iPV== 0) {
			if (iKeyLvl>2) {
			
			//oSource.DataValue("tagname.bypflag") = 1;
			oShape.Objects("ScConAlpPV").DataValue("tagname.bypflag")=1;
		}
		else {
		window.external.showCallout(oSource, "You need a higher security level in order to BYPASS!",2, 0);	
	}
		}
		}
		
}
// -------------------------------------------------------
// LSG_SD_BYP_1tag.Sha
// -------------------------------------------------------
function Dlk_LSG_SD_BYP_1tag_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock,iPV3;
        oShape = oSource.parentNode.parentNode;
        	iPV = spDataValue(oSource,"tagname.bypflag");
		iPV1= spDataValue(oSource,"tagname.SO");
		iPV2= spDataValue(oSource,"tagname.SO2");
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
		iPV3 = Math.round(Ilock);
        if (iPV1== iPV3) {
		 oShape.objects("line001").lineColor = ("rgb(255,0,0)");
		  oShape.objects("TEXTBOX1").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("TEXTBOX2").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("rect1").fillcolor = ("rgb(255,0,0)"); // Red
        }else {
        oShape.objects("line001").lineColor = ("rgb(128,128,128)");
		  oShape.objects("TEXTBOX1").textColor =  ("rgb(0,0,0)");// Black
		  oShape.objects("TEXTBOX2").textColor =  ("rgb(0,0,0)");// Black
		  oShape.objects("rect1").fillcolor = ("rgb(192,192,192)");
        }
		if (iPV== 1) {
			oShape.objects("textbox001").fillcolor =  ("rgb(255,255,0)");
			oShape.objects("textbox001").innerText = "BYPASSED";
			oShape.objects("line003").lineColor = ("rgb(192,192,192)");
        }else {
			if (iPV2==1) {
			oShape.objects("line003").lineColor = ("rgb(255,0,0)"); // Red
        }
		
		else {
			oShape.objects("line003").lineColor = ("rgb(128,128,128)");
			  }
			oShape.objects("textbox001").fillcolor =  ("rgb(192,192,192)");
			oShape.objects("textbox001").innerText = "ARMED";
		}
		if (iPV2==1) {
			oShape.objects("line002").lineColor = ("rgb(255,0,0)"); // Red
        }else {
			oShape.objects("line002").lineColor = ("rgb(128,128,128)");
			  }        
}
// -------------------------------------------------------
// LSG_SD_NOBYP_1tag.Sha
// -------------------------------------------------------
function Dlk_LSG_SD_NOBYP_1tag_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.TagParam");

        if (iPV == 1) {
		oShape.objects("rect1").fillcolor = ("rgb(255,0,0)"); // Red
		 oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		 oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else {
            oShape.objects("rect1").fillcolor = ("rgb(192,192,192)");
		 oShape.objects("textbox1").textColor = ("rgb(0,0,0)");// Black
		 oShape.objects("textbox2").textColor = ("rgb(0,0,0)");// Black
        }
        
}
// -------------------------------------------------------
// LSG_SD_NOBYP_1tag_REV_LOGIC.Sha
// -------------------------------------------------------
function Dlk_LSG_SD_NOBYP_1tag_REV_LOGIC_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.TagParam");

        if (iPV == 0) {
		oShape.objects("rect1").fillcolor = ("rgb(255,0,0)"); // Red
		 oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		 oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else {
            oShape.objects("rect1").fillcolor = ("rgb(192,192,192)");
		 oShape.objects("textbox1").textColor = ("rgb(0,0,0)");// Black
		 oShape.objects("textbox2").textColor = ("rgb(0,0,0)");// Black
        }
        
}
// -------------------------------------------------------
// LSG_TEXTBOX.Sha
// -------------------------------------------------------
function Dlk_LSG_TEXTBOX_textbox021_ondatachange(oSource){
        var oShape,iPV,Ilock,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.TagParam");
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
		iPV1 = Math.round(Ilock);

        if(iPV == iPV1){
		 oShape.objects("textbox021").fillcolor = ("rgb(255,0,0)"); // Red
		 oShape.objects("textbox021").lineColor = ("rgb(255,0,0)");
		 oShape.objects("textbox021").textColor = ("rgb(255,255,255)");// white
        }else {
            oShape.objects("textbox021").fillcolor = ("rgb(192,192,192)");
		 oShape.objects("textbox021").lineColor = ("rgb(128,128,128)");
		 oShape.objects("textbox021").textColor = ("rgb(0,0,0)");// Black
        }
        
}
// -------------------------------------------------------
// RMPCTLDG_TEXT_RED.Sha
// -------------------------------------------------------
function Dlk_RMPCTLDG_TEXT_RED_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"TagName.cp_pv");
		iPV1= spDataValue(oSource,"TagName.cp_pv1");
		
        if (iPV== 1) {
	
		  oShape.objects("textbox007").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox007").fillcolor = ("rgb(255,0,0)"); // Red
        }else if (iPV1==1) {
        	oShape.objects("textbox007").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox007").fillcolor = ("rgb(255,0,0)"); // Red
        }
		else {
        oShape.objects("textbox007").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox007").fillcolor = ("rgb(192,192,192)");
        }       
}
// -------------------------------------------------------
// safe_sd.Sha
// -------------------------------------------------------
function Dlk_safe_sd_onclick(oSource){
        var oShape,iPV,iPV3,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
	Ilock = oShape.GetCustomProperty("Value", "SDTrue");
	iPV3 = Math.round(Ilock);
		
		if (iPV!=iPV3) {
			window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN?", 1, 0);
		}else  {
			window.external.showCallout(oSource, "Are you sure you want to OPEN?", 1, 0);
		}
}
// -------------------------------------------------------
function Dlk_safe_sd_OnResponse(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
		iPV3 = Math.round(Ilock);
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
		if (iPV!=iPV3) {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=iPV3;
			oShape.Objects("ScConAlpPV").DataValue("tagname2.cp_op")=iPV3;
			oShape.Objects("ScConAlpPV").DataValue("tagname3.cp_op")=iPV3;
		}else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=iPV3;
			oShape.Objects("ScConAlpPV").DataValue("tagname2.cp_op")=iPV3;
			oShape.Objects("ScConAlpPV").DataValue("tagname3.cp_op")=iPV3;
		}
		
		}	
}
// -------------------------------------------------------
function Dlk_safe_sd_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		Ilock = oShape.GetCustomProperty("Value", "SDTrue");
		iPV3 = Math.round(Ilock);
        if (iPV== iPV3) {
		  oShape.objects("pushbutton001").fillcolor = ("rgb(255,0,0)"); // Red
		  oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else  {
         oShape.objects("pushbutton001").fillcolor = ("rgb(128,128,128)");
		  oShape.objects("textbox1").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox2").textColor =("rgb(0,0,0)");
        }
		      
}
// -------------------------------------------------------
// sd_75_resetbutton.Sha
// -------------------------------------------------------
function Dlk_sd_75_resetbutton_onclick(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode;
        iPV = spDataValue(oSource,"SDTAG.cp_op");
		window.external.showCallout(oSource, "Are you sure you want to RESET SHUTDOWN?", 1, 0);
		Page.onresponse = function(){Dlk_sd_75_resetbutton_OnResponse(oSource)};
	}
// -------------------------------------------------------
function Dlk_sd_75_resetbutton_OnResponse(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode;
        iPV = spDataValue(oSource,"SDTAG.cp_op");
		
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
			oShape.Objects("pushbutton008").DataValue("SDTAG.cp_op")=1;
			}		
}
// -------------------------------------------------------
// sd_bps.Sha
// -------------------------------------------------------
function Dlk_sd_bps_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock,Ilock1,iPV3;
        oShape = oSource.parentNode.parentNode;
		Ilock = oShape.GetCustomProperty("Value", "text1");
		Ilock1= oShape.GetCustomProperty("Value", "text2");
		oShape.objects("textbox001").innerText = Ilock;
		oShape.objects("textbox002").innerText = Ilock1;
        	iPV = spDataValue(oSource,"sdtag.cp_pv");
			PV1= spDataValue(oSource,"bypasstag.cp_pv");
		
	if (iPV1 == 0 && iPV == 0) {
			oShape.objects("textbox003").innerText = "ARMED";
			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";
			oShape.objects("line002").lineColor = "rgb(255,0,0)"; // Red
			
	}else if (iPV1 == 1){
 			oShape.objects("textbox003").innerText = "BYPASSED";
			oShape.objects("textbox003").fillColor = "rgb(255,255,0)";// Yellow
			oShape.objects("line002").lineColor = "rgb(128,128,128)"; 
			
	}else {
			oShape.objects("textbox003").innerText = "ARMED";
			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";// Yellow
			oShape.objects("line002").lineColor = "rgb(128,128,128)"; 
			
		}
   	if (iPV == 0) {
		  oShape.objects("line001").lineColor = "rgb(255,0,0)"; // Red
		  oShape.objects("rect001").fillColor = "rgb(255,0,0)"; // Red
		  oShape.objects("textbox001").textColor = "rgb(255,255,255)";
		  oShape.objects("textbox002").textColor = "rgb(255,255,255)"; 
        }else {
		  oShape.objects("line001").lineColor = "rgb(128,128,128)"; // Red
		  oShape.objects("rect001").fillColor = "rgb(192,192,192)";
		  oShape.objects("textbox001").textColor = "rgb(0,0,0)";
		  oShape.objects("textbox002").textColor = "rgb(0,0,0)"; 
        }
	  
        	        	
}
/*----------------------------------------------------------------  */
 /*RegCtl Valves  */
 /*----------------------------------------------------------------  */
function HPM_RegCntlValve_AlpVal1_OnUpdate(oSource)   {
   var rVal,rClosed,oShape;
   try {} catch (e) {}  
    oShape=oSource.parentNode.parentNode;
   rVal=oSource.value;
   rClosed=parseFloat(oShape.GetCustomProperty("Num","ClosedValue"));
   if (rVal>100) {  
      rVal=100;
   } else if (rVal<0) {   
      rVal=0;
   }  
   if (oShape.Objects("TxtOP")  == "Nothing") { 
      oShape.Objects("IndVal").value=rVal;
   } else {  
	   oShape.Objects("TxtOP").innerText=Math.round(rVal) + "%";
   }  
   if (rVal >rClosed) { 
	   index=oShape.GetCustomProperty("Style","cp_styleForOpen");
   } else {  
	   index=oShape.GetCustomProperty("Style","cp_styleForClose");
   }  
   if (typename(oShape.Objects("PlgIn")) != "Nothing") { oShape.Objects("PlgIn").styleClass="PlgIn_" + index;}
   if (typename(oShape.Objects("PlgOut")) != "Nothing") { oShape.Objects("PlgOut").styleClass="PlgOut_" + index;}
   if (typename(oShape.Objects("PlgDown")) != "Nothing") { oShape.Objects("PlgDown").styleClass="PlgOut_" + index;}
   
}
// -------------------------------------------------------
// HPM_fan_3_states_best
// -------------------------------------------------------
function Dlk_HPM_fan_3_states_best_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"TagName.Param");
	
        if (iPV == 0) {
	    oShape.objects("rect025").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("arc054").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("arc053").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("arc056").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("arc055").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("line107").styleClass = "OvlBody_Fan_Stop";
	    oShape.objects("line105").styleClass = "OvlBody_Fan_Stop";
        }else if (iPV == 1) {
            oShape.objects("rect025").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc054").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc053").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc056").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc055").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("line107").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("line105").styleClass = "OvlBody_Fan_Run";
	}else if (iPV == 2) {
            oShape.objects("rect025").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc054").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc053").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc056").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("arc055").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("line107").styleClass = "OvlBody_Fan_Run";
	    oShape.objects("line105").styleClass = "OvlBody_Fan_Run";
	}else if (iPV == 3) {
            oShape.objects("rect025").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("arc054").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("arc053").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("arc056").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("arc055").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("line107").styleClass = "OvlBody_Fan_Bad";
	    oShape.objects("line105").styleClass = "OvlBody_Fan_Bad";
	}else {
            oShape.objects("rect025").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("arc054").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("arc053").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("arc056").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("arc055").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("line107").styleClass = "OvlBody_Fan_Other";
	    oShape.objects("line105").styleClass = "OvlBody_Fan_Other";
        }
        
} 
// -------------------------------------------------------
// sd_bps_line.sha
// -------------------------------------------------------
function Dlk_sd_bps_line_OnUpdate(oSource){
        var oShape,istdw1,istdw2;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag.cp_pv");
	

        if ((istdw2 == 0) && (istdw1 == 0)) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else if (istdw2 == 1) {
	    oShape.objects("line001").lineColor = "#808080";
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}

// -------------------------------------------------------
// sd_bps_line_2SETS_TAGS.sha
// -------------------------------------------------------
function Dlk_sd_bps_line_2SETS_TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag1.cp_pv");
	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");
	istdw4 = spDataValue(oSource,"bypasstag2.cp_pv");
	

        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}

// -------------------------------------------------------
// sd_bps_line_3SETS_TAGS.sha
// -------------------------------------------------------
function Dlk_sd_bps_line_3SETS_TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,istdw5,istdw6;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag1.cp_pv");
	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");
	istdw4 = spDataValue(oSource,"bypasstag2.cp_pv");
	istdw5 = spDataValue(oSource,"sdtag3.cp_pv");
	istdw6 = spDataValue(oSource,"bypasstag3.cp_pv");
	

        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0)) || ((istdw6 == 0 && istdw5 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}

// -------------------------------------------------------
// sd_bps_line_4SETS_TAGS.sha
// -------------------------------------------------------
function Dlk_sd_bps_line_4SETS_TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,istdw5,istdw6,istdw7,istdw8;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag1.cp_op");
	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");
	istdw4 = spDataValue(oSource,"bypasstag2.cp_op");
	istdw5 = spDataValue(oSource,"sdtag3.cp_pv");
	istdw6 = spDataValue(oSource,"bypasstag3.cp_op");
	istdw7 = spDataValue(oSource,"sdtag4.cp_pv");
	istdw8 = spDataValue(oSource,"bypasstag4.cp_op");
	

        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0)) || ((istdw6 == 0 && istdw5 == 0)) || ((istdw8 == 0 && istdw7 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}

// -------------------------------------------------------
// sd_init.sha
// -------------------------------------------------------
function Dlk_sd_init_OnUpdate(oSource){
        var oShape,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"sdtag.cp_pv");
	
        if (iPV1 == 0) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	}else {
	    oShape.objects("rect001").fillColor = "#C0C0C0";
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
        }
}

// -------------------------------------------------------
// yellow_bypass.sha
// -------------------------------------------------------
function Dlk_yellow_bypass_OnUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"Tagname.cp_pv");
        if (iPV == 1) {
            oShape.objects("bypStatus").style.visibility = "visible";
	}else {

            oShape.objects("bypStatus").style.visibility = "hidden";
        }
        
}

// -------------------------------------------------------
// alarm3_1.0.sha
// -------------------------------------------------------
function Dlk_alarm3_1_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"firstout.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");	
	
        if (iPV1 == -1000) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 0)  {
            oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = "#C0C0C0";
        }
}

// -------------------------------------------------------
// ALARMBUTTON_1.1.sha
// -------------------------------------------------------
function Dlk_ALARMBUTTON_10_OnUpdate(oSource){
        var oShape,iPV1,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	
	iValue = oShape.GetCustomProperty("Value", "AlarmState");

        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (iPV1 == parseInt(iValue)) {
	    oShape.objects("pushbutton001").fillcolor = ("rgb(255,255,0)");//index0;
	}else  {
            oShape.objects("pushbutton001").fillcolor = "#c0c0c0";//index1;
        }
        
}

// -------------------------------------------------------
// bypass_armed.sha
// -------------------------------------------------------
function Dlk_bypass_armed_OnUpdate(oSource){
        var oShape,iPV,iPV1,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname1.Param1");
	iPV1 = spDataValue(oSource,"tagname2.Param2");

        if (iPV == 1) {
	    oShape.objects("textbox001").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("textbox001").innerText = "BYPASSED";
	    oShape.objects("line003").style.visibility = "INHERIT";
		if (iPV1 == 1){
			oShape.objects("line003").linecolor = ("rgb(255,0,0)");
			oShape.objects("line001").linecolor = ("rgb(255,0,0)");
		}else {
			oShape.objects("line003").linecolor = "#C0C0C0";
			oShape.objects("line001").linecolor = "#808080";
		}
	}else  {
            oShape.objects("textbox001").fillcolor = "#C0C0C0";
	    oShape.objects("textbox001").innerText = "ARMED";
	    oShape.objects("line003").style.visibility = "HIDDEN";
        }
}

// -------------------------------------------------------
// NSIDEIV_ver2.sha
// -------------------------------------------------------
function Dlk_NSIDEIV_ver2_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.param");
        if ((iPV >= 0) && (iPV < 0.9)) {
		oShape.objects("Left_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Left_Arrow").fillColorBlink = false;
		oShape.objects("Right_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#C0C0C0";
		oShape.objects("ValveTop").fillColorBlink = false;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
	
return;
	}
	if ((iPV >= 0.9) && (iPV < 1.9)) {
		oShape.objects("Left_Arrow").fillColor = "#808080";
		oShape.objects("Left_Arrow").fillColorBlink = false;
		oShape.objects("Right_Arrow").fillColor = "#808080";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#808080";
		oShape.objects("ValveTop").fillColorBlink = false;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
return;
	}
	if ((iPV >= 1.9) && (iPV < 2.9)) {
		oShape.objects("Left_Arrow").fillColor = "#808080";
		oShape.objects("Left_Arrow").fillColorBlink = false;
		oShape.objects("Right_Arrow").fillColor = "#808080";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#C0C0C0";
		oShape.objects("ValveTop").fillColorBlink = false;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
return;
	}
	if ((iPV >= 2.9) && (iPV < 3.9)) {
		oShape.objects("Left_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Left_Arrow").fillColorBlink = false;
		oShape.objects("Right_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#C0C0C0";
		oShape.objects("ValveTop").fillColorBlink = false;
		oShape.objects("BadValue").style.visibility = "VISIBLE";
return;
	}
	if ((iPV >= 3.9) && (iPV < 4.9)) {
		oShape.objects("Left_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Left_Arrow").fillColorBlink = false;
		oShape.objects("Right_Arrow").fillColor = "#808080";
		oShape.objects("Right_Arrow").fillColorBlink = true;
		oShape.objects("ValveTop").fillColor = "#C0C0C0";
		oShape.objects("ValveTop").fillColorBlink = false;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
return;
	}
	if ((iPV >= 4.9) && (iPV < 5.9)) {
		oShape.objects("Left_Arrow").fillColor = "#808080";
		oShape.objects("Left_Arrow").fillColorBlink = true;
		oShape.objects("Right_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#808080";
		oShape.objects("ValveTop").fillColorBlink = true;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
return;
	}
		oShape.objects("Left_Arrow").fillColor = "#808080";
		oShape.objects("Left_Arrow").fillColorBlink = true;
		oShape.objects("Right_Arrow").fillColor = "#C0C0C0";
		oShape.objects("Right_Arrow").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "#808080";
		oShape.objects("ValveTop").fillColorBlink = true;
		oShape.objects("BadValue").style.visibility = "HIDDEN";
	
}

// -------------------------------------------------------
// ShutdownButton_bypass_2.0.sha
// -------------------------------------------------------
function Dlk_ShutdownButton_bypass_20_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.cp_pv");
	iPV2 = spDataValue(oSource,"Tagname1.cp_pv");
	iPV3 = spDataValue(oSource,"bypass_FB.byPV_FB")
	iValue = oShape.GetCustomProperty("Text", "num");
		
	
        if (iPV2 == parseInt(iValue)) {
	    oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = true;
        }else if (iPV1 == 0) {
            oShape.objects("pushbutton004").fillcolor = ("rgb(255,0,0)");//index0;
	    oShape.objects("pushbutton004").fillColorBlink = false;
	}else  {
            oShape.objects("pushbutton004").fillcolor = ("rgb(192,192,192)");//index1;
	    oShape.objects("pushbutton004").fillColorBlink = false;
        }
	if (iPV3 == 1) {
	    oShape.objects("textbox001").style.visibility = "visible";
	}else  {
            oShape.objects("textbox001").style.visibility = "hidden";
        }
        
}

function Dlk_ShutdownButton_bypass_20_Onclick(oSource)  {
	var oShape, currValue, ithisString,itopText,bottomText;
	oShape=oSource.parentNode.parentNode;
	currValue = spDataValue(oSource,"bypass.byPV");
	itopText = oShape.GetCustomProperty("Text","top_text");
	ibottomText = oShape.GetCustomProperty("Text","bottom_text");
	
	if (currValue == 1) {
	    ithisString = "remove bypass from";
	}else  {
            ithisString = "bypass";
        }
	
	
	window.external.showCallout(oSource, "Are you sure you want to " + "\n" + ithisString + itopText + ibottomText + "?", 1, 5);		
}	

function Dlk_ShutdownButton_bypass_20_onCalloutResponse(oSource)  {
	var oShape,sRes,bypass_reset;
	oShape=oSource.parentNode.parentNode;
	currValue = spDataValue(oSource,"bypass.byPV");
	ibypass_reset = spDataValue(oSource,"bypass_reset.brPV");
	sRes = window.external.calloutresponse;

	if ((currValue == "1") && (sRes == "Y")) {
	oShape.Objects("ScConAlpPV").DataValue("bypass_reset.brPV")=1;
	oShape.Objects("ScConAlpPV").DataValue("bypass.byPV")=0;
	}
	if ((currValue == "0") && (sRes == "Y")) {
	oShape.Objects("ScConAlpPV").DataValue("bypass.byPV")=1;
	}
}

// -------------------------------------------------------
// alarm5.0.sha
// -------------------------------------------------------
function Dlk_alarm50_OnUpdate(oSource){
      var oShape,iPV1,iPV2,iValue1,iValue2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Alarm.Param");
	iValue1 = oShape.GetCustomProperty("Value", "FOInt");
	iValue2 = oShape.GetCustomProperty("Value", "ALMInt");	

	 if (iPV1 == iValue1) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV1 == iValue2)  {
            oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;
        }
}

// -------------------------------------------------------
// alarmButton_2.0.sha
// -------------------------------------------------------
function Dlk_alarmButton_20_OnUpdate(oSource){
      var oShape,iPV1,iPV2,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname1.cp_pv1");
	iPV2 = spDataValue(oSource,"tagname2.cp_pv2");
	iValue = oShape.GetCustomProperty("Value", "bitvalue");	

	 if (iPV1 == (iValue)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 0) {
            oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
        }
}

// -------------------------------------------------------
// shutdown5.0.sha
// -------------------------------------------------------
function Dlk_shutdown50_OnUpdate(oSource){
      var oShape,iPV1,iPV2,iValue1,iValue2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"shutdown.param");
	iValue1 = oShape.GetCustomProperty("Value", "FOInt");
	iValue2 = oShape.GetCustomProperty("Value", "SDInt");	

	 if (iPV1 == (iValue1)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");	    
	}else if (iPV1 == (iValue2))  {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");
	}else {
            oShape.objects("rect001").fillColor = "#C0C0C0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox003").textcolor = ("rgb(0,0,0)");
        }
}

// -------------------------------------------------------
// ShutdownButton_2.0.sha
// -------------------------------------------------------
function Dlk_ShutdownButton_20_OnUpdate(oSource){
      var oShape,iPV1,iPV2,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname1.cp_pv1");
	iPV2 = spDataValue(oSource,"tagname2.cp_pv2");
	iValue = oShape.GetCustomProperty("Value", "bitvalue");	

	 if (iPV1 == (iValue)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 0) {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;	
        }
}

// -------------------------------------------------------
// TRIMITE_BUTTON.sha
// -------------------------------------------------------
function Dlk_TRIMITE_BUTTON_OnUpdate(oSource){
        var oShape,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname.parameter");

        if (iPV1 == 0) {
	    oShape.objects("pushbutton001").fillcolor = "#C0C0C0";
	}else  {
            oShape.objects("pushbutton001").fillcolor = "#808080";
        }
        
}

function Dlk_TRIMITE_BUTTON_Onclick(oSource)  {
	var oShape;
	oShape=oSource.parentNode.parentNode;
	
	window.external.showCallout(oSource, "Are You Sure You Want to Execute This?", 1, 5);		
}	

function Dlk_TRIMITE_BUTTON_onCalloutResponse(oSource)  {
	var oShape,sRes,currValue;
	oShape=oSource.parentNode.parentNode;
	currValue = spDataValue(oSource,"tagname.parameter");
	sRes = window.external.calloutresponse;

	if (sRes == "Y") {
	
		if (currValue > 0) {
			oShape.Objects("ScConAlpPV").DataValue("tagname.parameter")=0;
		} else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.parameter")=1;
		}
	}
}

// -------------------------------------------------------
// turbine_on_off.sha
// -------------------------------------------------------
function Dlk_turbine_on_off_OnUpdate(oSource){
        var oShape,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname.Param");

        if (iPV1 == 1) {
	    oShape.objects("offText").textcolor = ("RGB(128,128,128)");
	    oShape.objects("onText").textcolor = "#000000";
	}else if (iPV1 == 0) {
            oShape.objects("offText").textcolor = "#000000";
	    oShape.objects("onText").textcolor = ("RGB(128,128,128)");
        }
        
}

// -------------------------------------------------------
// SaltStop.sha
// -------------------------------------------------------
function Dlk_SaltStop_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"InputTag.cp_pv");
	iPV2 = spDataValue(oSource,"OutputTag.cp_op");
	iPV3 = spDataValue(oSource,"OutputTag.cp_mode");

        if ((iPV1 == 1) && (iPV2 == 0)) {
	    oShape.objects("alpha001").fillColorBlink = true;
	    oShape.objects("alpha001").lineColorBlink = true;
	    oShape.objects("alpha001").textColorBlink = true;
	}else  {
            oShape.objects("alpha001").fillColorBlink = false;
	    oShape.objects("alpha001").lineColorBlink = false;
	    oShape.objects("alpha001").textColorBlink = false;
        }
        
}

function Dlk_SaltStop_Onclick(oSource)  {
	var oShape;
	oShape=oSource.parentNode.parentNode;
	
	window.external.showCallout(oSource, "Are you sure you want to STOP PUMP?", 1, 5);		
}	

function Dlk_SaltStop_onCalloutResponse(oSource)  {
	var oShape,sRes,iPV1,iPV2;
	oShape=oSource.parentNode.parentNode;
	iPV1=spDataValue(oSource,"OutputTag.cp_op");
	iPV2=spDataValue(oSource,"OutputTag.cp_mode");
	sRes=window.external.calloutresponse;

	if (sRes == "Y") {
		oShape.Objects("ScConAlpPV").DataValue("OutputTag.cp_mode")=1;
		oShape.Objects("ScConAlpPV").DataValue("OutputTag.cp_op")=0;
	}
}

// -------------------------------------------------------
// VFD_Pump.sha
// -------------------------------------------------------
function Dlk_VFD_Pump_OnUpdate(oSource){
      var oShape,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.Param");	

	 if (iPV1 == 0) {
	    oShape.objects("oval001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("oval002").fillColor = ("rgb(192,192,192)");
	    oShape.objects("oval004").fillColor = ("rgb(192,192,192)");
	    oShape.objects("roundrect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect002").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect003").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect004").fillColor = ("rgb(192,192,192)");
	    	    
	}else if (iPV1 == 1)  {
            oShape.objects("oval001").fillColor = ("rgb(128,128,128)");
	    oShape.objects("oval002").fillColor = ("rgb(128,128,128)");
	    oShape.objects("oval004").fillColor = ("rgb(128,128,128)");
	    oShape.objects("roundrect001").fillColor = ("rgb(128,128,128)");
	    oShape.objects("rect001").fillColor = ("rgb(128,128,128)");
	    oShape.objects("rect002").fillColor = ("rgb(128,128,128)");
	    oShape.objects("rect003").fillColor = ("rgb(128,128,128)");
	    oShape.objects("rect004").fillColor = ("rgb(128,128,128)");
        }
}

// -------------------------------------------------------
// delta.sha
// -------------------------------------------------------
function Dlk_delta_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"Tagname.Param");
	iPV2 = spDataValue(oSource,"Tagname.Param1");
	iPV3 = Math.round(iPV2);


	if(  isNaN(iPV1) ||   isNaN(iPV2)){
      	oShape.objects("textbox046").value = "NaN";
	}else{
		oShape.objects("textbox046").value = Math.round(iPV3-iPV1);
		
	}
}

// -------------------------------------------------------
//shutdown3_1.0.sha
// -------------------------------------------------------
function Dlk_shutdown310_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iValue1,iPV4;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = Math.round(iPV1);
	iValue = oShape.GetCustomProperty("Value", "num");	
	iPV3 = spDataValue(oSource,"firstout.cp_pv"); 
	iPV4 = Math.round(iValue);

        if ((Math.round(iPV3)) == (Math.round(iValue))) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");	 
	}else if (iPV1 == 0) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");	 
	}else {
	    oShape.objects("rect001").fillColor = "#C0C0C0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox003").textcolor = ("rgb(0,0,0)");
        }
}

// -------------------------------------------------------
// MAINDA_Pump_SELXINP.sha
// -------------------------------------------------------
function Dlk_MAINDA_Pump_SELXINP_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"ColorTag.ColorParam");
	iPV2 = spDataValue(oSource,"Tagname.Param");	
	

        if (iPV1 > 2) {
		oShape.objects("oval001").fillcolor = "#808080";
		oShape.objects("polygon002").fillcolor = "#808080";
		oShape.objects("rect002").fillcolor = "#808080";
	}else  {
            	oShape.objects("oval001").fillcolor = "#C0C0C0";
		oShape.objects("polygon002").fillcolor = "#C0C0C0";
		oShape.objects("rect002").fillcolor = "#C0C0C0";
        }
        
}
function Dlk_MAINDA_Pump_SELXINP_Onclick(oSource)  {
	var oShape;
	oShape=oSource.parentNode.parentNode;
	
	window.external.showCallout(oSource, "Are you sure you want to SWITCH?", 1, 5);		
}
function Dlk_MAINDA_Pump_SELXINP_onCalloutResponse(oSource)  {
	var oShape,sRes,iPV2;
	oShape=oSource.parentNode.parentNode;
	//iPV2 = spDataValue(oSource,"Tagname.Param");
	iPV2 = oShape.Objects("ScConAlpPV").DataValue("Tagname.Param")
	sRes = window.external.calloutresponse;

	if ((sRes == "Y") && (iPV2 == 1)) {
	oShape.Objects("ScConAlpPV").DataValue("Tagname.Param") = 2;
	}
	if ((sRes == "Y") && (iPV2 == 2)) {
	oShape.Objects("ScConAlpPV").DataValue("Tagname.Param") = 1;
	}

}

// -------------------------------------------------------
// usd75_stepbut.sha
// -------------------------------------------------------
function Dlk_usd75_stepbut_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iValue,iValue1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"Tagname.NN(78)");
	iPV2 = spDataValue(oSource,"Tagname.FL(122)");
	iValue = oShape.GetCustomProperty("Value", "StepNum");
	iValue1 = Math.round(iValue1);
	
        if (iPV1 == iValue) {
	    oShape.objects("rect001").fillColor = "#808080";
	    oShape.objects("alpha001").lineColor = ("rgb(0,0,0)");
	    oShape.objects("rect001").lineColor = ("rgb(0,0,0)");
	}else  {
            oShape.objects("rect001").fillColor = "#C0C0C0";
	    oShape.objects("alpha001").lineColor = "#808080";
	    oShape.objects("rect001").lineColor = "#808080";
        }

	if (iPV1 > iValue) {
    	    oShape.objects("textbox001").textcolor = "#808080";
	}else {
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");  
	}  
}

function Dlk_usd75_stepbut_Onclick(oSource)  {
	var oShape;
	oShape=oSource.parentNode.parentNode;

	window.external.showCallout(oSource, "Are you sure you want to select this STEP?", 1, 5);		
}	

function Dlk_usd75_stepbut_onCalloutResponse(oSource)  {
	var oShape,sRes,iValue,iValue1;
	oShape=oSource.parentNode.parentNode;	
	sRes=window.external.calloutresponse;
	iValue = oShape.GetCustomProperty("Value", "StepNum");
	iValue1 = Math.round(iValue1);

	if (sRes == "Y") {
		oShape.Objects("ScConAlpPV").DataValue("Tagname.NN(78)") = iValue;
		oShape.Objects("ScConAlpPV").DataValue("Tagname.FL(122)")  = 1;
	}
}

// -------------------------------------------------------
// Trimite_Pump_SELXINP.sha
// -------------------------------------------------------
function Dlk_Trimite_Pump_SELXINP_OnUpdate(oSource){
        var oShape,iPV1;
          oShape = oSource.parentNode.parentNode;
	  iPV1 = spDataValue(oSource,"Tagname.Param");

        if (iPV1 == 1) {
	    oShape.objects("oval001").fillcolor = "#808080";
	    oShape.objects("polygon002").fillcolor = "#808080";
	    oShape.objects("rect002").fillcolor = "#808080";
	}else  {
            oShape.objects("oval001").fillcolor = "#C0C0C0";
	    oShape.objects("polygon002").fillcolor = "#C0C0C0";
	    oShape.objects("rect002").fillcolor = "#C0C0C0";
        }

}

 

function Dlk_Trimite_Pump_SELXINP_Onclick(oSource)  {
	var oShape,iPV1;
	oShape = oSource.parentNode.parentNode;
	iPV1 = spDataValue(oSource,"Tagname.Param");

	window.external.showCallout(oSource, "Are you sure you want to SWITCH?", 1, 5);		
}	

 

function Dlk_Trimite_Pump_SELXINP_onCalloutResponse(oSource)  {
	var oShape,sRes,iPV1;
	// oShape=oSource.parentNode.parentNode;
	oShape = oSource.parentNode;
	// iPV1 = spDataValue(oSource,"Tagname.Param");
	iPV1 = oShape.Objects("ScConAlpPV").DataValue("Tagname.Param");
	sRes = window.external.calloutresponse;

	if ((sRes == "Y") && (iPV1 == 1)) {
		oShape.Objects("ScConAlpPV").DataValue("Tagname.Param") = 2;
	} else if ((sRes == "Y") && (iPV1 == 2)) {
		oShape.Objects("ScConAlpPV").DataValue("Tagname.Param") = 1;
		}	
}

// NSIDEIV.sha
// -------------------------------------------------------
function Dlk_NSIDEIV_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
	
        if (iPV == 0)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 1)  {
		oShape.objects("polygon002").fillColor = ("rgb(128,128,128)");
		oShape.objects("rect001").fillColor = ("rgb(128,128,128)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 2)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 3)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV == 4)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV == 5)  {
		oShape.objects("polygon002").fillColor = ("rgb(0,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(0,255,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else  {
		oShape.objects("polygon002").fillColor = ("rgb(0,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(0,0,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	}
}

// -------------------------------------------------------
// esp_sd_line_2.sha
// -------------------------------------------------------
function Dlk_esp_sd_line_2_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,ibyp1,ibyp2,ibyp3;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"shutdown.pv");
        if (istdw1 == 0) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}


function DELEK_HPM_OnOffValves_PVFL_AlpPV_OnUpdate(oSource)
{ 

   	var oShape,iPV,iPV1,CStyle,OStyle,IStyle;
	oShape=oSource.parentNode.parentNode;

	iPV = oSource.datavalue("tagname.cp_pv");
	iPV1 = oSource.datavalue("tagname.cp_pv1");

	CStyle = oShape.GetCustomProperty("Style","cp_StyleForPV0");
	OStyle = oShape.GetCustomProperty("Style","cp_StyleForPV1");
	IStyle = oShape.GetCustomProperty("Style","cp_StyleForPV3");

	
	if((oSource.QualityGood("tagname.cp_pv")) && !(oSource.QualityConfigError("tagname.cp_pv")))
	{

			if (iPV == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
			}
			else if (iPV1 == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+OStyle;
			}		
			else
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+IStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+IStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+IStyle;
			}


	}

}
 
// -------------------------------------------------------
// safe_sd_1_tag.sha
// -------------------------------------------------------
function Dlk_safe_sd_1_tag_onclick(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		
		if (iPV==0) {
				window.external.showCallout(oSource, "Are you sure you want to OPEN?", 1, 0);
		}else  {
				window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN?", 1, 0);
		}
}
// -------------------------------------------------------
function Dlk_safe_sd_1_tag_OnResponse(oSource){
        var oShape,iPV
        oShape = oSource.parentNode.parentNode;	
		iPV = spDataValue(oSource,"tagname.cp_op");
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
			
		if (iPV==0) {
			
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=1;

		}else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=0;
		}
		
		}	
}
// -------------------------------------------------------
function Dlk_safe_sd_1_tag_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
        if (iPV==0) {
		  oShape.objects("pushbutton001").fillcolor = ("rgb(255,0,0)"); // Red
		  oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else  {
         oShape.objects("pushbutton001").fillcolor = ("rgb(128,128,128)");
		  oShape.objects("textbox1").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox2").textColor =("rgb(0,0,0)");
        }
		      
}


// -------------------------------------------------------
// safe_sd_2_tag.sha
// -------------------------------------------------------
function Dlk_safe_sd_2_tag_onclick(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		iPV1 = spDataValue(oSource,"tagname1.cp_op");
		if (iPV1==0) {
				window.external.showCallout(oSource, "Are you sure you want to OPEN?", 1, 0);
		}else  {
				window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN?", 1, 0);
		}
}
// -------------------------------------------------------
function Dlk_safe_sd_2_tag_OnResponse(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock;
        oShape = oSource.parentNode.parentNode;	
		iPV = spDataValue(oSource,"tagname.cp_op");
		iPV1 = spDataValue(oSource,"tagname1.cp_op");
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
			
		if (iPV1==0) {
			
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=1;
			oShape.Objects("ScConAlpPV").DataValue("tagname1.cp_op")=1;

		}else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=0;
			oShape.Objects("ScConAlpPV").DataValue("tagname1.cp_op")=0;
		}
		
		}	
}
// -------------------------------------------------------
function Dlk_safe_sd_2_tag_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		iPV1 = spDataValue(oSource,"tagname1.cp_op");
        if ((iPV==0) || (iPV1==0)) {
		  oShape.objects("pushbutton001").fillcolor = ("rgb(255,0,0)"); // Red
		  oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else  {
         oShape.objects("pushbutton001").fillcolor = ("rgb(128,128,128)");
		  oShape.objects("textbox1").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox2").textColor =("rgb(0,0,0)");
        }
		      
}

// -------------------------------------------------------
// safe_sd_4_tag.sha
// -------------------------------------------------------
function Dlk_safe_sd_4_tag_onclick(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		if (iPV==0) {
				window.external.showCallout(oSource, "Are you sure you want to OPEN?", 1, 0);
		}else  {
				window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN?", 1, 0);
		}
}
// -------------------------------------------------------
function Dlk_safe_sd_4_tag_OnResponse(oSource){
        var oShape,iPV,iPV1,iPV2,iPV3;
        oShape = oSource.parentNode.parentNode;	
		iPV = spDataValue(oSource,"tagname.cp_op");
		iPV1 = spDataValue(oSource,"tagname1.cp_op");
		iPV2 = spDataValue(oSource,"tagname2.cp_op");
		iPV3 = spDataValue(oSource,"tagname3.cp_op");
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
			
		if (iPV1==0) {
			
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=1;
			oShape.Objects("ScConAlpPV").DataValue("tagname1.cp_op")=1;
			oShape.Objects("ScConAlpPV").DataValue("tagname2.cp_op")=1;
			oShape.Objects("ScConAlpPV").DataValue("tagname3.cp_op")=1;

		}else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=0;
			oShape.Objects("ScConAlpPV").DataValue("tagname1.cp_op")=0;
			oShape.Objects("ScConAlpPV").DataValue("tagname2.cp_op")=0;
			oShape.Objects("ScConAlpPV").DataValue("tagname3.cp_op")=0;
		}
		
		}	
}
// -------------------------------------------------------
function Dlk_safe_sd_4_tag_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
        if (iPV==0) {
		  oShape.objects("pushbutton001").fillcolor = ("rgb(255,0,0)"); // Red
		  oShape.objects("textbox1").textColor = ("rgb(255,255,255)");// white
		  oShape.objects("textbox2").textColor = ("rgb(255,255,255)");// white
        }else  {
         oShape.objects("pushbutton001").fillcolor = ("rgb(128,128,128)");
		  oShape.objects("textbox1").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox2").textColor =("rgb(0,0,0)");
        }
		      
}
// -------------------------------------------------------
// DELEK_HPM_2tagOnOffValve_isa_h_pai_01.sha,DELEK_HPM_2tagOnOffValve_isa_v_pai_02.sha
// -------------------------------------------------------
function DELEK_HPM_2tagOnOffValves_PVFL_AlpPV_OnUpdate(oSource)
{ 

   	var oShape,iPV,iPV1,CStyle,OStyle,IStyle;
	oShape=oSource.parentNode.parentNode;

	iPV = oSource.datavalue("tagname.cp_pv"); //AMPERSANDMALF
	iPV1 = oSource.datavalue("tagname1.cp_pv"); //AMPERSANDSTATUS

	CStyle = oShape.GetCustomProperty("Style","cp_StyleForPV0");//Close
	OStyle = oShape.GetCustomProperty("Style","cp_StyleForPV1"); //Open
	//BStyle = oShape.GetCustomProperty("Style","cp_StyleForPV1"); //Bad
	IStyle = oShape.GetCustomProperty("Style","cp_StyleForPV3"); //InBet
	OtherStyle = oShape.GetCustomProperty("Style","cp_StyleForPV4"); //Other

	
	if((oSource.QualityGood("tagname.cp_pv")) && !(oSource.QualityConfigError("tagname.cp_pv")))
	{

			if (iPV == "ALARM")
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OtherStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OtherStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+OtherStyle;
			}
			else if (iPV1 == "CLOSED")
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
			}
			else if (iPV1 == "OPENED")
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+OStyle;
			}
			else
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+IStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+IStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+IStyle;
			}

	}

}
// NSIDEIV.sha
// -------------------------------------------------------
function Dlk_NSIDEIV_01_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
	
        if (iPV == 0)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 1)  {
		oShape.objects("polygon002").fillColor = ("rgb(0,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(0,255,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 2)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV == 3)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV == 4)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV == 5)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else  {
		oShape.objects("polygon002").fillColor = ("rgb(0,255,255)");
		oShape.objects("rect001").fillColor = ("rgb(0,255,255)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	}
}
// -------------------------------------------------------
// safe_sd_1_tag.sha
// -------------------------------------------------------
function Dlk_safe_sd_1_tag_onclick(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
		
		if (iPV==0) {
				window.external.showCallout(oSource, "Are you sure you want to OPEN?", 1, 0);
		}else  {
				window.external.showCallout(oSource, "Are you sure you want to SHUTDOWN?", 1, 0);
		}
}
// -------------------------------------------------------
function Dlk_safe_sd_1_tag_OnResponse(oSource){
        var oShape,iPV
        oShape = oSource.parentNode.parentNode;	
		iPV = spDataValue(oSource,"tagname.cp_op");
		var sResp;
		sResp = window.external.calloutresponse;
		if (sResp == "Y"){
			
		if (iPV==0) {
			
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=1;

		}else {
			oShape.Objects("ScConAlpPV").DataValue("tagname.cp_op")=0;
		}
		
		}	
}
// -------------------------------------------------------
function Dlk_safe_sd_1_1_tag_ondatachange(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_op");
        if (iPV==0) {
		  oShape.objects("pushbutton001").fillcolor = ("rgb(128,128,128)"); // Red
		  oShape.objects("textbox1").textColor = ("rgb(0,0,0)");
		  oShape.objects("textbox2").textColor = ("rgb(0,0,0)");
        }else  {
         oShape.objects("pushbutton001").fillcolor = ("rgb(255,0,0)");
		  oShape.objects("textbox1").textColor = ("rgb(255,255,255)");//white
		  oShape.objects("textbox2").textColor =("rgb(255,255,255)");
        }
		      
}

function Dlk_NSIDEIV_03_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname.cp_pv");
	
        if (iPV <= 0.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV <= 1.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(0,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(0,255,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV <= 2.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	} else if (iPV <= 3.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV <= 4.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,0,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else if (iPV <= 5.1)  {
		oShape.objects("polygon002").fillColor = ("rgb(255,255,0)");
		oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("polygon002").fillColorBlink = true;
		oShape.objects("rect001").fillColorBlink = true;
	} else  {
		oShape.objects("polygon002").fillColor = ("rgb(0,255,255)");
		oShape.objects("rect001").fillColor = ("rgb(0,255,255)");
		oShape.objects("polygon002").fillColorBlink = false;
		oShape.objects("rect001").fillColorBlink = false;
	}
}

function Dlk_NSIDEIV_ver3_OnUpdate(oSource){
        var oShape,iPV;
        oShape = oSource.parentNode.parentNode;
		oShape.objects("BText").style.visibility = "hidden";
        iPV = parseInt(spDataValue(oSource,"tagname.cp_pv"));
        if (iPV <= 0.1){
		
		oShape.objects("Poly").fillColor = "rgb(192,192,192)";
		oShape.objects("Poly").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "rgb(192,192,192)";
		oShape.objects("ValveTop").fillColorBlink = false;
	}else if ((iPV > 0.1) && (iPV <= 1.1)) {
		oShape.objects("Poly").fillColor = "rgb(128,128,128)";
		oShape.objects("Poly").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "rgb(128,128,128)";
		oShape.objects("ValveTop").fillColorBlink = false;
	}else if ((iPV > 1.1) && (iPV <= 2.1)) {
		oShape.objects("Poly").fillColor = "rgb(255,255,255)";
		oShape.objects("Poly").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "rgb(255,255,255)";
		oShape.objects("ValveTop").fillColorBlink = false;
	}else if ((iPV > 2.1) && (iPV <= 3.1)) {
		oShape.objects("Poly").fillColor = "rgb(192,192,192)";
		oShape.objects("Poly").fillColorBlink = false;
		oShape.objects("ValveTop").fillColor = "rgb(192,192,192)";
		oShape.objects("ValveTop").fillColorBlink = false;
	}else if ((iPV > 3.1) && (iPV <= 4.1)) {
		oShape.objects("Poly").fillColor = "rgb(192,192,192)";
		//oShape.objects("Poly").fillColorBlink = true;
		oShape.objects("ValveTop").fillColor = "rgb(192,192,192)";
		//oShape.objects("ValveTop").fillColorBlink = false;
	}else if ((iPV > 4.1) && (iPV <= 5.1)) {
		oShape.objects("Poly").fillColor = "rgb(255,255,255)";
		//oShape.objects("Poly").fillColorBlink = true;
		oShape.objects("ValveTop").fillColor = "rgb(255,255,255)";
		//oShape.objects("ValveTop").fillColorBlink = true;
	}else{
		oShape.objects("Poly").fillColor = "rgb(255,255,255)";
		//oShape.objects("Poly").fillColorBlink = true;
		oShape.objects("ValveTop").fillColor = "rgb(255,255,255)";
		//oShape.objects("ValveTop").fillColorBlink = true;
		oShape.objects("BText").style.visibility = "visible";
	}
}
// -------------------------------------------------------
// shutdown1.0
// -------------------------------------------------------
function Delek_shutdown10_OnUpdate(oSource){
        var oShape,alarm1,iValue,index0,index1;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.cp_pv");
	firstout1 = spDataValue(oSource,"firstout.cp_pv")
	iValue = oShape.GetCustomProperty("Value", "num");
 
        index0 = oShape.GetCustomProperty("Style", "cp_StyleForPV0");
        index1 = oShape.GetCustomProperty("Style", "cp_StyleForPV1");
        if (firstout1  == iValue) {
	    oShape.objects("RecFrame").fillcolor = ("rgb(255,0,0)");
	    oShape.objects("RecFrame").fillColorBlink = true;
        }else if (alarm1 == 0) {
        oShape.objects("RecFrame").fillcolor = ("rgb(255,0,0)");
	    oShape.objects("RecFrame").fillColorBlink = false;
	}else  {
            oShape.objects("RecFrame").fillcolor = ("rgb(192,192,192)");
	    oShape.objects("RecFrame").fillColorBlink = false;
        }       
}
 
// -------------------------------------------------------
// ShutdownButton_2.0.sha
// -------------------------------------------------------
function Delek_ShutdownButton_20_OnUpdate(oSource){
      var oShape,iPV1,iPV2,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname1.cp_pv1");
	iPV2 = spDataValue(oSource,"tagname2.cp_pv2");
	iValue = oShape.GetCustomProperty("Value", "bitvalue");	
 
	 if (iPV1 == (iValue)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 0) {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;	
        }
}
 
// -------------------------------------------------------

// -------------------------------------------------------

// sd_bps.Sha

// -------------------------------------------------------

function Delek_sd_bps_ondatachange(oSource){

        var oShape,iPV,iPV1,iPV2,Ilock,Ilock1,iPV3;

        oShape = oSource.parentNode.parentNode;

		Ilock = oShape.GetCustomProperty("Value", "text1");

		Ilock1= oShape.GetCustomProperty("Value", "text2");

		oShape.objects("textbox001").innerText = Ilock;

		oShape.objects("textbox002").innerText = Ilock1;
 
        	iPV = spDataValue(oSource,"sdtag.cp_pv");

		iPV1= spDataValue(oSource,"bypasstag.cp_op");

	if (iPV1 == 0 && iPV == 0) {

			oShape.objects("textbox003").innerText = "ARMED";

			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";

			oShape.objects("line002").lineColor = "rgb(255,0,0)"; // Red

	}else if (iPV1 == 1){

			oShape.objects("textbox003").innerText = "BYPASSED";

			oShape.objects("textbox003").fillColor = "rgb(255,255,0)";// Yellow

			oShape.objects("line002").lineColor = "rgb(192,192,192)"; 

	}else {

			oShape.objects("textbox003").innerText = "ARMED";

			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";// Yellow

			oShape.objects("line002").lineColor = "rgb(128,128,128)"; 

	}
 
   	if (iPV == 0) {

		  oShape.objects("line001").lineColor = "rgb(255,0,0)"; // Red

		  oShape.objects("rect001").fillColor = "rgb(255,0,0)"; // Red

		  oShape.objects("textbox001").textColor = "rgb(255,255,255)";

		  oShape.objects("textbox002").textColor = "rgb(255,255,255)"; 

        }else {

		  oShape.objects("line001").lineColor = "rgb(128,128,128)"; // Red

		  oShape.objects("rect001").fillColor = "rgb(192,192,192)";

		  oShape.objects("textbox001").textColor = "rgb(0,0,0)";

		  oShape.objects("textbox002").textColor = "rgb(0,0,0)"; 

        }     	        	

}
 
// -------------------------------------------------------

// sd_bps_line.sha

// -------------------------------------------------------

function Delek_sd_bps_line_OnUpdate(oSource){

        var oShape,istdw1,istdw2;

        oShape = oSource.parentNode.parentNode;

        istdw1 = spDataValue(oSource,"sdtag.cp_pv");

	istdw2 = spDataValue(oSource,"bypasstag.cp_op");

 
        if ((istdw2 == 0) && (istdw1 == 0)) {

	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");

	}else if (istdw2 == 1) {

	    oShape.objects("line001").lineColor = "#808080";

	}else {

	    oShape.objects("line001").lineColor = "#808080";

        }

}
 
// -------------------------------------------------------

// sd_bps_line_2SETS_TAGS.sha

// -------------------------------------------------------

function Delek_sd_bps_line_2SETS_TAGS_OnUpdate(oSource){

        var oShape,istdw1,istdw2,istdw3,istdw4;

        oShape = oSource.parentNode.parentNode;

        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");

	istdw2 = spDataValue(oSource,"bypasstag1.cp_op");

	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");

	istdw4 = spDataValue(oSource,"bypasstag2.cp_op");

 
        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0))) {

	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");

	}else {

	    oShape.objects("line001").lineColor = "#808080";

        }

}
 
// -------------------------------------------------------

// sd_bps_line_3SETS_TAGS.sha

// -------------------------------------------------------

function Delek_sd_bps_line_3SETS_TAGS_OnUpdate(oSource){

        var oShape,istdw1,istdw2,istdw3,istdw4,istdw5,istdw6;

        oShape = oSource.parentNode.parentNode;

        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");

	istdw2 = spDataValue(oSource,"bypasstag1.cp_op");

	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");

	istdw4 = spDataValue(oSource,"bypasstag2.cp_op");

	istdw5 = spDataValue(oSource,"sdtag3.cp_pv");

	istdw6 = spDataValue(oSource,"bypasstag3.cp_op");

        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0)) || ((istdw6 == 0 && istdw5 == 0))) {

	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");

	}else {

	    oShape.objects("line001").lineColor = "#808080";

        }

}
 
// -------------------------------------------------------

// ALARMBUTTON_1.1.sha

// -------------------------------------------------------

function Delek_ALARMBUTTON_10_OnUpdate(oSource){

        var oShape,iPV,iPV1,iValue,index0,index1;

        oShape = oSource.parentNode.parentNode;

	iPV = spDataValue(oSource,"Tagname.cp_pv");

        iPV1 = spDataValue(oSource,"Tagname.cp_pv1");

//	iValue = oShape.GetCustomProperty("Value", "AlarmState");
 
        if (iPV > 0) {

	    oShape.objects("pushbutton001").fillcolor = "rgb(255,255,0)";

	    oShape.objects("pushbutton001").fillColorBlink = true;

	}else if (iPV1 > 0) {

	    oShape.objects("pushbutton001").fillcolor = "rgb(255,255,0)";

	    oShape.objects("pushbutton001").fillColorBlink = false;

	}else  {

            oShape.objects("pushbutton001").fillcolor = "rgb(192,192,192)";

	    oShape.objects("pushbutton001").fillColorBlink = false;

        }

}
 
// -------------------------------------------------------

// ALARMRECT_1.sha

// -------------------------------------------------------

function Delek_ALARMRECT_1_OnUpdate(oSource){

        var oShape,iPV,iPV1,iValue,index0,index1;

        oShape = oSource.parentNode.parentNode;

	iPV = spDataValue(oSource,"Tagname.cp_pv");

        iPV1 = spDataValue(oSource,"Tagname.cp_pv1");
 
        if (iPV > 0) {

	    oShape.objects("rect016").fillcolor = "rgb(255,0,0)";

	    oShape.objects("rect016").fillColorBlink = true;

	}else if (iPV1 > 0) {

	    oShape.objects("rect016").fillcolor = "rgb(255,255,0)";

	    oShape.objects("rect016").fillColorBlink = false;

	}else  {

            oShape.objects("rect016").fillcolor = "rgb(192,192,192)";

	    oShape.objects("rect016").fillColorBlink = false;

        }

}
 
function DELEK_HPM_OnOffValves_SO_AlpPV_OnUpdate(oSource)
{
 
   	var oShape,iPV,iPV1,CStyle,OStyle,IStyle;
	oShape=oSource.parentNode.parentNode;
 
  
    iPV = oSource.datavalue("tagname.cp_redtag");
	iPV1 = oSource.datavalue("tagname.I0");
    iPV2 = oSource.datavalue("tagname.I1");
    iPV3 = oSource.datavalue("tagname.P0");
	iPV4 = oSource.datavalue("tagname.PVFL(1)");
	iPV5 = oSource.datavalue("tagname.P1");
	iPV6 = oSource.datavalue("tagname.PVFL(0)");
	iPV7 = oSource.datavalue("tagname.INITMAN");
	CStyle = oShape.GetCustomProperty("Style","cp_StyleForPV0");
	OStyle = oShape.GetCustomProperty("Style","cp_StyleForPV1");
	IStyle = oShape.GetCustomProperty("Style","cp_StyleForPV3");
 
	
	if (((iPV == 1) || (iPV1 == 1) || (iPV2 == 1) || ((iPV3 == 0) && (iP4 == 0)) || (iPV5 == 0) && (iPV6 == 0))) {
	oShape.objects("Wdgc_1").styleclass = "Wdgc_"+OStyle;
}
	else {
    oShape.objects("Wdgc_1").styleclass = "Wdgc_"+CStyle;
}
if (iPV7 == 1) {
			oShape.objects("TxtInit").style.visibility = "visible";
}
		else {
			oShape.objects("TxtInit").style.visibility = "hidden";
		}
	if (iPV6 == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
			}
			else if (iPV4 == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OStyle;
			}		
			else
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+IStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+IStyle;
			}	
}
function DELEK_HPM_OnOffValves_PVFL_MOVPVFL_AlpPV_OnUpdate(oSource)
{
   	var oShape,iPV,iPV1,iPV2,CStyle,OStyle,IInbet,IOther;
	oShape=oSource.parentNode.parentNode;
	iPV = oSource.datavalue("tagname.cp_pv");//CLOSE
	iPV1 = oSource.datavalue("tagname.cp_pv1");//OPEN
	iPV2 = oSource.datavalue("tagname.cp_pv2");//MOVING
	CStyle = oShape.GetCustomProperty("Style","cp_StyleForPV0");
	OStyle = oShape.GetCustomProperty("Style","cp_StyleForPV1");
	IInbet = oShape.GetCustomProperty("Style","cp_StyleForPV3");
	IOther = oShape.GetCustomProperty("Style","cp_StyleForPV4");

	if((oSource.QualityGood("tagname.cp_pv")) && !(oSource.QualityConfigError("tagname.cp_pv")))
	{
			if (iPV == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}
			else if (iPV1 == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+OStyle;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}	
			else if ((iPV == 0) &&(iPV1 == 1))
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+OStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+OStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+OStyle;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}	
			else if ((iPV == 1) &&(iPV1 == 0))
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}
			else if ((iPV == 1) &&(iPV1 == 1))
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
				oShape.Objects("TxtBad").style.visibility = "visible";
			}		
			else if ((iPV == 0) &&(iPV1 == 0))
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+IOther;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+IOther;
				oShape.Objects("WdgC").styleClass = "WdgC_"+IOther;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}
			else if (iPV2 == 1)
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+IInbet;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+IInbet;
				oShape.Objects("WdgC").styleClass = "WdgC_"+IInbet;
				oShape.Objects("TxtBad").style.visibility = "hidden";
			}		
			else
			{
				oShape.Objects("PlgIn").styleClass = "PlgIn_"+CStyle;
				oShape.Objects("PlgOut").styleClass = "PlgOut_"+CStyle;
				oShape.Objects("WdgC").styleClass = "WdgC_"+CStyle;
				oShape.Objects("TxtBad").style.visibility = "visible";
			}

	}
}
// -------------------------------------------------------
// sd_bps.Sha
// -------------------------------------------------------
function Delek_sd_bps_ondatachange(oSource){
        var oShape,iPV,iPV1,iPV2,Ilock,Ilock1,iPV3;
        oShape = oSource.parentNode.parentNode;
		Ilock = oShape.GetCustomProperty("Value", "text1");
		Ilock1= oShape.GetCustomProperty("Value", "text2");
		oShape.objects("textbox001").innerText = Ilock;
		oShape.objects("textbox002").innerText = Ilock1;

        	iPV = spDataValue(oSource,"sdtag.cp_pv");
		iPV1= spDataValue(oSource,"bypasstag.cp_op");
		
	if (iPV1 == 0 && iPV == 0) {
			oShape.objects("textbox003").innerText = "ARMED";
			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";
			oShape.objects("line002").lineColor = "rgb(255,0,0)"; // Red
	}else if (iPV1 == 1){
 			oShape.objects("textbox003").innerText = "BYPASSED";
			oShape.objects("textbox003").fillColor = "rgb(255,255,0)";// Yellow
			oShape.objects("line002").lineColor = "rgb(192,192,192)"; 
	}else {
			oShape.objects("textbox003").innerText = "ARMED";
			oShape.objects("textbox003").fillColor = "rgb(192,192,192)";// Yellow
			oShape.objects("line002").lineColor = "rgb(128,128,128)"; 
	}

   	if (iPV == 0) {
		  oShape.objects("line001").lineColor = "rgb(255,0,0)"; // Red
		  oShape.objects("rect001").fillColor = "rgb(255,0,0)"; // Red
		  oShape.objects("textbox001").textColor = "rgb(255,255,255)";
		  oShape.objects("textbox002").textColor = "rgb(255,255,255)"; 
        }else {
		  oShape.objects("line001").lineColor = "rgb(128,128,128)"; // Red
		  oShape.objects("rect001").fillColor = "rgb(192,192,192)";
		  oShape.objects("textbox001").textColor = "rgb(0,0,0)";
		  oShape.objects("textbox002").textColor = "rgb(0,0,0)"; 
        }     	        	
}
// -------------------------------------------------------
// sd_bps_line.sha
// -------------------------------------------------------
function Delek_sd_bps_line_OnUpdate(oSource){
        var oShape,istdw1,istdw2;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag.cp_op");
	

        if ((istdw2 == 0) && (istdw1 == 0)) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else if (istdw2 == 1) {
	    oShape.objects("line001").lineColor = "#808080";
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// sd_bps_line_2SETS_TAGS.sha
// -------------------------------------------------------
function Delek_sd_bps_line_2SETS_TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag1.cp_op");
	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");
	istdw4 = spDataValue(oSource,"bypasstag2.cp_op");
	

        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
// -------------------------------------------------------
// sd_bps_line_3SETS_TAGS.sha
// -------------------------------------------------------
function Delek_sd_bps_line_3SETS_TAGS_OnUpdate(oSource){
        var oShape,istdw1,istdw2,istdw3,istdw4,istdw5,istdw6;
        oShape = oSource.parentNode.parentNode;
        istdw1 = spDataValue(oSource,"sdtag1.cp_pv");
	istdw2 = spDataValue(oSource,"bypasstag1.cp_op");
	istdw3 = spDataValue(oSource,"sdtag2.cp_pv");
	istdw4 = spDataValue(oSource,"bypasstag2.cp_op");
	istdw5 = spDataValue(oSource,"sdtag3.cp_pv");
	istdw6 = spDataValue(oSource,"bypasstag3.cp_op");
	
        if (((istdw2 == 0) && (istdw1 == 0)) || ((istdw4 == 0 && istdw3 == 0)) || ((istdw6 == 0 && istdw5 == 0))) {
	    oShape.objects("line001").lineColor = ("rgb(255,0,0)");
	}else {
	    oShape.objects("line001").lineColor = "#808080";
        }
}
function Dlk_usd75_stepbut_onCalloutResponse(oSource)  {
	var oShape,sRes,iValue,iValue1;
	oShape=oSource.parentNode.parentNode;	
	sRes=window.external.calloutresponse;
	iValue = oShape.GetCustomProperty("Value", "StepNum");
	iValue1 = Math.round(iValue1);
 
	if (sRes == "Y") {
		oShape.Objects("ScConAlpPV").DataValue("Tagname.NN(78)") = iValue;
		oShape.Objects("ScConAlpPV").DataValue("Tagname.FL(122)")  = 1;
		window.external.Application.dictionary.remove("selNwStp");
		window.external.Application.dictionary.add("selNwStp","0");
	}
}

// -------------------------------------------------------
//Alm_SD_NoByp_alsdnb55.sha
// -------------------------------------------------------
function Dlk_Alm_SD_alsdnb55_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
	iPV3 = spDataValue(oSource,"SDfaceplate.cp_pv");
// -------------------------------------------------------
	if ((iPV2 <= -27638.00) && (iPV2 >= -27638.10)){
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
		oShape.objects("line001").linecolor = ("rgb(255,255,0)");
		oShape.objects("textbox003").textcolor = ("rgb(255,0,0)");
	}else if ((iPV2 <= -1784.00) && (iPV2 >= -1784.10)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
		oShape.objects("line001").linecolor = ("rgb(255,255,0)");
		oShape.objects("textbox003").textcolor = ("rgb(255,0,0)");		
	}else {
		oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
		oShape.objects("line001").linecolor = "#808080";		
		oShape.objects("textbox003").textcolor = "#808080";					    
	}
// -------------------------------------------------------	
 
	if ((iPV1 <= -27638.00) && (iPV1 >= -27638.10)){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = true;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}else if ((iPV1 <= -1784.00) && (iPV1 >= -1784.10)){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = false;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}else if ((iPV1 <= -1016.00) && (iPV1 >= -1016.10) && (iPV3 == "SHUTDOWN")){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = false;		
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}else {
		oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = "#808080";
		oShape.objects("line002").lineColorBlink = false;	
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}
 
		
}
// -------------------------------------------------------
//Delek_ESPSD.sha
// -------------------------------------------------------
function Dlk_ESPSD_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"SDfaceplate.cp_pv");

	
// -------------------------------------------------------	

	if ((iPV1 <= -27638.00) && (iPV1 >= -27638.10)){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = true;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
				
	}else if ((iPV1 <= -1784.00) && (iPV1 >= -1784.10) || (iPV2 == "SHUTDOWN")){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = false;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
		
	}else {
		oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = "#808080";
		oShape.objects("line002").lineColorBlink = false;	
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}

		
}

// -------------------------------------------------------
//Alm_SD_NoByp_alsdnb55_sd4.sha
// -------------------------------------------------------
function Dlk_Alm_SD_alsdnb55_sd4_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
	iPV3 = spDataValue(oSource,"SDfaceplate.cp_pv");
// -------------------------------------------------------
	if ((iPV2 <= -27638.00) && (iPV2 >= -27638.10)){
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
		oShape.objects("line001").linecolor = ("rgb(255,255,0)");
		oShape.objects("textbox003").textcolor = ("rgb(255,0,0)");
	}else if ((iPV2 <= -1784.00) && (iPV2 >= -1784.10)){
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;	
		oShape.objects("textbox003").textcolor = ("rgb(255,0,0)");			
	}		
	else {
		oShape.objects("rect001").fillColor = "#c0c0c0";
	    oShape.objects("rect001").fillColorBlink = false;
		oShape.objects("line001").linecolor = "#808080";		
		oShape.objects("textbox003").textcolor = "#808080";					    
	}
// -------------------------------------------------------	
	if (((iPV2 - 0.1) < -1704) && ((iPV2 + 0.1) > -1705)) {
		oShape.objects("line001").linecolor = ("rgb(255,255,0)");
	}

// -------------------------------------------------------	

	if ((iPV1 <= -27638.00) && (iPV1 >= -27638.10)){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = true;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = true;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
				
	}else if ((iPV1 <= -1784.00) && (iPV1 >= -1784.10)){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = false;
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
		
	}else if ((iPV1 <= -1016.00) && (iPV1 >= -1016.10) && (iPV3 == "SHUTDOWN")){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("line002").lineColorBlink = false;		
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
		
	}else {
		oShape.objects("rect002").fillColor = "#c0c0c0";
	    oShape.objects("rect002").fillColorBlink = false;
		oShape.objects("line002").linecolor = "#808080";
		oShape.objects("line002").lineColorBlink = false;	
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}

		
}

// -------------------------------------------------------
//Delek_ESPSD4.sha
// -------------------------------------------------------
function Dlk_ESPSD4_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iPV4;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"tagname.cp_pv");
	iPV2 = spDataValue(oSource,"tagname1.cp_pv");
	iPV3 = spDataValue(oSource,"tagname2.cp_pv");
	iPV4 = spDataValue(oSource,"tagname3.cp_pv");	

// -------------------------------------------------------	

	if ((iPV1 != 1) || (iPV2 != 1) || (iPV3 != 1) || (iPV4 != 1)) {
	    oShape.objects("rect002").linecolor = ("rgb(255,0,0)");
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");	
	}
				
	else {
		oShape.objects("rect002").linecolor = "#808080";
		oShape.objects("rect002").fillColor = "#c0c0c0";		
		oShape.objects("line002").linecolor = "#808080";
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}

		
}

// -------------------------------------------------------
//Delek_Alm_SD_NoByp_alsdnofo.sha
// -------------------------------------------------------
function Dlk_ESPSD_alsdnofo_OnUpdate(oSource){
        var oShape,iPV1,iPV2;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.cp_pv");
	iPV2 = spDataValue(oSource,"alarm.cp_pv");
// -------------------------------------------------------
	if (iPV2 != 1){
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
		oShape.objects("line001").linecolor = ("rgb(255,255,0)");
		oShape.objects("textbox003").textcolor = ("rgb(255,0,0)");
		
	}else {
		oShape.objects("rect001").fillColor = "#c0c0c0";
		oShape.objects("line001").linecolor = "#808080";		
		oShape.objects("textbox003").textcolor = "#808080";					    
	}
	
// -------------------------------------------------------	

	if (iPV1 != 1){
	    oShape.objects("rect002").fillColor = ("rgb(255,0,0)");
		oShape.objects("line002").linecolor = ("rgb(255,0,0)");
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
				
	}else {
		oShape.objects("rect002").fillColor = "#c0c0c0";    
		oShape.objects("line002").linecolor = "#808080";
		oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");	
		oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");			
	}

		
}

// -------------------------------------------------------
//DELEK_FCCUESP_alm3.sha
// -------------------------------------------------------

function Delek_FCCUESSP_Alm3_SD_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iPV6,iPV7;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"alarm1.cp_pv");
        iPV2 = spDataValue(oSource,"shutdown.cp_pv");
	    iPV3 = spDataValue(oSource,"SDfaceplate.cp_pv");
        iPV6 = spDataValue(oSource,"alarm2.cp_pv");
        iPV7 = spDataValue(oSource,"alarm3.cp_pv");

// -------------------------------------------------------	

	    if (((iPV1-0.1) <= -19446) && ((iPV1+0.1) >= -19446)){
	        oShape.objects("Rectangle1").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle1").fillColorBlink = true;
            oShape.objects("Rectangle1").linecolor = ("rgb(255,255,0)");
            oShape.objects("line002").linecolor = ("rgb(255,255,0)");
            oShape.objects("line003").linecolor = ("rgb(255,255,0)");
	    }else if (((iPV1-0.1) <= 19208) && ((iPV1+0.1) >= 19208)){
	        oShape.objects("Rectangle1").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle1").fillColorBlink = false;
            oShape.objects("Rectangle1").linecolor = ("rgb(255,255,0)");
            oShape.objects("line002").linecolor = ("rgb(255,255,0)");
            oShape.objects("line003").linecolor = ("rgb(255,255,0)");
	    }else {
		    oShape.objects("Rectangle1").fillColor = "#c0c0c0";
	        oShape.objects("Rectangle1").fillColorBlink = false;
		    oShape.objects("Rectangle1").linecolor = "#808080";
            oShape.objects("line002").linecolor = "#808080";
			oShape.objects("line003").linecolor = "#808080";
	    }
// -------------------------------------------------------	

	    if (((iPV6-0.1) <= -19446) && ((iPV6+0.1) >= -19446)){
	        oShape.objects("Rectangle2").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle2").fillColorBlink = true;
            oShape.objects("Rectangle2").linecolor = ("rgb(255,255,0)");
            oShape.objects("line004").linecolor = ("rgb(255,255,0)");
	    }else if (((iPV6-0.1) <= 19208) && ((iPV6+0.1) >= 19208)){
	        oShape.objects("Rectangle2").fillColor = ("rgb(255,255,0)");
            oShape.objects("Rectangle2").linecolor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle2").fillColorBlink = false;
            oShape.objects("line004").linecolor = ("rgb(255,255,0)");
	    }else {
		    oShape.objects("Rectangle2").fillColor = "#c0c0c0";
	        oShape.objects("Rectangle2").fillColorBlink = false;
	        oShape.objects("Rectangle2").linecolor = "#808080";
            oShape.objects("line004").linecolor = "#808080";
	    }
// -------------------------------------------------------	

	    if (((iPV7-0.1) <= -19446) && ((iPV7+0.1) >= -19446)){
	        oShape.objects("Rectangle3").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle3").fillColorBlink = true;
            oShape.objects("Rectangle3").linecolor = ("rgb(255,255,0)");
            oShape.objects("line005").linecolor = ("rgb(255,255,0)");
			oShape.objects("line006").linecolor = ("rgb(255,255,0)");
	    }else if (((iPV7-0.1) <= 19208) && ((iPV7+0.1) >= 19208)){
	        oShape.objects("Rectangle3").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle3").fillColorBlink = false;
            oShape.objects("Rectangle3").linecolor = ("rgb(255,255,0)");
            oShape.objects("line005").linecolor = ("rgb(255,255,0)");
			oShape.objects("line006").linecolor = ("rgb(255,255,0)");
	    }else {
		    oShape.objects("Rectangle3").fillColor = "#c0c0c0";
	        oShape.objects("Rectangle3").fillColorBlink = false;
	        oShape.objects("Rectangle3").linecolor = "#808080";
            oShape.objects("line005").linecolor = "#808080";
			oShape.objects("line006").linecolor = "#808080";
	    }
	// -------------------------------------------------------	

	     if (((iPV1 <= -1016.00) && (iPV1 >= -1016.10)) && ((iPV6 <= -1016.00) && (iPV6 >= -1016.10)) && ((iPV7 <= -1016.00) && (iPV7 >= -1016.10))){
	     oShape.objects("line007").linecolor = "#808080";
	    }else {
	     oShape.objects("line007").linecolor = ("rgb(255,255,0)");
	   
	   }

// -------------------------------------------------------	

	if (((iPV2-0.1) <= -27638) && ((iPV2+0.1) >= -27638)){
	oShape.objects("Polygon5").fillColor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").linecolor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").fillColorBlink = true;
         oShape.objects("Polygon5").lineColorBlink = true;
         oShape.objects("line001").linecolor = ("rgb(255,0,0)");

    }else if (((iPV2-0.1) <= -1784) && ((iPV2+0.1) >= -1784)|| (iPV3 == "SHUTDOWN")){
	     oShape.objects("Polygon5").fillColor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").linecolor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").fillColorBlink = false;
         oShape.objects("Polygon5").lineColorBlink = false;
         oShape.objects("line001").linecolor = ("rgb(255,0,0)");
     }else {
	     oShape.objects("Polygon5").fillColor = "#c0c0c0";
	     oShape.objects("Polygon5").fillColorBlink = false;
	     oShape.objects("Polygon5").linecolor = "#808080";
	     oShape.objects("Polygon5").lineColorBlink = false;
         oShape.objects("line001").linecolor = "#808080";			
        }


}

//DELEK_FCCUESP_alm2.sha
// -------------------------------------------------------

function Delek_FCCUESSP_Alm2_SD_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iPV4,iPV6;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"alarm1.cp_pv");
        iPV2 = spDataValue(oSource,"shutdown.cp_pv");
	    iPV3 = spDataValue(oSource,"SDfaceplate.cp_pv");
	    iPV6 = spDataValue(oSource,"alarm2.cp_pv");
       
// -------------------------------------------------------	

	    if (((iPV1-0.1) <= -19446) && ((iPV1+0.1) >= -19446)){
	       oShape.objects("Rectangle1").fillColor = ("rgb(255,255,0)");
	       oShape.objects("Rectangle1").fillColorBlink = true;
           oShape.objects("Rectangle1").linecolor = ("rgb(255,255,0)");
        }else if (((iPV1-0.1) <= 19208) && ((iPV1+0.1) >= 19208)){
	       oShape.objects("Rectangle1").fillColor = ("rgb(255,255,0)");
	       oShape.objects("Rectangle1").fillColorBlink = false;
           oShape.objects("Rectangle1").linecolor = ("rgb(255,255,0)");
	    }else {
		    oShape.objects("Rectangle1").fillColor = "#c0c0c0";
	        oShape.objects("Rectangle1").fillColorBlink = false;
		    oShape.objects("Rectangle1").linecolor = "#808080";
         }
// -------------------------------------------------------	

	    if (((iPV6-0.1) <= -19446) && ((iPV6+0.1) >= -19446)){
	        oShape.objects("Rectangle2").fillColor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle2").fillColorBlink = true;
            oShape.objects("Rectangle2").linecolor = ("rgb(255,255,0)");
        }else if (((iPV6-0.1) <= 19208) && ((iPV6+0.1) >= 19208)){
	        oShape.objects("Rectangle2").fillColor = ("rgb(255,255,0)");
            oShape.objects("Rectangle2").linecolor = ("rgb(255,255,0)");
	        oShape.objects("Rectangle2").fillColorBlink = false;
        }else {
		    oShape.objects("Rectangle2").fillColor = "#c0c0c0";
	        oShape.objects("Rectangle2").fillColorBlink = false;
	        oShape.objects("Rectangle2").linecolor = "#808080";
        }
// -------------------------------------------------------	

	     if (((iPV1-0.1) == -19446) || ((iPV1-0.1) == 19208) || ((iPV6-0.1) == -19446)|| (iPV6 == 19208)){
	       oShape.objects("line004").linecolor = ("rgb(255,255,0)");
	     }else {
	       oShape.objects("line004").linecolor = "#808080";
        }
	     
// -------------------------------------------------------	

	     if (((iPV2-0.1) <= -27638) && ((iPV2+0.1) >= -27638)){
	     oShape.objects("Polygon5").fillColor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").linecolor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").fillColorBlink = true;
         oShape.objects("Polygon5").lineColorBlink = true;
         oShape.objects("line001").linecolor = ("rgb(255,0,0)");

        }else if (((iPV2-0.1) <= -1784) && ((iPV2+0.1) >= -1784)|| (iPV3 == "SHUTDOWN")){
	     oShape.objects("Polygon5").fillColor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").linecolor = ("rgb(255,0,0)");
         oShape.objects("Polygon5").fillColorBlink = false;
         oShape.objects("Polygon5").lineColorBlink = false;
         oShape.objects("line001").linecolor = ("rgb(255,0,0)");
        }else {
	     oShape.objects("Polygon5").fillColor = "#c0c0c0";
	     oShape.objects("Polygon5").fillColorBlink = false;
	     oShape.objects("Polygon5").linecolor = "#808080";
	     oShape.objects("Polygon5").lineColorBlink = false;
         oShape.objects("line001").linecolor = "#808080";			
        }
// -------------------------------------------------------	

	    if (((iPV1-0.1) == -19446) || ((iPV1-0.1) == 19208)){
	         oShape.objects("line002").linecolor = ("rgb(255,255,0)");
             oShape.objects("line003").linecolor = ("rgb(255,255,0)");
	    }else {
             oShape.objects("line002").linecolor = "#808080";
             oShape.objects("line003").linecolor = "#808080";
        }
// -------------------------------------------------------	

	    if ((iPV6 == -19446) || ((iPV6-0.1) == 19208)){
	         oShape.objects("line005").linecolor = ("rgb(255,255,0)");
             
	    }else {
             oShape.objects("line005").linecolor = "#808080";
            
        }
// -------------------------------------------------------	

	    if (((iPV6-0.1) == -19446) || ((iPV6-0.1) == 19208)){
	         oShape.objects("line006").linecolor = ("rgb(255,255,0)");
	    }else {
              oShape.objects("line006").linecolor = "#808080";
        }

}
// -------------------------------------------------------
//DELEK_HPM_DataAcq_lib_h_pai_10
// -------------------------------------------------------

function DELEK_HPM_DataAcq_lib_h_pai_10_OnUpdate(oSource){
        var oShape,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"alarm.cp_pv");
        
// -------------------------------------------------------	

	    if (((iPV1-0.2) <= -19446) && ((iPV1+0.2) >= -19446)){
	       oShape.objects("ScConAlpPV").textcolor = ("rgb(0,0,255)");
	       
	    }else if(((iPV1-0.2) <= 19208) && ((iPV1+0.2) >= 19208)){
	       oShape.objects("ScConAlpPV").textcolor = ("rgb(0,0,255)");
	       
	    }else {
		    oShape.objects("ScConAlpPV").textcolor = ("rgb(0,0,255)");
	        
	    }
}

function DELEK_da_bypass_armed_onUpdate(oSource){
        var oShape,iPV,index0,index1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"tagname1.Param1");
		iPV1 = spDataValue(oSource,"tagname2.Param2");
		iPV2 = spDataValue(oSource,"tagname3.Param3");
 
        if (iPV == 1) {
	    oShape.objects("textbox001").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("textbox001").innerText = "BYPASSED";
	    oShape.objects("line003").style.visibility = "INHERIT";
		}
		else  {
            oShape.objects("textbox001").fillcolor = "#C0C0C0";
	    oShape.objects("textbox001").innerText = "ARMED";
	    oShape.objects("line003").style.visibility = "HIDDEN";
        }
		if (iPV1 == 1){
			oShape.objects("line003").linecolor = ("rgb(0,0,0)");
			oShape.objects("line001").linecolor = ("rgb(0,0,0)");
		}else if (iPV2 == 1){
			oShape.objects("line003").linecolor = ("rgb(255,0,0)");
			oShape.objects("line001").linecolor = ("rgb(255,0,0)");
		}else {
			oShape.objects("line003").linecolor = "#808080";
			oShape.objects("line001").linecolor = "#808080";
		}
}

// -------------------------------------------------------
//Delek_shutdown3_1.0.sha
// -------------------------------------------------------
function Delek_shutdown310_OnUpdate(oSource){
        var oShape,iPV1,iPV2,iPV3,iValue1,iPV4;
        oShape = oSource.parentNode.parentNode;
	
	iPV1 = spDataValue(oSource,"shutdown.shutdown_para");
	iPV2 = Math.round(iPV1);
	iValue = oShape.GetCustomProperty("Value", "num");	
	iPV3 = spDataValue(oSource,"firstout.firstout_para"); 
	iPV4 = Math.round(iValue);

        if ((Math.round(iPV3)) == (Math.round(iValue))) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");	 
	}else if (iPV1 == 0) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox002").textcolor = ("rgb(255,255,255)");
	    oShape.objects("textbox003").textcolor = ("rgb(255,255,255)");	 
	}else {
	    oShape.objects("rect001").fillColor = "#C0C0C0";
	    oShape.objects("rect001").fillColorBlink = false;
	    oShape.objects("textbox001").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox002").textcolor = ("rgb(0,0,0)");
	    oShape.objects("textbox003").textcolor = ("rgb(0,0,0)");
        }
}

// -------------------------------------------------------
// Delek_alarm2_1.0
// -------------------------------------------------------
function Delek_alarm210_OnUpdate(oSource){
        var oShape,alarm1,iValue,firstout1,iValue,tag;
        oShape = oSource.parentNode.parentNode;
        alarm1 = spDataValue(oSource,"alarm.alarm_para");
	firstout1 = spDataValue(oSource,"firstout.firstout_para");
	iValue = oShape.GetCustomProperty("Value", "num");
	tag = Math.round(iValue);
      
        if (firstout1 == tag) {
	    oShape.objects("RecFrame").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("RecFrame").fillColorBlink = true;
        }else if (alarm1 == 0) {
            oShape.objects("RecFrame").fillcolor = ("rgb(255,255,0)");
	    oShape.objects("RecFrame").fillColorBlink = false;
	}else {
            oShape.objects("RecFrame").fillcolor = ("rgb(192,192,192)");
	    oShape.objects("RecFrame").fillColorBlink = false;
        }
        
}

// Delek_LSG_Delay_line.sha
// -------------------------------------------------------
function Delek_LSG_Delay_line_ondatachange(oSource){

        var oShape,iPV,iPV1;
        oShape = oSource.parentNode.parentNode;
        iPV = spDataValue(oSource,"LogicBlock.DelaySO");
	iPV1= spDataValue(oSource,"LogicBlock.ShutdownSO");
    
        if (iPV1== 1) {
            oShape.objects("line001").lineColor = ("rgb(255,0,0)"); // Red
	    oShape.objects("textbox010").style.visibility = "HIDDEN";
            oShape.objects("alpha007").style.visibility = "HIDDEN";
	    oShape.objects("textbox009").style.visibility = "HIDDEN";
        }else if (iPV ==1) {
            oShape.objects("line001").lineColor = ("rgb(192,192,192)");
	    //oShape.objects("textbox010").style.visibility = "VISIBLE";
            //oShape.objects("alpha007").style.visibility = "VISIBLE";
	   // oShape.objects("textbox009").style.visibility = "VISIBLE";
        }else  {
            oShape.objects("line001").lineColor = ("rgb(128,128,128)");
	    oShape.objects("textbox010").style.visibility = "HIDDEN";
            oShape.objects("alpha007").style.visibility = "HIDDEN";
	    oShape.objects("textbox009").style.visibility = "HIDDEN";
        }
        
}

// -------------------------------------------------------
// ShutdownButton_2.0.sha with FLAG
// -------------------------------------------------------
function Delek_ShutdownButton_20_OnUpdate_FLAG(oSource){
      var oShape,iPV1,iPV2,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname1.cp_pv1");
	iPV2 = spDataValue(oSource,"tagname2.cp_pv2");
	iValue = oShape.GetCustomProperty("Value", "bitvalue");	
 
	 if (iPV1 == (iValue)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 1) {
            oShape.objects("rect001").fillColor = ("rgb(255,0,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
	    oShape.objects("rect001").fillColorBlink = false;	
        }
}
 
// -------------------------------------------------------
// alarmButton_2.0.sha with FLAG
// -------------------------------------------------------
function Dlk_alarmButton_20_OnUpdate_FLAG(oSource){
      var oShape,iPV1,iPV2,iValue;
        oShape = oSource.parentNode.parentNode;
        iPV1 = spDataValue(oSource,"tagname1.cp_pv1");
	iPV2 = spDataValue(oSource,"tagname2.cp_pv2");
	iValue = oShape.GetCustomProperty("Value", "bitvalue");	

	 if (iPV1 == (iValue)) {
	    oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = true;
	}else if (iPV2 == 1) {
            oShape.objects("rect001").fillColor = ("rgb(255,255,0)");
	    oShape.objects("rect001").fillColorBlink = false;
	}else {
            oShape.objects("rect001").fillColor = ("rgb(192,192,192)");
        }
}
// -------------------------------------------------------

