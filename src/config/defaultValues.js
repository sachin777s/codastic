const defaultValues = {
  "html": `<div class="scene">
  <div class="cube">
    <div class="cube__face cube__face--front">Codebyte</div>
    <div class="cube__face cube__face--back">Codebyte</div>
    <div class="cube__face cube__face--right">CodeByte</div>
    <div class="cube__face cube__face--left">CodeByte</div>
    <div class="cube__face cube__face--top">CodeByte</div>
    <div class="cube__face cube__face--bottom">CodeByte</div>
  </div>
</div>
<p class="radio-group">
  <label>
    <input type="radio" name="rotate-cube-side" value="front" checked /> front
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="right" /> right
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="back" /> back
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="left" /> left
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="top" /> top
  </label>
  <label>
    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
  </label>
</p>
    `,
  "css": `* { 
    box-sizing: border-box; 
  }

  body {    
    display: flex;
    align-items: center;
    flex-direction: column;
     font-family: sans-serif; 
    }
  
  .scene {
    width: 200px;
    height: 200px;
    border: 1px solid #CCC;
    margin: 80px;
    perspective: 400px;
  }
  
  .cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
  }
  
  .cube.show-front  { transform: translateZ(-100px) rotateY(   0deg); }
  .cube.show-right  { transform: translateZ(-100px) rotateY( -90deg); }
  .cube.show-back   { transform: translateZ(-100px) rotateY(-180deg); }
  .cube.show-left   { transform: translateZ(-100px) rotateY(  90deg); }
  .cube.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
  .cube.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }
  
  .cube__face {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid black;
    line-height: 200px;
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  
  .cube__face--front  { background: hsla(  0, 100%, 50%, 0.7); }
  .cube__face--right  { background: hsla( 60, 100%, 50%, 0.7); }
  .cube__face--back   { background: hsla(120, 100%, 50%, 0.7); }
  .cube__face--left   { background: hsla(180, 100%, 50%, 0.7); }
  .cube__face--top    { background: hsla(240, 100%, 50%, 0.7); }
  .cube__face--bottom { background: hsla(300, 100%, 50%, 0.7); }
  
  .cube__face--front  { transform: rotateY(  0deg) translateZ(100px); }
  .cube__face--right  { transform: rotateY( 90deg) translateZ(100px); }
  .cube__face--back   { transform: rotateY(180deg) translateZ(100px); }
  .cube__face--left   { transform: rotateY(-90deg) translateZ(100px); }
  .cube__face--top    { transform: rotateX( 90deg) translateZ(100px); }
  .cube__face--bottom { transform: rotateX(-90deg) translateZ(100px); }
  
  label { margin-right: 10px; }
  
  .radio-group{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
  }
    `,
  "javascript": `var cube = document.querySelector('.cube');
  var radioGroup = document.querySelector('.radio-group');
  var currentClass = '';
  
  function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if ( currentClass ) {
      cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
  }
  // set initial side
  changeSide();
  
  radioGroup.addEventListener( 'change', changeSide );
    `
}

export default defaultValues;