socket('9c79f14df986a1ec693c', {
  mode: 'enquiry',
  element: '#socket-enquiry'
});

socket('9c79f14df986a1ec693c');

socket('9c79f14df986a1ec693c', {
  mode: 'enquiry-modal',
  element: '#socket-enquiry-modal',
  event_callback: function() {
    $('[name="client_email"]').each(function(){
      $(this).attr('placeholder', 'Email (Required)'); 
      $(this).attr('required', 'required');
    })
  }
});
