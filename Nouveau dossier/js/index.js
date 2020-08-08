var titre = $('.section-title');
var section = $('li');
var chevron = $('.carret');
var mmain = $( "#main" );
function toggleAccordion() {
  if (event.stopPropagation) 
    {
      event.stopPropagation();
    } 
    else 
    {
      event.cancelBubble = true;
    }
  section.removeClass('active');
  $(this).parent().addClass('active');
  mach = document.getElementById("main");
  console.log($(this));
  mach.setAttribute("style", 'visibility:hidden');
  console.log("CLICK SUR LE CONTENT");
}

titre.on('click', toggleAccordion);


function machf() {
  if (event.stopPropagation) 
    {
      event.stopPropagation();
    } 
    else 
    {
      event.cancelBubble = true;
    }
    mach.setAttribute("style", 'visibility:visible');

  section.removeClass('active');
  section.focus();
  mmain.addClass('active');
  mach = document.getElementById("main");
}
chevron.on('click', machf);
