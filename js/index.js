
 function alerta(){
    alertify.confirm("Confirmar el pedido.",
    function(){
      alertify.success('Ok');
    },
    function(){
      alertify.error('Cancel');
    });
 };