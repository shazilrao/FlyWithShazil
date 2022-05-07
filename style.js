function myFunction() {
    alert("your flight was successfully booked!"); let a=document.createElement('a');
      a.target='_blank';
      a.href='myPDF/FlyWithShazil.pdf';

      //then use this code for alert
      if (window.confirm('By clicking on OK, You can download the invoice of your flight!'))
      {
      a.click();
      };
  }

  