const $=id=>document.getElementById(id);
const NAV=[['vocab','Vocabulario'],['gram','Gramática'],['prac','Práctica'],['exam','Simulacro']];
$('nav').innerHTML=NAV.map(n=>`<button id="n_${n[0]}" onclick="go('${n[0]}')">${n[1]}</button>`).join('');
function go(s){NAV.forEach(n=>{$(n[0]).classList.toggle('on',n[0]==s);$('n_'+n[0]).classList.toggle('on',n[0]==s)});scrollTo(0,0)}
const norm=s=>s.toLowerCase().replace(/[’`]/g,"'").replace(/\s+/g,' ').replace(/[.!?]+$/,'').trim();
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* ===== VOCAB ===== */
const CATS={S:'Colegio',I:'Expresiones y frases',W:'Verbos y expresiones útiles',T:'Tecnología',P:'Verbos con preposición',F:'Familias de palabras'};
const V=`S|Assignment|trabajo / tarea|I have a long assignment to hand in on Monday.|Tengo un trabajo largo que entregar el lunes.
S|Ban|prohibido / prohibir|Phones are banned in our classroom.|Los móviles están prohibidos en nuestra clase.
S|Behaviour|comportamiento|His behaviour in class was excellent.|Su comportamiento en clase fue excelente.
S|Bullying|acoso escolar|The school has a strict policy against bullying.|El colegio tiene una política estricta contra el acoso escolar.
S|Challenge|reto / desafío|Learning Chinese is a big challenge.|Aprender chino es un gran reto.
S|Cheat|copiar|He was caught cheating in the exam.|Lo pillaron copiando en el examen.
S|Compulsory|obligatorio|English is compulsory in our school.|El inglés es obligatorio en nuestro colegio.
S|Confusing|confusa|The instructions were confusing.|Las instrucciones eran confusas.
S|Demanding|difícil|It is a very demanding course.|Es un curso muy difícil.
S|Disruption|interrupción|The fire alarm caused a disruption.|La alarma de incendios causó una interrupción.
S|Drop out of|dejar de estudiar|She dropped out of university last year.|Dejó la universidad el año pasado.
S|Extra-curricular activity|extraescolares|My extra-curricular activity is basketball.|Mi actividad extraescolar es el baloncesto.
S|Learn by heart|aprenderse algo de memoria|We have to learn this poem by heart.|Tenemos que aprendernos este poema de memoria.
S|Obey|obedecer|Students must obey the school rules.|Los alumnos deben obedecer las normas.
S|Pay attention|prestar atención|Please pay attention to the teacher.|Por favor, presta atención al profesor.
S|Punish|castigar|The teacher punished him for being late.|El profesor lo castigó por llegar tarde.
S|Revise|repasar|I revise every night before an exam.|Repaso todas las noches antes de un examen.
S|Skip classes|saltarse clases|He skipped classes and got into trouble.|Se saltó clases y se metió en problemas.
I|When two Fridays come together|cuando dos viernes se junten|I will tidy my room when two Fridays come together!|¡Ordenaré mi cuarto cuando dos viernes se junten!
I|Flabbergasted|atónito, boquiabierto|I was flabbergasted when I saw my grade.|Me quedé boquiabierta al ver mi nota.
I|FYI / For your information|para tu información|FYI, the exam is on Friday.|Para tu información, el examen es el viernes.
I|To cost an arm and a leg|costar un ojo de la cara|That phone costs an arm and a leg.|Ese móvil cuesta un ojo de la cara.
I|Forebear|antepasado|My forebears came from a small village.|Mis antepasados venían de un pueblo pequeño.
I|ASAP / As soon as possible|lo más pronto posible|Send me the file ASAP.|Mándame el archivo lo antes posible.
I|A piece of cake|facilísimo|The test was a piece of cake.|El examen fue facilísimo.
I|Cuddle|acurrucarse, abrazar|The children cuddled up on the sofa.|Los niños se acurrucaron en el sofá.
I|BTW / By the way|por cierto|BTW, did you bring my book?|Por cierto, ¿has traído mi libro?
W|Emphasise|enfatizar|The teacher emphasised the importance of reading.|La profesora enfatizó la importancia de leer.
W|Poverty|pobreza|Poverty is a serious problem in many countries.|La pobreza es un problema serio en muchos países.
W|Turn around|girar alrededor|He turned around when she called his name.|Se giró cuando ella dijo su nombre.
W|Acquire|adquirir|You acquire new skills when you practise.|Adquieres nuevas habilidades cuando practicas.
W|Lively|animado|The party was very lively.|La fiesta estuvo muy animada.
W|Take place|tener lugar|The concert takes place on Saturday.|El concierto tiene lugar el sábado.
W|Make sure|asegurarse de algo|Make sure you lock the door.|Asegúrate de cerrar la puerta con llave.
W|Take pride in|enorgullecerse|She takes pride in her work.|Se enorgullece de su trabajo.
W|Take for granted|dar por hecho|Don't take your family for granted.|No des a tu familia por hecho.
W|Take advantage of|aprovechar|Take advantage of the good weather.|Aprovecha el buen tiempo.
W|Make progress|tener progreso / progresar|You are making progress in English.|Estás progresando en inglés.
W|Make sense|tener sentido|This sentence doesn't make sense.|Esta frase no tiene sentido.
W|Make a mistake|cometer un error|Everybody makes mistakes.|Todo el mundo comete errores.
T|Gaming|jugar videojuegos|Gaming is his favourite hobby.|Jugar a videojuegos es su afición favorita.
T|Tools|herramientas|This website has useful tools for students.|Esta web tiene herramientas útiles para estudiantes.
T|Installed|instalar (instalado)|I installed a new app yesterday.|Ayer instalé una aplicación nueva.
T|Devices|dispositivos|Tablets and phones are electronic devices.|Las tabletas y los móviles son dispositivos electrónicos.
T|Equipped with|equipados con|The classrooms are equipped with computers.|Las aulas están equipadas con ordenadores.
T|Enables|permite|This app enables you to translate texts.|Esta aplicación te permite traducir textos.
T|Delete|eliminar|Delete the old files to free some space.|Elimina los archivos antiguos para liberar espacio.
T|Backed up|crear copia de seguridad|I have backed up all my photos.|He hecho una copia de seguridad de todas mis fotos.
T|Deny access|denegar el acceso|The system denied access to the user.|El sistema denegó el acceso al usuario.
T|Upgrading|mejorarlo (mejorar / actualizar a una versión superior)|He is upgrading his computer.|Está mejorando su ordenador.
T|Gone viral|hacerse viral|Her video has gone viral.|Su vídeo se ha hecho viral.
T|Updating|actualizar|The phone is updating now.|El móvil se está actualizando ahora.
T|Wireless|inalámbrico|I bought wireless headphones.|Compré auriculares inalámbricos.
T|User-friendly|fácil de usar|The app is very user-friendly.|La aplicación es muy fácil de usar.
T|Browsing|buscar / navegar|She is browsing the internet.|Está navegando por internet.
T|Uploading|subir|They are uploading photos to the cloud.|Están subiendo fotos a la nube.
T|Cutting-edge|innovadora|It is a cutting-edge technology.|Es una tecnología innovadora.
T|Capable of|es capaz de|This robot is capable of learning.|Este robot es capaz de aprender.
P|Accuse of|acusar de|They accused him of cheating.|Lo acusaron de copiar.
P|Compare to|comparar a|Don't compare yourself to others.|No te compares con los demás.
P|Stare at|fijar en (mirar fijamente)|Don't stare at people.|No mires fijamente a la gente.
P|Complain about|quejarse sobre|He complained about the noise.|Se quejó del ruido.
P|Blame for|culpar de|They blamed me for the mistake.|Me culparon del error.
P|Concentrate on|concentrarse en|Concentrate on your homework.|Concéntrate en tus deberes.
P|Hear of|oír sobre|I have never heard of that singer.|Nunca he oído hablar de ese cantante.
P|Care about|tener cuidado sobre (preocuparse por)|She cares about the environment.|Le importa el medio ambiente.
P|Apologise for|disculparse por|He apologised for being late.|Se disculpó por llegar tarde.
P|Search for|buscar por|I'm searching for my keys.|Estoy buscando mis llaves.
F|Disrupt|interrumpir, alterar (familia: Disruption · Disruptor · Disruptive · Disrupted)|The noise disrupted the class.|El ruido interrumpió la clase.
F|Create|crear (familia: Creation · Creator · Creativity · Creative)|Artists create new things.|Los artistas crean cosas nuevas.
F|Differ|diferir, ser distinto|Our opinions differ.|Nuestras opiniones son distintas.
F|Obey|obedecer|Dogs obey their owners.|Los perros obedecen a sus dueños.`.split('\n').map((l,i)=>{const p=l.split('|');return{id:i,c:p[0],en:p[1],es:p[2],ex:p[3],exs:p[4]}});
let learned=new Set();try{learned=new Set(JSON.parse(localStorage.getItem('lrn')||'[]'))}catch(e){}
let shown=new Set();
$('cat').innerHTML='<option value="">Todas las categorías</option>'+Object.entries(CATS).map(c=>`<option value="${c[0]}">${c[1]}</option>`).join('');
function rv(){const q=norm($('q').value),c=$('cat').value;
 $('vg').innerHTML=V.filter(w=>(!c||w.c==c)&&(!q||norm(w.en+' '+w.es).includes(q))).map(w=>`<div class="card" style="${learned.has(w.id)?'background:var(--okl)':''}"><div class="tag">${CATS[w.c]}</div><div class="en">${w.en}</div>
 ${shown.has(w.id)?`<div>${w.es}</div>${w.ex?`<div class="ex">${w.ex}<br>${w.exs}</div>`:''}`:'<div class="tag">Traducción oculta</div>'}
 <div class="row" style="margin-top:8px"><button class="b s" onclick="tg(${w.id})">${shown.has(w.id)?'Ocultar':'Mostrar'}</button><button class="b ${learned.has(w.id)?'':'s'}" onclick="ln(${w.id})">${learned.has(w.id)?'✓ Aprendida':'Marcar aprendida'}</button></div></div>`).join('')||'<p>Sin resultados.</p>';
 const p=Math.round(learned.size/V.length*100);$('pct').textContent=`Estudiado: ${learned.size} de ${V.length} (${p}%)`;$('pb').style.width=p+'%'}
function tg(i){shown.has(i)?shown.delete(i):shown.add(i);rv()}
function ln(i){learned.has(i)?learned.delete(i):learned.add(i);try{localStorage.setItem('lrn',JSON.stringify([...learned]))}catch(e){}rv()}
function allT(f){shown=f?new Set(V.map(w=>w.id)):new Set();rv()}

/* ===== GRAMMAR ===== */
const G=[
['Present Simple','Hábitos, rutinas, verdades generales y horarios fijos (the train leaves at 8).','Afirmativa: sujeto + verbo (he/she/it + -s/-es). Negativa: don\'t / doesn\'t + verbo base. Pregunta: Do / Does + sujeto + verbo base. Con does/doesn\'t el verbo NO lleva -s.','always, usually, often, sometimes, never, every day, on Mondays','She plays tennis every Sunday. (Ella juega al tenis todos los domingos: es una costumbre.)','Decir «She go» o «Does she plays?».','Si hay una palabra de frecuencia (always, every…) → Present Simple.'],
['Present Continuous','Acciones que ocurren ahora mismo, situaciones temporales y planes ya organizados.','Afirmativa: am/is/are + verbo-ing. Negativa: am not / isn\'t / aren\'t + verbo-ing. Pregunta: Am/Is/Are + sujeto + verbo-ing.','now, at the moment, right now, today, look!, listen!','Look! It is raining. (¡Mira! Está lloviendo: ocurre ahora.)','Usar -ing con verbos de estado (know, like, want): se dice «I know», no «I am knowing».','«Look!», «Listen!» o «now» → Present Continuous.'],
['Past Simple','Acciones terminadas en un momento concreto del pasado.','Afirmativa: verbo + -ed (o forma irregular: go → went). Negativa: didn\'t + verbo base. Pregunta: Did + sujeto + verbo base. Con did/didn\'t el verbo vuelve a base.','yesterday, last week, in 2019, two days ago, when (+ pasado)','We visited Rome last summer. (Visitamos Roma el verano pasado: ya terminó.)','Decir «Did you went?» (correcto: Did you go?).','Si hay una fecha o «ago / last / yesterday» → Past Simple.'],
['Past Continuous','Acción en progreso en un momento del pasado, o acción larga interrumpida por otra corta.','Afirmativa: was/were + verbo-ing. Negativa: wasn\'t / weren\'t + verbo-ing. Pregunta: Was/Were + sujeto + verbo-ing.','while, as, at 8 pm yesterday, when (interrupción)','I was cooking when the phone rang. (Estaba cocinando cuando sonó: la acción larga va en continuo, la corta en simple.)','Poner Past Simple en las dos acciones («While I cooked, the phone rang»).','Larga/de fondo → was doing. Corta/interrumpe → did.'],
['Present Perfect Simple','Pasado con relación con el presente: experiencias, acciones recientes y resultados visibles ahora.','Afirmativa: have/has + participio. Negativa: haven\'t / hasn\'t + participio. Pregunta: Have/Has + sujeto + participio.','ever, never, already, yet, just, since, for, so far, recently','I have lost my keys. (He perdido las llaves: sigo sin ellas ahora.)','Usarlo con fecha concreta («I have seen him yesterday» es incorrecto).','Si NO se dice cuándo pasó, o aparece just/already/yet/ever/never → Present Perfect.'],
['Past Perfect Simple','Acción pasada anterior a otra acción también pasada («lo que pasó primero»).','Afirmativa: had + participio. Negativa: hadn\'t + participio. Pregunta: Had + sujeto + participio.','before, after, by the time, already, when (anterior)','When I arrived, the film had started. (Primero empezó la película, después llegué yo.)','Usarlo sin segundo hecho pasado, o confundirlo con Past Simple.','Dos acciones pasadas: la que ocurrió PRIMERO va en had + participio.'],
['Future Simple (will)','Predicciones, decisiones espontáneas, promesas y ofrecimientos.','Afirmativa: will + verbo base. Negativa: won\'t + verbo base. Pregunta: Will + sujeto + verbo base. Igual para todos los sujetos (sin -s).','tomorrow, next week, soon, I think, probably, perhaps','I\'ll help you with that bag. (Decisión en el momento: te ofrezco ayuda.)','Poner «to» tras will («will to go») o añadir -s («she wills»).','«I think / probably / tomorrow» o una promesa → will.'],
['Present Perfect Continuous','Acción que empezó en el pasado y continúa hasta ahora (importa la duración), o que acaba de terminar con resultado visible.','Afirmativa: have/has been + verbo-ing. Negativa: haven\'t / hasn\'t been + verbo-ing. Pregunta: Have/Has + sujeto + been + verbo-ing.','for, since, how long, all day, lately, recently','I have been waiting for an hour. (Llevo una hora esperando y sigo aquí.)','Olvidar «been» o usarlo con verbos de estado.','«How long…?» + for/since y acción que continúa → have been doing.']];
$('gd').innerHTML=G.map((g,i)=>`<details><summary>${i+1}. ${g[0]}</summary><h3>A. ¿Cuándo se utiliza?</h3><p>${g[1]}</p><h3>B. Estructura</h3><p>${g[2]}</p><h3>C. Palabras clave</h3><p>${g[3]}</p><h3>D. Ejemplo</h3><p class="ex">${g[4]}</p><h3>E. Error frecuente</h3><p>${g[5]}</p><h3>F. Truco para identificarlo</h3><p>${g[6]}</p></details>`).join('');
$('tb').innerHTML='<tr><th>Tiempo</th><th>Uso principal</th><th>Estructura</th><th>Palabras clave</th><th>Ejemplo</th></tr>'+G.map(g=>`<tr><td><b>${g[0]}</b></td><td>${g[1]}</td><td>${g[2].split('. ')[0].replace('Afirmativa: ','')}</td><td>${g[3]}</td><td>${g[4].split(' (')[0]}</td></tr>`).join('');
$('dif').innerHTML='<h3>Diferencias clave</h3>'+[['Present Simple vs. Continuous','Simple = hábito («I study every day»). Continuous = ahora o temporal («I am studying now»).'],['Past Simple vs. Past Continuous','Simple = acción terminada o corta. Continuous = acción en progreso o de fondo («I was walking when I fell»).'],['Past Simple vs. Present Perfect','Past Simple = momento concreto terminado (yesterday, in 2019). Present Perfect = sin momento concreto, con relación al presente («I have visited Paris»).'],['Present Perfect Simple vs. Continuous','Simple = resultado o cuántas veces («I have read three books»). Continuous = duración, acción que sigue («I have been reading for two hours»).'],['Past Perfect vs. Past Simple','Past Perfect = lo que ocurrió ANTES. Past Simple = lo que ocurrió después («When I arrived, she had left»).'],['Present Perfect vs. Past Perfect','Present Perfect conecta pasado con AHORA («I have finished»). Past Perfect conecta con OTRO momento del pasado («I had finished when you called»).']].map(d=>`<div class="card"><b>${d[0]}</b><br>${d[1]}</div>`).join('');

/* ===== QUESTIONS: [tag,text,answers('|'),explanation,options] ===== */
const PQ=[
['Present Simple','She ___ (go) to school by bus every day.','goes','Hábito con «every day» + she → verbo con -es.'],
['Present Simple','He ___ (not like) coffee.','doesn\'t like|does not like','Negativa: doesn\'t + verbo base, sin -s.'],
['Present Simple','Elige: ___ she speak English?','Does','Pregunta con she → Does + verbo base.',['Do','Does','Is']],
['Present Continuous','Look! It ___ (rain).','is raining','«Look!» indica que ocurre ahora → is + verbo-ing.'],
['Present Continuous','I ___ (not study) right now.','am not studying|\'m not studying','Negativa: am not + verbo-ing.'],
['Present Continuous','Elige: At the moment, they ___ football.','are playing','«At the moment» → Present Continuous.',['play','are playing','played']],
['Past Simple','She ___ (buy) a new bike two days ago.','bought','«Ago» → Past Simple; buy es irregular.'],
['Past Simple','Elige: I ___ my keys yesterday.','lost','«Yesterday» → Past Simple.',['lost','have lost','was losing']],
['Past Simple','Ordena y escribe: yesterday / went / we / to / the / cinema','we went to the cinema yesterday|yesterday we went to the cinema','Sujeto + verbo + lugar + tiempo.'],
['Past Continuous','At 8 pm yesterday I ___ (watch) TV.','was watching','Momento concreto del pasado en progreso.'],
['Past Continuous','While he ___ (cook), the phone rang.','was cooking','«While» + acción larga → Past Continuous.'],
['Past Continuous','Elige: When she arrived, we ___ dinner.','were having','Estábamos a mitad de la acción cuando llegó.',['had','were having','have had']],
['Present Perfect Simple','I ___ (never/be) to London.','have never been','«Never» + experiencia → have + participio.'],
['Present Perfect Simple','She ___ (just/finish) her homework.','has just finished','«Just» → Present Perfect; she → has.'],
['Present Perfect Simple','Elige: He has lived here ___ 2010.','since','«Since» + punto de partida; «for» + duración.',['for','since','ago']],
['Past Perfect Simple','When I arrived, the film ___ (already/start).','had already started','Empezó antes de que yo llegara.'],
['Past Perfect Simple','She was sad because she ___ (lose) her phone.','had lost','Perder el móvil ocurrió antes de estar triste.'],
['Past Perfect Simple','Elige: After he ___ dinner, he went out.','had eaten','Primero cenó, después salió.',['ate','had eaten','has eaten']],
['Future Simple (will)','I think it ___ (rain) tomorrow.','will rain','«I think» + predicción → will.'],
['Future Simple (will)','Oh, the bag is heavy! I ___ (help) you.','will help|\'ll help','Decisión espontánea → will.'],
['Future Simple (will)','Elige: Don\'t worry, I ___ you tonight.','will call','Promesa → will + verbo base.',['call','will call','am calling to']],
['Present Perfect Continuous','I ___ (wait) for an hour.','have been waiting','Duración con «for» → have been + -ing.'],
['Present Perfect Continuous','She ___ (study) since 5 o\'clock.','has been studying','«Since» + acción que continúa.'],
['Present Perfect Continuous','Elige: How long ___ English?','have you been learning','«How long» → Present Perfect Continuous.',['have you been learning','are you learning','did you learn']],
['Corrección','Corrige: She go to school every day.','she goes to school every day','Present Simple con she → goes.'],
['Traducción','Traduce: Ayer vi a mi profesora.','i saw my teacher yesterday|yesterday i saw my teacher','«Ayer» → Past Simple; see → saw.']];
const EQ=[
['voc','Vocabulario','He was caught ___ in the exam.','cheating','Cheat = copiar.',['cheating','revising','obeying']],
['voc','Vocabulario','English is ___ in our school: everybody must study it.','compulsory','Compulsory = obligatorio.',['compulsory','confusing','lively']],
['voc','Vocabulario','The teacher will ___ him for being rude. (castigar)','punish','Punish = castigar.'],
['voc','Vocabulario','«Aprenderse de memoria» =','learn by heart','Learn by heart.',['learn by heart','pay attention','skip classes']],
['voc','Vocabulario','«Take for granted» significa','dar por hecho','Take for granted = dar por hecho.',['dar por hecho','aprovechar','enorgullecerse']],
['voc','Vocabulario','That phone costs ___.','an arm and a leg','Idiom: costar un ojo de la cara.',['an arm and a leg','a piece of cake','ASAP']],
['voc','Vocabulario','Please ___ ___ to the teacher. (prestar atención)','pay attention','Pay attention.'],
['voc','Vocabulario','The app is very ___: anyone can use it.','user-friendly','User-friendly = fácil de usar.',['user-friendly','wireless','compulsory']],
['voc','Vocabulario','She apologised ___ being late.','for','Apologise for.'],
['voc','Vocabulario','He complained ___ the noise.','about','Complain about.'],
['voc','Vocabulario','Don\'t forget to ___ ___ the door is locked. (asegurarte)','make sure','Make sure = asegurarse de algo.'],
['sp','Present Simple','My brother ___ (play) the guitar every Saturday.','plays','Hábito con he → plays.'],
['sp','Present Simple','Water ___ at 100 degrees.','boils','Verdad general → Present Simple.',['boils','is boiling','boiled']],
['sp','Present Continuous','Be quiet! The baby ___ (sleep).','is sleeping','Ocurre ahora.'],
['sp','Present Continuous','They ___ (not watch) TV right now.','aren\'t watching|are not watching|\'re not watching','Negativa de Present Continuous.'],
['sp','Past Simple','I ___ (see) her last week.','saw','«Last week» → Past Simple.'],
['sp','Past Simple','When ___ you arrive yesterday?','did','Pregunta en Past Simple → did.',['did','have','were']],
['sp','Past Continuous','I ___ (walk) home when it started to rain.','was walking','Acción larga interrumpida.'],
['sp','Past Continuous','What ___ you doing at 9 last night?','were','Past Continuous con you → were.',['were','did','have']],
['sp','Present Perfect Simple','We ___ (already/eat).','have already eaten','Already → Present Perfect.'],
['sp','Present Perfect Simple','I ___ my homework yet.','haven\'t done','«Yet» en negativa → haven\'t + participio.',['haven\'t done','didn\'t do','don\'t do']],
['sp','Past Perfect Simple','He ___ (leave) before I arrived.','had left','Salió antes de mi llegada.'],
['sp','Past Perfect Simple','By the time we got there, the shop ___.','had closed','Cerró antes de que llegáramos.',['had closed','closed','has closed']],
['sp','Future Simple (will)','Tomorrow it ___ (be) sunny, I think.','will be','Predicción → will.'],
['sp','Future Simple (will)','Perhaps she ___ the exam.','will pass','Predicción con perhaps → will.',['passes','will pass','has passed']],
['sp','Present Perfect Continuous','He ___ (work) here for ten years.','has been working','Duración, sigue trabajando.'],
['sp','Present Perfect Continuous','I\'m tired because I ___ all day.','have been studying','Acción continuada con resultado ahora.',['have been studying','studied','was studying']],
['mx','Mixta','I ___ in Salamanca since 2020.','have lived|have been living','«Since» → Present Perfect.',['have lived','lived','am living']],
['mx','Mixta','She ___ TV when the phone rang.','was watching','Acción larga interrumpida.',['was watching','watched','has watched']],
['mx','Mixta','I ___ (know) Ana since we were children.','have known','«Since» + verbo de estado → Present Perfect Simple.'],
['mx','Mixta','When I arrived, she ___.','had already left','Salió antes de llegar yo.',['had already left','already left','has already left']],
['mx','Mixta','He is tired because he ___ (run) for an hour.','has been running','Duración con resultado visible.'],
['mx','Mixta','He ___ (live) in Madrid in 2015.','lived','Año concreto → Past Simple.'],
['mx','Mixta','At the moment I ___ (read) a good book.','am reading|\'m reading','«At the moment» → continuo.'],
['mx','Mixta','Ana ___ to Japan twice.','has been','Experiencia sin fecha → Present Perfect.',['has been','went','was going']],
['tr','Transformación','Escribe en negativa: She likes tea.','she doesn\'t like tea|she does not like tea','Does not + verbo base.'],
['tr','Transformación','Haz pregunta: They have finished.','have they finished','Inversión: Have + sujeto.'],
['tr','Corrección','Corrige: He go to school by bus.','he goes to school by bus','He → goes.'],
['tr','Corrección','Corrige: I have seen him yesterday.','i saw him yesterday','Con «yesterday» → Past Simple.'],
['tr','Transformación','Escribe en negativa: I was sleeping.','i wasn\'t sleeping|i was not sleeping','Was + not + -ing.']];
const PB=['of','to','about','for','on','at','with','in'];
[['Accuse','of'],['Compare','to'],['Complain','about'],['Blame','for'],['Concentrate','on'],['Hear','of'],['Care','about'],['Apologise','for'],['Search','for'],['Stare','at']].forEach(p=>EQ.push(['voc','Vocabulario',p[0]+' ___',p[1],p[0]+' + '+p[1]+' (verbo + preposición).',PB,'Ejercicio A. Une cada verbo con su preposición. Sobran preposiciones.',1]));
const PH=['accused of','concentrate on','complained about','searching for','apologised for','heard of','stare at','cares about','listen to','depend on'];
[['He was ___ cheating in the exam.','accused of'],['Please ___ your homework, not your phone.','concentrate on'],['She ___ the noise all night.','complained about'],["I'm ___ my lost keys.",'searching for'],['He ___ being late.','apologised for'],['Have you ever ___ this singer?','heard of'],["Don't ___ people; it's rude.",'stare at'],['He really ___ the environment.','cares about']].forEach(p=>EQ.push(['voc','Vocabulario',p[0],p[1],'La expresión correcta es «'+p[1]+'».',PH,'Ejercicio B. Coloca cada expresión en su frase. Sobran dos.',1]));
const ES=['acoso escolar','repasar','obedecer','castigar','saltarse clases','reto / desafío','animado','adquirir','prohibido','herramientas'];
[['Bullying','acoso escolar'],['Revise','repasar'],['Obey','obedecer'],['Punish','castigar'],['Skip classes','saltarse clases'],['Challenge','reto / desafío'],['Lively','animado'],['Acquire','adquirir']].forEach(p=>EQ.push(['voc','Vocabulario',p[0]+' =',p[1],p[0]+' significa «'+p[1]+'».',ES,'Ejercicio C. Relaciona cada palabra con su significado. Sobran dos.',1]));
const WB=['assignment','behaviour','demanding','disruption','wireless','poverty','lively','cuddle','ban','challenge'];
[['I have to hand in this ___ on Monday.','assignment'],["The teacher was angry about the students' bad ___.",'behaviour'],['This course is very ___; I study every night.','demanding'],['The storm caused a ___ in train services.','disruption'],['I use ___ headphones, with no cables.','wireless'],['Many families live in ___.','poverty']].forEach(p=>EQ.push(['voc','Vocabulario',p[0],p[1],'La palabra correcta es «'+p[1]+'».',WB,'Ejercicio D. Completa con una palabra del banco. Sobran palabras.',1]));
EQ.push(['sp','Present Simple','Our train ___ (leave) at 7.30 every morning.','leaves','Horario fijo → Present Simple.'],
['sp','Present Continuous','Elige: Mum ___ dinner at the moment.','is cooking','«At the moment» → continuo.',['cooks','is cooking','cooked']],
['sp','Past Simple','She ___ (not go) to school yesterday.',"didn't go|did not go",'Did not + verbo base.'],
['sp','Past Continuous','They ___ (play) football when it started raining.','were playing','Acción larga interrumpida.'],
['sp','Present Perfect Simple','She ___ (never/eat) sushi.','has never eaten','Never → Present Perfect.'],
['sp','Past Perfect Simple','They ___ (already/finish) when the teacher came in.','had already finished','Terminaron antes de que entrara.'],
['sp','Future Simple (will)',"Elige: I promise I ___ late.","won't be",'Promesa → will / won\'t.',["won't be","wasn't","don't be"]],
['sp','Present Perfect Continuous','They ___ (play) tennis since 3 pm.','have been playing','«Since» + acción que continúa.'],
['tr','Transformación','Haz pregunta: She went to Rome. (Did…)','did she go to rome','Did + sujeto + verbo base.'],
['tr','Corrección',"Corrige: He didn't went home.","he didn't go home|he did not go home",'Tras didn\'t, verbo base.'],
['tr','Transformación','Haz negativa: We have eaten.',"we haven't eaten|we have not eaten",'Haven\'t + participio.']);
const TX='Ejercicio E. Texto con huecos: «Last summer I (1)___ (visit) Granada with my cousin. While we (2)___ (walk) around the Alhambra, we (3)___ (meet) an old teacher. We (4)___ (not see) her for three years, so we (5)___ (talk) for an hour. Tomorrow I (6)___ (send) her some photos.»';
[['Hueco 1: visit','visited','Hecho terminado.'],['Hueco 2: walk','were walking','«While» → acción en progreso.'],['Hueco 3: meet','met','Hecho puntual que interrumpe.'],['Hueco 4: not see','hadn\'t seen|had not seen','Antes de encontrarse.'],['Hueco 5: talk','talked','Hecho pasado terminado.'],['Hueco 6: send','will send|\'ll send','Futuro: promesa con «tomorrow».']].forEach(p=>EQ.push(['mx','Mixta',p[0],p[1],p[2],null,TX]));
const ok=(q,v)=>q[2].split('|').some(x=>norm(x)==norm(v));
const inp=(q,n)=>q[6]?`<select name="${n}"><option value="">— elige —</option>${shuf(q[4]).map(o=>`<option>${o}</option>`).join('')}</select>`:q[4]?shuf(q[4]).map(o=>`<label class="o"><input type="radio" name="${n}" value="${o}"> ${o}</label>`).join(''):`<input type="text" name="${n}" autocomplete="off" spellcheck="false">`;
const val=n=>{const e=document.querySelector(`[name="${n}"]`);if(!e)return'';return e.type=='radio'?(document.querySelector(`[name="${n}"]:checked`)||{value:''}).value:e.value};

/* practice */
function rp(){$('pd').innerHTML=PQ.map((q,i)=>`<div class="card"><div class="tag">${q[0]}</div><div>${i+1}. ${q[1]}</div>${inp(q,'p'+i)}<button class="b" style="margin-top:8px" onclick="chk(${i})">Comprobar</button><div id="f${i}"></div></div>`).join('')+'<button class="b" onclick="rp();scrollTo(0,0)">Reiniciar y repetir todos los ejercicios</button>';}rp();
function chk(i){const q=PQ[i],v=val('p'+i),f=$('f'+i);if(!v){f.innerHTML='<div class="fb ko">Escribe o elige una respuesta.</div>';return}
 f.innerHTML=ok(q,v)?`<div class="fb ok">✓ Correcto. ${q[3]}</div>`:`<div class="fb ko">✗ Incorrecto. Respuesta correcta: <b>${q[2].split('|')[0]}</b><br>${q[3]}<br>Recuerda: ${q[0]}.</div>`}

/* exam */
const BL={voc:'Bloque 1. Vocabulario',sp:'Bloque 2. Gramática por tiempos',mx:'Bloque 3. Gramática mixta',tr:'Bloque 4. Transformación y corrección'};
let ex=[];
function startEx(){ex=[];['voc','sp','mx','tr'].forEach(b=>shuf(EQ.filter(q=>q[0]==b&&!q[6])).concat(EQ.filter(q=>q[0]==b&&q[6])).forEach(q=>ex.push({b:b,q:q.slice(1),p:q[5]?1:2})));
 let h='<div class="card"><b>Instrucciones:</b> no se muestran soluciones hasta finalizar. Los huecos valen 2 puntos y las preguntas de opción múltiple 1. La nota se calcula sobre el total de puntos.</div>',cb='';
 let pg='';ex.forEach((e,i)=>{if(e.b!=cb){cb=e.b;h+=`<h3>${BL[cb]}</h3>`}if(e.q[5]&&e.q[5]!=pg){pg=e.q[5];h+=`<div class="card" style="background:var(--pl)"><b>${pg}</b>${e.q[6]?'<br>Banco: '+shuf(e.q[4]).join(' · '):''}</div>`}h+=`<div class="card"><div class="tag">Pregunta ${i+1} · ${e.p} pt</div><div>${e.q[1]}</div>${inp(e.q,'e'+i)}</div>`});
 h+='<div class="row"><button class="b s" onclick="rev()">Revisar respuestas</button><button class="b" onclick="fin()">Finalizar examen y corregir</button></div><div id="rv"></div>';$('ed').innerHTML=h}
function rev(){const un=ex.map((e,i)=>val('e'+i)?0:i+1).filter(x=>x);$('rv').innerHTML=`<div class="fb ${un.length?'ko':'ok'}">${un.length?'Sin responder: preguntas '+un.join(', '):'Has respondido todas las preguntas.'}</div>`}
function fin(){const un=ex.filter((e,i)=>!val('e'+i)).length;if(un&&!confirm(`Tienes ${un} preguntas sin responder. ¿Finalizar igualmente?`))return;
 let tot=0,got=0,okn=0,bl={},tn={},bad=[];
 ex.forEach((e,i)=>{const v=val('e'+i),c=v&&ok(e.q,v);tot+=e.p;if(c){got+=e.p;okn++}else bad.push({n:i+1,e:e,v:v});
  bl[e.b]=bl[e.b]||[0,0];bl[e.b][1]+=e.p;if(c)bl[e.b][0]+=e.p;
  if(e.b=='sp'){tn[e.q[0]]=tn[e.q[0]]||[0,0];tn[e.q[0]][1]++;if(c)tn[e.q[0]][0]++}});
 const nota=(got/tot*10).toFixed(1);
 let h=`<div class="card"><h2>Nota final: ${nota} / 10</h2><p>${got} de ${tot} puntos · ${okn} correctas · ${ex.length-okn} incorrectas</p></div><div class="card"><h3>Por bloques</h3>${Object.keys(bl).map(b=>`<p>${BL[b]}: ${bl[b][0]} / ${bl[b][1]} puntos</p>`).join('')}</div>
 <div class="card"><h3>Tiempos verbales</h3>${Object.keys(tn).map(t=>{const r=tn[t][0]/tn[t][1];return `<p>${t}: ${tn[t][0]}/${tn[t][1]} — ${r>=.75?'<b style="color:var(--ok)">Lo dominas</b>':'<b style="color:var(--ko)">Necesitas repasarlo</b>'}</p>`}).join('')}</div>
 <h3>Preguntas falladas</h3>${bad.map(x=>`<div class="card ko"><div class="tag">Pregunta ${x.n} · ${x.e.q[0]}</div>${x.e.q[1]}<br>Tu respuesta: <b>${x.v||'(en blanco)'}</b><br>Correcta: <b>${x.e.q[2].split('|')[0]}</b><br>${x.e.q[3]}</div>`).join('')||'<p>¡Sin fallos!</p>'}
 <button class="b" onclick="startEx()">Repetir el examen (orden y opciones nuevos)</button>`;$('ed').innerHTML=h;scrollTo(0,0)}
go('vocab');rv();startEx();
