/**
 * 
 * *Descrizione
**Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
**Non è necessario creare date casuali 
**Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.
**Unsplash (https://unsplash.it/300/300?image=<id>)

**Milestone 1
**Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

**Milestone 2
**Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
**Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
 * 
 * 
 */

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



posts.forEach(element => {
    CreatePost(element);
});


function CreatePost(objectEl){
    //DIV CONTAIN HTML
    let container = document.querySelector("#container");

    //POST
    let divPost = CreateElement("div", "post");
    container.append(divPost);

    //POST HEAD
    let divPostHead = CreateElement("div", "post__header");
    let divPostMeta = CreateElement("div", "post-meta");

    let divPostMetaIcon = CreateElement("div", "post-meta__icon");
    let imgProfile = CreateElement("img", "profile-pic");
    
    let div = document.createElement("div");
    let spanProfile = document.createElement("span");
    //nameUser = nameUser.charAt(0).toLocaleUpperCase();

        //TODO POPOLO L'IMMAGINE PROFILO DELL'ARRAY
        imgProfile.src = objectEl.author.image;
        if(objectEl.author.image === null){
            div.classList.add("profile-pic-default")
            //divPostMetaIcon.classList.add("profile-pic-default");
            imgProfile.removeAttribute("src");
            
            let initialsLetters = LetterUpperCase(objectEl.author.name);
            spanProfile.append(initialsLetters);
            divPostMetaIcon.append(div);
            div.append(spanProfile);
        }
        else{
            divPostMetaIcon.append(imgProfile);
        }
        
        //? profile-pic-default
        //? profile-pic-default span 

    let divPostMetaData = CreateElement("div", "post-meta__data");
    let divPostMetaAuthor = CreateElement("div", "post-meta__author");
        //TODO POPOLO L'META AUTHOR
        divPostMetaAuthor.append(objectEl.author.name);

    let divPostMetaTime = CreateElement("div", "post-meta__time");
        //TODO POPOLO L'META TIME
        divPostMetaTime.append(objectEl.created);


    //*APPEND POST HEAD
    //divPost.append(divPostHead);
    divPostHead.append(divPostMeta);

    divPostMeta.append(divPostMetaIcon);
        

    divPostMeta.append(divPostMetaData);
        divPostMetaData.append(divPostMetaAuthor);
        divPostMetaData.append(divPostMetaTime);


    //POST TEXT
    let divPostText = CreateElement("div", "post__text");

    //TODO DA INSERIRE IL TESTO (CONTENT) DALL'ARRAY
    divPostText.append(objectEl.content);

    //* APPEND POST TEXT
    //divPost.append(divPostText);

    //POST IMAGE
    let divPostImage = CreateElement("div", "post__image");
    let img = document.createElement("img");

    //  TODO DA INSERIRE L'IMMAGINE DELL'ARRAY
    img.src = objectEl.media;
    img.alt = "image post";


    //* APPEND POST IMAGE
    //divPost.append(divPostImage);
    divPostImage.append(img);


    //POST FOOTER
    let divPostFooter = CreateElement("div", "post__footer");
    let divLikes = CreateElement("div", "likes");
    divLikes.classList.add("js-likes");

    let divLikesCta = CreateElement("div", "likes__cta");
    let aButton = CreateElement("a", "like-button");
    aButton.classList.add("js-like-button");
    aButton.href = "#";
    aButton.setAttribute("data-postid", objectEl.id);

    let i = CreateElement("i", "like-button__icon");
    i.classList.add("fas", "fa-thumbs-up");
    let span = CreateElement("span", "like-button__label");
    span.append(" Mi piace");

    let divLikesCounter = CreateElement("div", "likes__counter");
    divLikesCounter.prepend("Piace a ");
    let b = CreateElement("b", "js-likes-counter");
    b.append(objectEl.likes);

    //* APPEND POST FOOTER
    //divPost.append(divPostFooter);
    divPostFooter.append(divLikes);

    divLikes.append(divLikesCta);
        divLikesCta.append(aButton);
        aButton.append(i);
        aButton.append(span);

    divLikes.append(divLikesCounter);
        divLikesCounter.append(b);
        divLikesCounter.append(" persone")


        divPost.append(divPostHead);
        divPost.append(divPostText);
        divPost.append(divPostImage);
        divPost.append(divPostFooter);

}




//LIKE & UPDATE NUMBER
let bottons = document.querySelectorAll("a");
let changeB = document.querySelectorAll("b");
let arrayLike = [];

bottons.forEach((botton, index) => {
    botton.addEventListener("click", function(){
        let like;
        let verify;
        botton.classList.toggle("like-button--liked");

        if(botton.classList.contains("like-button--liked")){
            console.log("Hai messo Mi piace");

            like = posts[index].likes + 1;
            posts[index].likes = like;
            changeB[index].textContent = like;

            verify = true;
        }
        else{
            console.log("Hai tolto mi piace");

            like = posts[index].likes - 1;
            posts[index].likes = like;
            changeB[index].textContent = like;

            //console.log(arrayLike);
            verify = false;
        }


        if(verify === true){
            arrayLike.push(posts[index].id);
            console.log(arrayLike);
        }
        else{
            arrayLike = DeleteIdArray(arrayLike, posts[index].id);
            console.log(arrayLike);
        }
    });
    
});



function CreateElement(tagName, className) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}


function LetterUpperCase(word){
    let initials = "";
    let letters = word.split(" ");
    letters.forEach(words => {
        let letter = words.charAt(0);
        initials = initials + letter
    });
    return initials;
}


function DeleteIdArray(array, id) {
    let element = array.indexOf(id); // Trova l'indice dell'elemento da cancellare
  
    if (element > -1) { // Verifica se l'elemento è stato trovato
      array.splice(element, 1); // Elimina l'elemento dall'array
    }
  
    return array; // Restituisci l'array modificato
  }
  