imagePaths=[{src:'images/1.png',link:'https://editor.p5js.org/Saya1111/full/s4OWTMX7g'},
  {src:'images/2.png',link:'https://editor.p5js.org/Saya1111/full/apEYq69el'},
  {src:'images/3.png',link:'https://editor.p5js.org/Saya1111/full/Zw06VU9L2'},
  {src:'images/4.png',link:'https://editor.p5js.org/Saya1111/full/jiB789blr'},
  {src:'images/5.png',link:'https://editor.p5js.org/Saya1111/full/G46GTlEPZ'},
  {src:'images/6.png',link:'https://editor.p5js.org/Saya1111/full/2AZZYDuJj'},
  {src:'images/7.png',link:'https://editor.p5js.org/Saya1111/full/owImzC5xO'}]

function loadImage(imagePath){
    const img = document.createElement('img');
    img.id="seashell"
    img.src=imagePath.src;
    img.style.position = 'fixed';
  img.style.width = '200px'; 
  img.style.height = 'auto';

let x, y

  let sideVertical=Math.random()
if (sideVertical <=0.5){
     x = Math.floor(Math.random()*(window.innerWidth/2-300 - 150)); 
}
else{
     x = window.innerWidth/2+300+Math.floor(Math.random()*(window.innerWidth/2-300 -150)); 
}
let sideHorizental=Math.random()
if (sideHorizental <=0.5){
     y = Math.floor(Math.random()*(window.innerHeight/2-300 - 150)); 
}
else{
     y = window.innerHeight/2+300+Math.floor(Math.random()*(window.innerHeight/2-300 -150)); 
}

  
 y = Math.floor(Math.random()*(window.innerHeight - 150)); 

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  console.log(`${x}px`+`${y}px`)
  console.log("width="+window.innerWidth)

  

makeDraggable(img);
let label;
img.addEventListener('click', ()=>openSketch(imagePath.link));
img.addEventListener('mouseenter',()=>{
  label=loadLabel(imagePath.src,x,y)})
img.addEventListener('mouseleave',()=>{
  if (label) {
    label.remove(); 
    label = null;
  }
})

  document.body.appendChild(img);
}

window.onload = () => {
    const numberOfImages = 7; 
    for (let i = 0; i < numberOfImages; i++) {
      
      loadImage(imagePaths[i]);
      console.log(i)
    }
  };

  function makeDraggable(img){
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    img.onmousedown = dragMouseDown
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
   
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
   
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
   
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
   
    img.style.top = (img.offsetTop - pos2) + "px";
   img.style.left = (img.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
  }}

  function openSketch(sketchEmbedLink){
    const existingModal = document.getElementById('sketch-window');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
  modal.id = 'sketch-window';
  let shadow
  
  const iframe = document.createElement('iframe');
  iframe.src = sketchEmbedLink;
  iframe.className = 'sketch-iframe'; 
  modal.appendChild(iframe);
  document.body.appendChild(modal);
 
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/s4OWTMX7g'){
iframe.style.width='400px'
  iframe.style.height='443px'
  shadow="0px 0px 20px aqua"
  modal.style.boxShadow=shadow
  
  }
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/apEYq69el'){
    iframe.style.width='400px'
      iframe.style.height='443px'
      shadow="0px 0px 20px pink"
  modal.style.boxShadow=shadow
      }
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/Zw06VU9L2'){
        iframe.style.width='600px'
          iframe.style.height='643px'
          shadow="0px 0px 20px greenyellow"
  modal.style.boxShadow=shadow
          }
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/jiB789blr'){
    iframe.style.width='400px'
    iframe.style.height='443px'
    shadow="0px 0px 20px yellow"
  modal.style.boxShadow=shadow
  }
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/G46GTlEPZ'){
    iframe.style.width='400px'
    iframe.style.height='443px'
    shadow="0px 0px 20px rgb(245, 191, 66)"
  modal.style.boxShadow=shadow
  }   
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/2AZZYDuJj'){
    iframe.style.width='400px'
    iframe.style.height='443px'
    shadow="0px 0px 20px beige"
  modal.style.boxShadow=shadow
  }   
  if(sketchEmbedLink=='https://editor.p5js.org/Saya1111/full/owImzC5xO'){
    iframe.style.width='600px'
    iframe.style.height='443px'
    shadow="0px 0px 20px mediumslateblue"
  modal.style.boxShadow=shadow
  }   
  
  }

  function loadLabel(imageIndex,x,y){
    const tbl=document.createElement('table')
    tbl.id="description"
    tbl.style.width = '250px';
    tbl.style.position='fixed'
    tbl.style.left=`${x}px`;
    tbl.style.top=`${y-60}px`;
    tbl.style.backgroundColor = 'rgba(0,0,0,1)';
 
  tbl.style.padding = '10px';
  tbl.style.zIndex = '1000';
  const titleRow = tbl.insertRow();
  const titleCell = titleRow.insertCell();
  const desRow = tbl.insertRow();
  const desCell = desRow.insertCell();
  
   
    if(imageIndex=='images/1.png'){
      tbl.style.color='aqua'
      
      titleCell.appendChild(document.createTextNode('Lost N Found'));
      desCell.appendChild(document.createTextNode('Transferring memory into code'));
      document.body.appendChild(tbl);
      return tbl;
        }
    if(imageIndex=='images/2.png'){
      tbl.style.color='pink'
          titleCell.appendChild(document.createTextNode('Face Generator'));
          desCell.appendChild(document.createTextNode('Help my cat grow bigger (^._.^)ﾉ'));
          document.body.appendChild(tbl);
          return tbl;
        }
        if(imageIndex=='images/3.png'){
          tbl.style.color='greenyellow'
              titleCell.appendChild(document.createTextNode('Clock of Life'));
              desCell.appendChild(document.createTextNode('A cock with different forms of life as measurement'));
              document.body.appendChild(tbl);
              return tbl;
            }
    if(imageIndex=='images/4.png'){
    tbl.style.color='yellow'
    titleCell.appendChild(document.createTextNode('Exquisite Corpse'));
     desCell.appendChild(document.createTextNode('Randomness triggers new imaginations'));
     document.body.appendChild(tbl);
      return tbl;
    }
    if(imageIndex=='images/5.png'){
      tbl.style.color='rgb(245, 191, 66)'
      titleCell.appendChild(document.createTextNode('Optical Illusion'));
       desCell.appendChild(document.createTextNode('When your eyes lie to you'));
       document.body.appendChild(tbl);
        return tbl;
      }
      if(imageIndex=='images/6.png'){
        tbl.style.color='beige'
        titleCell.appendChild(document.createTextNode('Data Portait'));
         desCell.appendChild(document.createTextNode('Its nice to keep track of your diet'));
         document.body.appendChild(tbl);
          return tbl;
        }
        if(imageIndex=='images/7.png'){
          tbl.style.color='mediumslateblue'
          titleCell.appendChild(document.createTextNode('Autobiographical Game'));
           desCell.appendChild(document.createTextNode('Welcome to the simulation of doing my childhood dream job'));
           document.body.appendChild(tbl);
            return tbl;
          }
  }