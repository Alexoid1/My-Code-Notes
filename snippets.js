const tasks="https://gist.githubusercontent.com/Alexoid1/e4abea36f901830e1fd0f975ade2574b/raw/3407f2a4eb839e106b87b24d39c5c59877aa0dc4/snnipets.json"
let notes = [];
      fetch(tasks).then(blop => blop.json()).then(data => notes.push(...data))
      let result=notes
      function encontrar(palabra, notes){
        return notes.filter(function(x){//filtro en el array de objetos notas
            const regex= new RegExp(palabra,'gi')
            return x.search.match(regex)||x.title.match(regex)||x.type.match(regex)//city y state son propiedades dentro del objeto cities como ya esta creado tiene sus propiedades

        });  
      }
      function filtrar () {
        notes.push(...result)
        if(this.value==='All'){
          return notes
        }else{
          notes=notes.filter((note)=>note.tech===this.value)
          return notes
        }
      }
      
      function encontrar(palabra, notes){
        return notes.filter(function(x){//filtro en el array de objetos notas
            const regex= new RegExp(palabra,'gi')
            return x.search.match(regex)||x.title.match(regex)//city y state son propiedades dentro del objeto cities como ya esta creado tiene sus propiedades
    
        });
    
      }
      function mostrar(x){
        
        const matchArray=encontrar(this.value,notes);
        const html=matchArray.map(x =>{
            const rege=new RegExp(this.value,'gi');
            const noteName=x.search.replace(rege,`<span class="hl">${this.value}</span>`);
            const titleName=x.title.replace(rege,`<span class="hl">${this.value}</span>`)
            return `
            <li class='elem'>
              <div>
                <span class="name">${titleName}</span>
                
                <span class="pop">${x.tech}</span>
              </div>
              <div class="hiden">
                <div>
                  <span class="hi">${x.description}</span>
                </div>           
                <pre class='pop2'><code>${x.use}</code></pre>
              </div>  
            </li>    
            `;
    
        }).join('')
        suggestions.innerHTML=html;
        function activar(elem){
            this.querySelector('.hiden').classList.add('goo')
           //var crea=document.createElement('span')
            this.querySelector('.hiden').style.display='inline'
          }
          function desactivar(t){
            this.classList.remove('goo')
           //var crea=document.createElement('span')
            //d.target.appendChild('crea')
            this.querySelector('.hiden').style.display='none'
      
          }
          let elemntos=document.querySelectorAll('.elem')
        
          elemntos.forEach(function(elem){elem.addEventListener('mouseover',activar)})
          elemntos.forEach(function(elem){elem.addEventListener('mouseout',desactivar)})
        }
        
const seArchInput=document.querySelector('.search');
const suggestions=document.querySelector('.suggestions');
const filter=document.querySelector('#noteTechFilter2');
seArchInput.addEventListener('change',mostrar)
seArchInput.addEventListener('keyup',mostrar)
filter.addEventListener('change',filtrar)