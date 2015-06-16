//finding declaration of variable and function variables.
//pass by compiler and then pass to where is executed.

//varable declaration
var foo = "bar";
  
  function bar() {
      var foo = "bazz";
      
      
  }
  function baz(){
      foo = "bam";
      bam = "yay";
      
     console.log(bam);
  }