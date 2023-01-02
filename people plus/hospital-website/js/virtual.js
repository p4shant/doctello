console.log("hii");
const imge = document.querySelector(".imge");
var p=true;
const recognition = new  webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

let d=document.getElementById("vid").style ;



const synth = window.speechSynthesis;

imge.addEventListener("click", () => {
    p=true;
    recognition.start(); 
});

let utter =new SpeechSynthesisUtterance('Hello! how are you');
utter.onend = () => {
  if(p==true)
 {recognition.start();}
  
};

recognition.onresult = (e) => {
  const  transcript = e.results[e.results.length - 1][0].transcript.trim();
  if (transcript === "fever") {
    recognition.stop();
    document.getElementById("med1").innerHTML ="acetaminophen";
    document.getElementById("med2").innerHTML ="ibuprofen";
    document.getElementById("med3").innerHTML ="aspirin";
    document.getElementById("med4").innerHTML ="paracetamol";
    utter.text = "Rest and drink plenty of fluids. Medication isn't needed. Call the doctor if the fever is accompanied by a severe headache, stiff neck, shortness of breath, or other unusual signs or symptoms. If you're uncomfortable, take acetaminophen (Tylenol, others), ibuprofen (Advil, Motrin IB, others) or aspirin. Read the label carefully for proper dosage, and be careful not to take more than one medication containing acetaminophen, such as some cough and cold medicines. Call the doctor if the fever doesn't respond to the medication, is consistently 103 F (39.4 C) or higher, or lasts longer than three days";
    synth.speak(utter);
  } 
  else if (transcript === "cough"){
    recognition.stop();
    document.getElementById("med1").innerHTML ="Duro-Tuss";
    document.getElementById("med2").innerHTML ="Maxiclear";
    document.getElementById("med3").innerHTML ="Dimetapp";
    document.getElementById("med4").innerHTML ="Sudafed";
    document.getElementById("pres").innerHTML ="A saltwater gargle — 1/4 to 1/2 teaspoon salt dissolved in an 8-ounce glass of warm water — can temporarily relieve a sore or scratchy throat You can also try ice chips, sore throat sprays, lozenges or hard candy.Use caution when giving lozenges or hard candy to children because they can choke on them. Don't give lozenges or hard candy to children younger than 6 years";
    utter.text = "A saltwater gargle — 1/4 to 1/2 teaspoon salt dissolved in an 8-ounce glass of warm water — can temporarily relieve a sore or scratchy throat You can also try ice chips, sore throat sprays, lozenges or hard candy.Use caution when giving lozenges or hard candy to children because they can choke on them. Don't give lozenges or hard candy to children younger than 6 years";
    synth.speak(utter);
  }
  else if (transcript === "Stomach Pain"){
    recognition.stop();
    document.getElementById("med1").innerHTML ="loperamide";
    document.getElementById("med2").innerHTML ="bismuth";
    document.getElementById("med3").innerHTML ="subsalicylate";
    document.getElementById("med4").innerHTML ="Pepto-Bismol";
    document.getElementById("pres").innerHTML ="You might try a heating pad to ease belly pain. Chamomile or peppermint tea may help with gas. Be sure to drink plenty of clear fluids so your body has enough water Eat several smaller meals instead of three big ones Chew your food slowly and well  Stay away from foods that bother you (spicy or fried foods, for example) Ease stress with exercise, meditation, or yoga";
    utter.text = "You might try a heating pad to ease belly pain. Chamomile or peppermint tea may help with gas. Be sure to drink plenty of clear fluids so your body has enough water Eat several smaller meals instead of three big ones Chew your food slowly and well  Stay away from foods that bother you (spicy or fried foods, for example) Ease stress with exercise, meditation, or yoga";
    synth.speak(utter);
  } 
  else if (transcript === "body pain"){
    recognition.stop();
    document.getElementById("med1").innerHTML ="acetaminophen";
    document.getElementById("med2").innerHTML ="Tylenol";
    document.getElementById("med3").innerHTML ="nonsteroidal";
    document.getElementById("med4").innerHTML ="anti-inflammatory";
    document.getElementById("pres").innerHTML ="Pain relievers are medicines that reduce or relieve headaches, sore muscles, arthritis, or other aches and pains.There are many different pain medicines, and each one has advantages and risks. Some types of pain respond better to certain medicines than others.Each person may also have a slightly different response to a pain reliever Take this medication by mouth as directed by your doctor, usually every 6 hours.If you have stomach upset while taking this medication, take it with food or milk.";
    utter.text = "Pain relievers are medicines that reduce or relieve headaches, sore muscles, arthritis, or other aches and pains.There are many different pain medicines, and each one has advantages and risks. Some types of pain respond better to certain medicines than others.Each person may also have a slightly different response to a pain reliever Take this medication by mouth as directed by your doctor, usually every 6 hours.If you have stomach upset while taking this medication, take it with food or milk.";
    synth.speak(utter);
  } 
  else if (transcript === "Headache"){
    recognition.stop();
    document.getElementById("med1").innerHTML ="naproxen";
    document.getElementById("med2").innerHTML ="ibuprofen";
    document.getElementById("med3").innerHTML ="aspirin";
    document.getElementById("med4").innerHTML ="sodium";
    document.getElementById("med4").innerHTML ="If you get headache pain, medications can bring relief. You can buy some headache medications right off the shelf at the store.These drugs are known as over-the-counter (OTC) pain relievers. With other headache medications, you need a medical prescription. Your healthcare provider can help you figure out the best medicine for your needs"; 
    utter.text = "If you get headache pain, medications can bring relief. You can buy some headache medications right off the shelf at the store.These drugs are known as over-the-counter (OTC) pain relievers. With other headache medications, you need a medical prescription. Your healthcare provider can help you figure out the best medicine for your needs"; 
    synth.speak(utter);   
  } 
  else{ 
    d.display="visible";
    p=false;
  }
};

