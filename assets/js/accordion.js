function changeAccordion(evt, selectedAcc){

 var accButtons, accContents, currentContent, currentButton, i;

 accButtons     =  document.getElementsByClassName('accordion-button');
 accContents    =  document.getElementsByClassName('accordion-content');
 currentButton  =  evt.currentTarget;
 currentContent =  document.getElementById(selectedAcc);


 for(i=0; i<accButtons.length; i++){
   if(accButtons[i] != currentButton){
     accButtons[i].className = accButtons[i].className.replace(" active", " ");
   }
 }


 for(i=0; i<accContents.length; i++){
   if(accContents[i] != currentContent){
     accContents[i].className = accContents[i].className.replace(" active", " ");
   }
 }

 currentButton.classList.toggle('active');
 currentContent.classList.toggle('active');

}
