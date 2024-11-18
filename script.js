function showAnswer1(){
    document.querySelector('.faqs-answer1').style.display = "block";  
    hideAnswer2();
    hideAnswer3();
    hideAnswer4();      
    document.querySelector('.plus1').style.display = "none";
    document.querySelector('.minus1').style.display = "block";
  }
  function hideAnswer1() {
    document.querySelector('.faqs-answer1').style.display = "none";
    document.querySelector('.minus1').style.display = "none";
    document.querySelector('.plus1').style.display = "block";
  }
  function showAnswer2(){
    document.querySelector('.faqs-answer2').style.display = "block"; 
    hideAnswer1();
    hideAnswer3();
    hideAnswer4();
    document.querySelector('.plus2').style.display = "none";
    document.querySelector('.minus2').style.display = "block";
  }
  function hideAnswer2() {
    document.querySelector('.faqs-answer2').style.display = "none";
    document.querySelector('.minus2').style.display = "none";
    document.querySelector('.plus2').style.display = "block";
  }
  function showAnswer3(){
    document.querySelector('.faqs-answer3').style.display = "block";
    hideAnswer1();
    hideAnswer2();
    hideAnswer4();
    document.querySelector('.plus3').style.display = "none";
    document.querySelector('.minus3').style.display = "block";
  }
  function hideAnswer3() {
    document.querySelector('.faqs-answer3').style.display = "none";
    document.querySelector('.minus3').style.display = "none";
    document.querySelector('.plus3').style.display = "block";
  }
  function showAnswer4(){
    document.querySelector('.faqs-answer4').style.display = "block";
    hideAnswer1();
    hideAnswer2();
    hideAnswer3();
    document.querySelector('.plus4').style.display = "none";
    document.querySelector('.minus4').style.display = "block";
  }
  function hideAnswer4() {
    document.querySelector('.faqs-answer4').style.display = "none";
    document.querySelector('.minus4').style.display = "none";
    document.querySelector('.plus4').style.display = "block";
  }