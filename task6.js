const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");

const priebalses = "BCČDFGHJKLMNPRSŠTVZŽ";
const balses = "AĄEĘĖIĮYOUŪŲ";
const diakrit = "ČŠŽ";
const uzdaros = "DPO";
const arr=["T", "E", "L", "I", "A"];
const type = [priebalses, balses, diakrit, uzdaros];

let code = "DŲŲŠŲKŲTLŪĖUBŠBŠYIOĖĖYAĮŽYŠĮŠŠVŲYOEĖŪŲLŽMVĮVĮVŠVŪGŽŠĘVPKĮŽĖŠSŠĖĖŠŠĮPLYŪMŽAŠFOŠĖJPŠUEŠEEŲŠOŽPULĮBŽFŪĮŠRĮJŲŠŠČJĮPIŲŲGSĮŲŲEŪŠKŽBŪŠLŪŠKĮŲYŠĮŪAŠRŠĖĮŽĘŠYAŠTĘŠŠIJPĖBEŠRFŲJIIŲEŲŪEEŠŲVOEECLĮNĮŠŲŲFVŲŠHTŠŲODĮĮŲŲADEŲŲJEBŠŪCŪŽNŲNLVŽŠŪŠVKKKAJUŠŲŠVŠMŠYŽŠĮCŲŪOYJAŠŠLŠŽŲŠŪŠUCRHŠEUŠVPĮŠŽŪLPTPŲĮŽUVŲŠURŲOŲŽNDULŠŠFOYŽŽŠŠDKTŲABŠJĮANŠŲBŲŪŠULRCOŲAŠŠŠKŠJŲVĮŪAĮHŽLBŲOĖŲŽTPVŪŽEŠŪŲĮŽŽĖŠOŠABŲĖŠŠUŠMŪGŠFNŪTŠRFŠEŠDŠŽŠŲŠĖŽŠYJPERŽŠIĖGOŠŲŲŠĖEŠŪŽJPUĖŠŲFVĖEKFŠNJŠTVVŪPŠYŲOIŠŪODEJŽŲĖYAŲLVDKŠLVŠBEŲĖĮOŠŲFŪŠIŠVMABAYTŪŲUŠVVAIIŽĮŽIIŽŠTAŲŽŠŠYIAYŲEŪŽŠŪŲŠŲDĘŽPŽCMŠŠABŠŲEDGĖŠĮŽEŠŽNMCĮŲKKUŽĮBŠPYBŽĮIŠKŠŠROĖĮLELNŠŠRĮŠOŽIOŽGSŲRJVŽŠFŪRŠYKTIPENŽBŠLLŲĮRLĖTLĖŠPOĮRDOŪŠVFŠYŠŲŠGŠŽŠĮŽPŲŠĮGŽVFŲŠŠĮŠĖŲŽIĮYYĖKŽŲŠŠTYŽŽĮŠYŲŠŽKDŲFŪDŠŠOBŽVŠŠŽTONŠŠĮVVNRYAŲNŠŽAĮBĮŠFŽFŠTŽŽĖUTŽVJVFŠLVĮREBHŲŲHŠŠAŠŠIFŲODAGPĖFŠCŲCŠŽDĮŽŠŠIJĖAĮŪLVTNŠŪŪBŲŠŠŪOBŠŲĮŠŲYAKŠŲŠIETYBVŠCTŲAŲRŲŠIPILMVUŲŲĮEAŠBĮŽĮŠDIŲPŪNVYŠUJĮŲŲNPŠBCŠŲŠRŽŠIŲYBŪRAEORBŠTŽĖŲŠPEŲŠYPTDŲIŪRJŠLŠŠTŠŽŠŠYAŽAŲEŠŲŠŠŠTDVUŠŠVCŠŲJLMŪŽNMOĖŠPŽKŲBKUĮJŠLŲŲŲPŠEĮKYŠJRTĮREDVTIŠŠŲŽRĮŠŠŽMPŠVIVŪOŲPŠĮPFŽVGŲILUĖŪTŠŠŽŠTCRMYJŽŲIŲŲNŠLPŠŠŠŠŠŲĮRŠĮPŠAVPMŲBNJLĘĘŠŲŪRJYŲŠVYŽEĮJŲRŲOŲPŲŲŲĖNIŽŠVŠŲŠFŲJSJJSMŠFĖŠŠVŠĮŠMŠIKAŽŪILŠŲKJAPŠŠĖMĮŠBAEJŽĮŪŠĖERŪBUVŪĮLRŠBŠAYBŽŲŲMĖŠYŲRRRŠUGŪŲOŠŠLLĮKŠŽŽŲBŽOATIOĖICRIJŽPŲŲVLŠLJŠŪŽNŠDLTŠŽRĖPRJŠŲŲŠŲIIIŠVNHĘMFNŠŠJŽDŠŠŽŽLLŠŲŲŽTĖĮPŠPRŠDŽŽTŠTŽŲŠMOLIPRRSIEŠŲŲLŠENŲŲBYŠĖŪŽŲYOŽŠŠBVVVĖŪYŠŽUIEŲINTĮŽŠŲRŪŠIŲFŠŲBYŽYŠĖMIŠFPŽKĖVEPNŽŠŽŲŲYAAŠŪUŪŽŽYJŲŠRIIVŠUDĮĮKŲLŲĮŽŲAŲŠIĖŠBPŠVŠŠLHŽŲŠIĮOŲJLŪIŲŲNĮKĖOĖEŲŽY";


function counter(searchAt, searchFor){
      
      let letters=0;

      // console.log("ieskome cia - ", searchAt, " Sito - ", searchFor);
      for (let x = 1; x < searchAt.length-1; x++){
            for(let y = 0; y < searchFor.length; y++){
                  if (searchFor.charAt(y) === searchAt.charAt(x)){
                        letters++;
                  }
            }
      }
      console.log("surasta - ", letters);
      return letters;
}

function roll(){
      let sum = 0;
      let end;
      let searchable;
      for (let y = 0; y < type.length; y++){
            let paieska = type[y]; //atsirinkom ko ieškosim


            if (y === 0) code=code.slice(code.indexOf(arr[y])-1); //atsipjaunam nuo pradžios iki pirmos reikiamos raidės

            end=code.indexOf(arr[y+1]); //susirandam paskutines raides indeksa

            searchable =  code.slice(1, end+1); //atsiskiriame skanuojamą gabaliuką kodo.

            sum = sum + counter(searchable, paieska);

            // console.log("po sito rato - ", sum, "pakeitimu");

     //----------------------------------------------

            code = code.slice(end-1); //atpjauname kode kitam skanavimui nebereikalinga dalį.
            // console.log("likes kodas - ", code.length, " ", code);
            
      }
      return sum;
}

console.log(roll()+roll()+roll()+roll()+roll()+roll());

ddd="DŲŲŠŲKŲTLŪĖUBŠBŠYIOĖĖYAĮŽYŠĮŠŠVŲYOEĖŪŲLŽMVĮVĮVŠVŪGŽŠĘVPKĮŽĖŠSŠĖĖŠŠĮPLYŪMŽAŠFOŠĖJPŠUEŠEEŲŠOŽPULĮBŽFŪĮŠRĮJŲŠŠČJĮPIŲŲGSĮŲŲEŪŠKŽBŪŠLŪŠKĮŲYŠĮŪA"
console.log(ddd.length)