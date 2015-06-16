//hey global scope I have a declaration name foo
var foo = "bar";

function bar()
  var foo = "baz";
  
  function baz(foo){
      foo = "bam";
      bam = "yay";
    
  }

